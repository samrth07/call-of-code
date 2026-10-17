import prisma from "../src/config/prisma.ts";

async function applyMigration() {
  console.log("Applying Referral & Alumni schema changes...");

  // 1. Create ReferralStatus enum
  await prisma.$executeRawUnsafe(`
    DO $$ BEGIN
      CREATE TYPE "ReferralStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'WITHDRAWN', 'EXPIRED');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;
  `);
  console.log("✓ ReferralStatus enum created/verified");

  // 2. Add isAlumni column to StudentProfile
  await prisma.$executeRawUnsafe(`
    ALTER TABLE "StudentProfile" ADD COLUMN IF NOT EXISTS "isAlumni" BOOLEAN NOT NULL DEFAULT false;
  `);
  console.log("✓ isAlumni column added to StudentProfile");

  // 3. Add index on institutionId + isAlumni
  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "StudentProfile_institutionId_isAlumni_idx" ON "StudentProfile"("institutionId", "isAlumni");
  `);
  console.log("✓ Index StudentProfile_institutionId_isAlumni_idx created");

  // 4. Create Referral table
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Referral" (
      "id" UUID NOT NULL DEFAULT gen_random_uuid(),
      "applicationId" UUID NOT NULL,
      "alumniStudentProfileId" UUID NOT NULL,
      "status" "ReferralStatus" NOT NULL DEFAULT 'PENDING',
      "requestNote" VARCHAR(1000),
      "alumniNote" VARCHAR(1000),
      "requestedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "respondedAt" TIMESTAMPTZ(6),
      "expiresAt" TIMESTAMPTZ(6),
      "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

      CONSTRAINT "Referral_pkey" PRIMARY KEY ("id"),
      CONSTRAINT "Referral_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT "Referral_alumniStudentProfileId_fkey" FOREIGN KEY ("alumniStudentProfileId") REFERENCES "StudentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE
    );
  `);
  console.log("✓ Referral table created");

  // 5. Create unique constraint & indexes
  await prisma.$executeRawUnsafe(`
    CREATE UNIQUE INDEX IF NOT EXISTS "Referral_applicationId_alumniStudentProfileId_key" ON "Referral"("applicationId", "alumniStudentProfileId");
  `);
  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "Referral_applicationId_idx" ON "Referral"("applicationId");
  `);
  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "Referral_alumniStudentProfileId_status_idx" ON "Referral"("alumniStudentProfileId", "status");
  `);
  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS "Referral_requestedAt_idx" ON "Referral"("requestedAt");
  `);
  console.log("✓ Referral unique constraints and indexes created");

  console.log("\n🚀 All Referral schema updates successfully applied to live database!");
  await prisma.$disconnect();
}

applyMigration().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
