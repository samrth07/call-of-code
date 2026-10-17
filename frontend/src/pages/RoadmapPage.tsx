import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface RoadmapStep {
  id: string;
  phase: string;
  title: string;
  level: "Foundational" | "Intermediate" | "Advanced" | "Production";
  duration: string;
  description: string;
  keySkills: string[];
  recommendedProject: string;
  interviewTip: string;
}

interface RoadmapTrack {
  id: string;
  title: string;
  subtitle: string;
  targetRole: string;
  estimatedMonths: string;
  steps: RoadmapStep[];
}

const ROADMAP_DATA: RoadmapTrack[] = [
  {
    id: "backend-express",
    title: "Backend Engineering (Node.js & Express)",
    subtitle: "Master server architecture, asynchronous runtimes, relational databases, and microservices.",
    targetRole: "Backend Software Engineer",
    estimatedMonths: "3-4 Months",
    steps: [
      {
        id: "step-1",
        phase: "Phase 1: Core Runtime & Language",
        title: "Node.js Architecture & Asynchronous I/O",
        level: "Foundational",
        duration: "2 Weeks",
        description:
          "Deep understanding of the V8 JavaScript engine, libuv event loop phases, microtask/macrotask queues, Streams API, and Buffer memory management.",
        keySkills: ["Event Loop", "Streams & Buffers", "Error Handling", "Process Management"],
        recommendedProject: "Custom CLI log streamer that parses multi-gigabyte log files with chunked backpressure.",
        interviewTip: "Be prepared to explain the difference between process.nextTick(), setImmediate(), and setTimeout(0).",
      },
      {
        id: "step-2",
        phase: "Phase 2: API Architecture",
        title: "Express 5 Routing, Middleware & Security",
        level: "Intermediate",
        duration: "3 Weeks",
        description:
          "Designing RESTful endpoints, custom middleware pipelines, centralized error handlers, JWT authentication with HttpOnly cookies, and rate limiting.",
        keySkills: ["Express.js", "Middleware Pattern", "JWT & CORS", "Zod Validation"],
        recommendedProject: "Secure multi-tenant authentication microservice with refresh token rotation and argon2 hashing.",
        interviewTip: "Explain why storing access tokens in localStorage exposes users to XSS attacks.",
      },
      {
        id: "step-3",
        phase: "Phase 3: Data Layer & Persistence",
        title: "PostgreSQL & Prisma ORM Mastery",
        level: "Intermediate",
        duration: "3 Weeks",
        description:
          "Relational schema modeling, foreign key constraints, B-Tree vs GIN indexing, ACID transaction isolation, and query optimization via Prisma.",
        keySkills: ["PostgreSQL", "Prisma ORM", "Database Indexing", "Transactions"],
        recommendedProject: "High-concurrency ticket reservation system preventing double-booking using database-level locking.",
        interviewTip: "Understand EXPLAIN ANALYZE output and how compound indexes reduce sequential table scans.",
      },
      {
        id: "step-4",
        phase: "Phase 4: Caching & Message Queues",
        title: "Redis & Asynchronous Background Workers",
        level: "Advanced",
        duration: "2 Weeks",
        description:
          "In-memory caching patterns (Cache-Aside, Write-Through), distributed locking, rate-limiting counters, and task queue processing with BullMQ.",
        keySkills: ["Redis Caching", "BullMQ", "Pub/Sub", "Distributed Locks"],
        recommendedProject: "Background report generator that asynchronously compiles candidate assessment scorecards.",
        interviewTip: "Describe the Thundering Herd cache problem and how probabilistic early expiration solves it.",
      },
      {
        id: "step-5",
        phase: "Phase 5: Containerization & Cloud Deployments",
        title: "Docker, CI/CD & Observability",
        level: "Production",
        duration: "2 Weeks",
        description:
          "Multi-stage Docker builds, health-check endpoints, structured JSON logging (Winston/Pino), GitHub Actions automated tests, and cloud deployment.",
        keySkills: ["Docker", "GitHub Actions", "Pino Logging", "Reverse Proxies"],
        recommendedProject: "Fully containerized backend with Docker Compose including API, Postgres, Redis, and automated test runners.",
        interviewTip: "Explain the security and layer caching benefits of multi-stage Docker builds.",
      },
    ],
  },
  {
    id: "fullstack-react",
    title: "Fullstack Engineering (React & TypeScript)",
    subtitle: "Build modern, accessible, high-performance web applications with end-to-end type safety.",
    targetRole: "Fullstack Web Engineer",
    estimatedMonths: "4 Months",
    steps: [
      {
        id: "fs-1",
        phase: "Phase 1: Type Safety & Core Patterns",
        title: "TypeScript Mastery & Modern React 19",
        level: "Foundational",
        duration: "3 Weeks",
        description:
          "Strict TypeScript configurations, generics, utility types, React hooks ecosystem, reconciliation, and memoization techniques.",
        keySkills: ["TypeScript Generics", "React 19 Hooks", "Component Design", "Accessibility"],
        recommendedProject: "Dynamic multi-step form engine driven by recursive JSON configuration schemas.",
        interviewTip: "Explain how React reconciliation works and why index-based keys cause state bugs in dynamic lists.",
      },
      {
        id: "fs-2",
        phase: "Phase 2: Global State & Server Cache",
        title: "Client-Side Caching & Context Architecture",
        level: "Intermediate",
        duration: "2 Weeks",
        description:
          "Decoupling server data from local UI state using TanStack Query / SWR, optimistic UI updates, and atomic state libraries.",
        keySkills: ["TanStack Query", "Optimistic UI", "Context API", "Offline Sync"],
        recommendedProject: "Real-time collaborative task board with drag-and-drop and instant optimistic status updates.",
        interviewTip: "Compare server state caching strategies with traditional global Redux stores.",
      },
      {
        id: "fs-3",
        phase: "Phase 3: Fullstack API Integration",
        title: "End-to-End Type Safety with tRPC & REST",
        level: "Advanced",
        duration: "3 Weeks",
        description:
          "Sharing data contracts between frontend and backend, Zod schema validation, secure cookie handling, and responsive layouts.",
        keySkills: ["REST APIs", "Zod Schemas", "Tailwind CSS", "Security Practices"],
        recommendedProject: "Autonomous assessment testing portal with live countdown timers and auto-save drafts.",
        interviewTip: "How do you protect fullstack applications against CSRF and clickjacking attacks?",
      },
      {
        id: "fs-4",
        phase: "Phase 4: Web Performance & Production Polish",
        title: "Core Web Vitals & Production Deployment",
        level: "Production",
        duration: "2 Weeks",
        description:
          "LCP/FID/CLS optimization, bundle chunking, dynamic imports, SEO metadata configuration, and edge CDN deployments.",
        keySkills: ["Bundle Analysis", "Code Splitting", "Vite Tuning", "Web Vitals"],
        recommendedProject: "Performance benchmark audit of a complex web app achieving 98+ Lighthouse scores.",
        interviewTip: "Explain how tree-shaking works and what causes modules to fail tree-shaking.",
      },
    ],
  },
  {
    id: "ai-systems",
    title: "AI & LLM Backend Integration",
    subtitle: "Integrate generative AI APIs, structured JSON extraction, and RAG pipelines into production services.",
    targetRole: "AI Application Engineer",
    estimatedMonths: "3 Months",
    steps: [
      {
        id: "ai-1",
        phase: "Phase 1: Foundation Models & APIs",
        title: "Google Gemini & Anthropic API Fundamentals",
        level: "Foundational",
        duration: "2 Weeks",
        description:
          "Prompt engineering strategies, temperature tuning, token budgeting, structured output extraction via function calling / responseSchema.",
        keySkills: ["Gemini 2.5/3.0 API", "Structured Outputs", "Token Economics", "Schema Validation"],
        recommendedProject: "Automated technical resume analyzer extracting standardized skill graphs with zero hallucinations.",
        interviewTip: "How do you guarantee that an LLM outputs 100% valid JSON matching a specific TypeScript interface?",
      },
      {
        id: "ai-2",
        phase: "Phase 2: Retrieval Augmented Generation (RAG)",
        title: "Vector Embeddings & Semantic Search",
        level: "Intermediate",
        duration: "3 Weeks",
        description:
          "Text chunking strategies, vector embeddings (text-embedding-004), vector indexes (pgvector / Pinecone), and hybrid keyword-semantic retrieval.",
        keySkills: ["pgvector", "Embedding Models", "Chunking Strategies", "Semantic Search"],
        recommendedProject: "Campus placement query engine answering questions over 500+ pages of company interview guidelines.",
        interviewTip: "Explain why cosine similarity is preferred over Euclidean distance for high-dimensional embeddings.",
      },
      {
        id: "ai-3",
        phase: "Phase 3: Production Reliability & Guardrails",
        title: "LLM Observability, Rate Limiting & Failover",
        level: "Production",
        duration: "2 Weeks",
        description:
          "Handling API quotas, exponential backoff with jitter, fallback model cascades, and content safety filters.",
        keySkills: ["Model Cascades", "Exponential Backoff", "Telemetry & Tracing", "Safety Guardrails"],
        recommendedProject: "Zero-downtime assessment generation service that automatically fails over across multiple AI models.",
        interviewTip: "How would you design a retry queue when an upstream LLM provider returns HTTP 429 Rate Limit?",
      },
    ],
  },
];

export const RoadmapPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTrackId, setActiveTrackId] = useState<string>("backend-express");
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({
    "step-1": true,
    "step-2": true,
  });

  const currentTrack =
    ROADMAP_DATA.find((track) => track.id === activeTrackId) || ROADMAP_DATA[0];

  const totalSteps = currentTrack.steps.length;
  const finishedCount = currentTrack.steps.filter((s) => completedSteps[s.id]).length;
  const progressPercent = Math.round((finishedCount / totalSteps) * 100);

  const toggleStep = (stepId: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Interactive Engineering Curriculum</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Developer Career Roadmap
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Follow industry-validated milestones designed specifically for university students preparing for Tier-1 engineering campus drives. Every milestone includes real-world projects and interview defense playbooks.
          </p>
        </div>

        {/* Hero Roadmap Visual Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
          <img
            src="/backend_roadmap.jpg"
            alt="Software Engineering Career Roadmap Blueprint"
            className="w-full h-auto max-h-[28rem] object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Blueprint Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1.5">
                Full Systems Engineering Mastery Map
              </h2>
            </div>
            <Link
              to={user ? "/dashboard/assessment" : "/signin"}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition whitespace-nowrap"
            >
              <span>Validate Skills with AI</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Track Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
          {ROADMAP_DATA.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`flex-1 min-w-[14rem] px-5 py-3 rounded-xl text-left font-bold text-sm transition-all ${
                activeTrackId === track.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              <div className="text-xs uppercase tracking-wider opacity-80 mb-0.5">
                {track.estimatedMonths}
              </div>
              <div className="truncate">{track.title}</div>
            </button>
          ))}
        </div>

        {/* Active Track Header & Progress Telemetry */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
              Active Track Target: {currentTrack.targetRole}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentTrack.title}
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              {currentTrack.subtitle}
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 sm:min-w-[18rem] space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Track Completion</span>
              <span className="text-blue-600">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-xs text-slate-500 flex justify-between">
              <span>{finishedCount} of {totalSteps} Milestones Done</span>
              <span>{totalSteps - finishedCount} Remaining</span>
            </div>
          </div>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="space-y-6">
          {currentTrack.steps.map((step, idx) => {
            const isDone = !!completedSteps[step.id];

            return (
              <div
                key={step.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all ${
                  isDone
                    ? "border-emerald-200/80 shadow-xs bg-emerald-50/15"
                    : "border-slate-200/80 shadow-sm hover:border-blue-300"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Column: Details */}
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                        {step.phase}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                          step.level === "Foundational"
                            ? "bg-sky-50 text-sky-700 border border-sky-200"
                            : step.level === "Intermediate"
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : step.level === "Advanced"
                            ? "bg-purple-50 text-purple-700 border border-purple-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {step.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        Duration: {step.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {idx + 1}. {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {step.description}
                    </p>

                    {/* Key Skills Pill List */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {step.keySkills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Recommended Project & Interview Tip */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Recommended Capstone Project
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {step.recommendedProject}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                          Campus Interview Playbook
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {step.interviewTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Completion Toggle */}
                  <div className="lg:w-48 flex-shrink-0 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        isDone
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      {isDone ? (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Completed</span>
                        </>
                      ) : (
                        <span>Mark as Done</span>
                      )}
                    </button>

                    <span className="text-xs font-semibold text-slate-400">
                      Step {idx + 1} of {totalSteps}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA: Validate with AI */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-5">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Ready to Prove Your Backend Mastery?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Take a personalized 10-question AI assessment based on your current technical portfolio and fast-track your profile for direct campus recruitment.
          </p>
          <div className="pt-2">
            <Link
              to={user ? "/dashboard/assessment" : "/signin"}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm rounded-xl shadow-lg transition"
            >
              <span>Launch Assessment Sandbox</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
