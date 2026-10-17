# 🎓 PlacementHub (Call-of-Code)

> **Evidence-Based Placement & Campus Hiring Platform**  
> Matches students to job openings on **verified proof of skills**, not inflated claims, with **truthful, tailored resumes**, automated job deduplication, and a unified pipeline for students, recruiters, and placement officers.

---

## 🌟 Key Capabilities

| Feature | Description |
| :--- | :--- |
| **Evidence-Backed Matching** | Evaluates students based on verifiable evidence (timed assessments, commit-pinned GitHub code) instead of unbacked keyword claims. |
| **Truthful Resume Builder** | Generates dynamic, 1-page resumes tailored per job opening. Every bullet is strictly anchored to verified evidence; unsupported claims are transparently flagged. |
| **Cross-Source Job Deduplication** | Placement teams can paste WhatsApp job descriptions, alumni referrals, or ingest from job APIs—incoming duplicates are merged into a single opening. |
| **Unified Placement Pipeline** | Seamless recruitment stages (`Applied` → `Interview` → `Offer` → `Placed`) visible in real-time across Student, Placement Officer, and Recruiter dashboards. |
| **Batch Ranking Engine** | Placement officers can paste a job description to instantly rank an entire college cohort with detailed gap analysis and CSV export. |

---

## 🛠️ Architecture & Tech Stack

```
   ┌─────────────────────────────────────────────────────────┐
   │                        Browser                          │
   └───────────────────────────┬─────────────────────────────┘
                               │
            HTTP :80 / :5173   │  (Same-Origin /api/v1)
                               ▼
   ┌─────────────────────────────────────────────────────────┐
   │                    Frontend Container                   │
   │      Nginx Alpine (Static Assets + Reverse Proxy)       │
   └───────────────────────────┬─────────────────────────────┘
                               │  proxy_pass http://backend:4000
                               ▼
   ┌─────────────────────────────────────────────────────────┐
   │                    Backend Container                    │
   │           Bun + Express 5 + Prisma 7 Client             │
   └───────────────────────────┬─────────────────────────────┘
                               │  SSL / Pooler
                               ▼
   ┌─────────────────────────────────────────────────────────┐
   │              Supabase PostgreSQL Database                │
   └─────────────────────────────────────────────────────────┘
```

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Nginx.
- **Backend**: Bun runtime, Express 5, Prisma 7, PostgreSQL (Supabase), JWT (`jose`), Argon2 (`@node-rs/argon2`).
- **AI & Evidence**: Google Gemini 2.5 Flash, GitHub REST API, PDF/Docx parser.
- **Containerization**: Docker, Docker Compose, Multi-stage builds with Nginx proxy.

---

## 🔐 Environment Variables

Create a `backend/.env` file (copy from `backend/.env.example`):

| Variable | Description | Example |
| :--- | :--- | :--- |
| `NODE_ENV` | Application environment | `development` or `production` |
| `PORT` | Backend server port | `4000` |
| `FRONTEND_URL` | Allowed CORS origins. Use `*` to allow any IP/domain on AWS | `*` |
| `DATABASE_URL` | Supabase Postgres connection pooler URL (IPv4) | `postgresql://postgres:pass@db.ref.supabase.co:5432/postgres?sslmode=require` |
| `DIRECT_URL` | Supabase direct database connection for migrations | `postgresql://postgres:pass@db.ref.supabase.co:5432/postgres?sslmode=require` |
| `JWT_ACCESS_SECRET`| Secret key for signing access tokens (min 32 chars) | `openssl rand -base64 32` |
| `JWT_ACCESS_TTL` | Access token expiration | `15m` |
| `REFRESH_TOKEN_TTL_DAYS` | Refresh token cookie lifespan | `7` |
| `RECRUITER_SIGNUP_CODE` | Secret invitation code for recruiters | `RECRUIT2026` |
| `PLACEMENT_SIGNUP_CODE` | Secret invitation code for placement cell officers | `PLACE2026` |
| `GEMINI_API_KEY` | Google Gemini API key for resume parsing & assessments | `AIzaSy...` |
| `GEMINI_MODEL` | Primary Gemini model | `gemini-2.5-flash` |
| `GITHUB_TOKEN` | GitHub personal access token (avoids API rate limits) | `github_pat_...` |

*(Optional frontend env: `frontend/.env.example` allows overriding `VITE_API_BASE_URL`, which defaults to relative `/api/v1` for zero CORS).*

---

## 🚀 Running Locally (Without Docker)

### Prerequisites
- [Bun](https://bun.sh) (v1.2+ installed)
- Supabase PostgreSQL instance

```bash
# 1. Install dependencies for both frontend and backend
bun install
cd backend && bun install && cd ../frontend && bun install && cd ..

# 2. Configure backend environment
cp backend/.env.example backend/.env
# Fill in your DATABASE_URL, GEMINI_API_KEY, and JWT_ACCESS_SECRET

# 3. Generate Prisma client & apply database schema
cd backend
bun run db:generate
cd ..

# 4. (Optional) Seed synthetic demo data
cd backend
bun run prisma/seed.ts
cd ..

# 5. Start both servers concurrently
bun run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000/api/v1

---

## 🐳 Production Deployment (AWS EC2 / Ubuntu / Docker)

The Docker setup is architected to be **completely production-ready** with **Zero CORS issues**:
- **Nginx** serves the frontend and reverse-proxies `/api/v1` to the backend internally.
- The browser calls `/api/v1` (same-origin), completely bypassing cross-origin restrictions.
- Backend CORS is dynamically enabled with `*` support for external calls.

### Steps to Deploy on AWS EC2 (Ubuntu):

```bash
# 1. Clone repository on your EC2 instance
git clone <your-repo-url>
cd call-of-code

# 2. Configure your production secrets in backend/.env
cp backend/.env.example backend/.env
nano backend/.env
# (Enter your Supabase credentials, Gemini API Key, and set FRONTEND_URL=*)

# 3. Build and launch all containers in detached mode
docker compose up -d --build

# 4. View running containers and logs
docker compose ps
docker compose logs -f
```

### Accessing your App:
- **Frontend App**: `http://<YOUR_EC2_PUBLIC_IP>` (Port 80) or `http://<YOUR_EC2_PUBLIC_IP>:5173`
- **Backend Health Check**: `http://<YOUR_EC2_PUBLIC_IP>:4000/api/v1/health`

*(Make sure your EC2 Security Group allows inbound traffic on ports **80**, **5173**, and **4000**).*

---

## 👥 Demo Logins (After Seeding)

Password for all synthetic demo accounts is: **`Demo@12345`**

| Role | Email | Features to Test |
| :--- | :--- | :--- |
| **Placement Cell** | `placement@demo.placementhub.test` | Job Ingestion, Batch Cohort Ranking, Pipeline Monitoring |
| **Recruiter (Acme)** | `recruiter.acme@demo.placementhub.test` | Post Job, Candidate Shortlist, Evidence Audit, Status Changes |
| **Student (Strong)** | `asha@demo.placementhub.test` | Evidence-based job matches, Tailored 1-page resume generation |
| **Student (Unverified)**| `karan@demo.placementhub.test` | Padded resume claim check, Low fit scores with actionable advice |

---

## 🧪 Testing & Validation

```bash
# Run backend test suite (166 unit & logic tests)
cd backend && bun test

# Run TypeScript type check
bun run build
```
