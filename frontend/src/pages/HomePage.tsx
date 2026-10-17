import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { homeFor } from "../lib/roles";

export const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "applications">("overview");

  return (
    <div className="bg-slate-50/50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-24 sm:pb-32">
        {/* Subtle ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
          <div className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-blue-200/35 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-1/4 w-[420px] h-[420px] bg-indigo-200/30 rounded-full blur-3xl" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-blue-100/40 via-purple-50/20 to-transparent blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 space-y-8 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                <span className="uppercase tracking-wider font-bold">
                  Next-Gen Campus Placement · Verification · Social Proof
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-black text-slate-900 tracking-tight leading-[1.12]">
                Show Your Skills.{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  Find Your Opportunity.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                Placement Hub empowers students to build verified technical portfolios, showcase real-world projects, explore curated roles, and track end-to-end recruitment pipelines with institutional transparency.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {user ? (
                  <Link
                    to={homeFor(user.role)}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all"
                  >
                    <span>Go to Dashboard</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all"
                    >
                      <span>Get Started</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link
                      to="/jobs"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200/90 shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all"
                    >
                      Explore Jobs
                    </Link>
                  </>
                )}
              </div>

              {/* Bullet verification tags */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time GitHub sync</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zero recruiter spam</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Verified placement proof</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Mockup (Exact layout from reference, bright SaaS styled) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">
                {/* Browser window bar */}
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-400 ml-2">placementhub.internal/student/alex-rivera</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE LEDGER
                  </div>
                </div>

                {/* Internal Tabs */}
                <div className="bg-slate-100/70 border-b border-slate-200 px-5 flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-3 px-3.5 border-b-2 transition-colors ${
                      activeTab === "overview"
                        ? "border-blue-600 text-blue-600 font-bold bg-white"
                        : "border-transparent hover:text-slate-900"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`py-3 px-3.5 border-b-2 transition-colors ${
                      activeTab === "projects"
                        ? "border-blue-600 text-blue-600 font-bold bg-white"
                        : "border-transparent hover:text-slate-900"
                    }`}
                  >
                    My Projects <span className="ml-1.5 px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full text-xs">2</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("applications")}
                    className={`py-3 px-3.5 border-b-2 transition-colors ${
                      activeTab === "applications"
                        ? "border-blue-600 text-blue-600 font-bold bg-white"
                        : "border-transparent hover:text-slate-900"
                    }`}
                  >
                    Applications
                  </button>
                  <div className="ml-auto text-xs text-slate-500 font-medium hidden sm:block">
                    Active Roles: <span className="font-bold text-slate-900">12</span>
                  </div>
                </div>

                {/* Candidate Summary Row */}
                <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-white">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-base shadow-md shadow-blue-500/20">
                      AR
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">Alex Rivera</h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                          TOP 5% IN CLASS
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">BS Computer Science · Class of 2025</p>
                    </div>
                  </div>

                  <div className="text-right text-xs sm:text-sm">
                    <span className="text-slate-400 block text-[11px] uppercase font-semibold">Target Cohort</span>
                    <span className="font-bold text-slate-800">Backend / Distributed Systems</span>
                  </div>
                </div>

                {/* Verified Repo Check Banner */}
                <div className="mx-5 my-4 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs sm:text-sm text-emerald-800">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-semibold">
                      Cryptographically verified repository background check
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-600 text-white font-bold rounded-md text-xs">
                    Repo: Verified
                  </span>
                </div>

                {/* Project Showcase Card */}
                <div className="mx-5 mb-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-bold text-slate-900">Autonomous Multi-Agent Scheduler</h5>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-mono text-xs font-bold">
                        TS · PyTorch
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">1.7k ops/sec</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Automated scheduler coordinating asynchronous agent routines in serverless workers with fault-tolerant state persistence.
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500 font-medium">
                    <span>Commits: <strong className="text-slate-800">247 verified</strong></span>
                    <span>Test coverage: <strong className="text-emerald-700">98% pass</strong></span>
                    <span>Audited: <strong className="text-slate-800">Campus Registry</strong></span>
                  </div>
                </div>

                {/* Pipeline Card: Apex Systems */}
                <div className="mx-5 mb-5 p-4 rounded-xl bg-gradient-to-r from-blue-50/60 to-indigo-50/60 border border-blue-200 space-y-2.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                        A
                      </div>
                      <span className="font-bold text-slate-900">Apex Systems · Software Engineer Intern</span>
                    </div>
                    <span className="px-2.5 py-0.5 bg-blue-600 text-white rounded font-bold text-xs">
                      STAGE: 3 OF 4
                    </span>
                  </div>

                  {/* Progress tracker */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
                      <span className="text-blue-600 font-bold">1. Applied</span>
                      <span className="text-blue-600 font-bold">2. Tech Screening</span>
                      <span className="text-blue-600 font-bold">3. 1st Round Tech</span>
                      <span className="text-slate-400">4. Final Offer</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: ENGINEERED FOR CLARITY AND INSTITUTIONAL TRUST
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-widest">
              Structured · Transparent
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Engineered for Clarity and Institutional Trust
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Replacing fragmented spreadsheets and opaque hiring boards with structured, verifiable workflows that give candidates proof and recruiters certainty.
            </p>
          </div>

          {/* 3 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Verified Student Portfolios */}
            <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Verified Student Portfolios</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real-time GitHub sync, verified coursework completions, and cryptographically signed repository evaluations directly within university-accredited registries.
                </p>

                {/* Subcard preview */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold">28+ Skills Cryptographically Verified</span>
                    <span className="text-emerald-600 font-bold">✓ Signed</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Architecture Validity</span>
                    <strong className="text-slate-800">96.4% score</strong>
                  </div>
                  <div className="pt-1.5 border-t border-slate-100 text-xs text-slate-500">
                    Continuous Repositories Monitored: <strong className="text-slate-800">12 repos</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group">
                  <span>Explore credentials engine</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Curated & Organized Jobs */}
            <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Curated & Organized Jobs</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Campus job pipelines filtered by verified share status, transparent stipend ranges, and pre-cleared campus quotas with zero duplicate postings.
                </p>

                {/* Subcard preview */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold">Direct Campus Allocation</span>
                    <span className="text-blue-600 font-bold">24 of 30 Filled</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Role: Full-Stack Engineer</span>
                    <strong className="text-slate-800">$6,500 / mo</strong>
                  </div>
                  <div className="pt-1.5 border-t border-slate-100 text-xs text-slate-500">
                    Recruiter SLA: <strong className="text-slate-800">&lt; 48hr Response</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 group">
                  <span>Browse verified roles</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Real-Time Tracking */}
            <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Real-Time Tracking</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Full auditability over hiring pipelines. From initial submission through first code review and formal digital offer letter generation with zero ghosting.
                </p>

                {/* Subcard preview */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-semibold">Stage: Offer Letter Issued</span>
                    <span className="text-emerald-600 font-bold">Real-Time Audit</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Candidate Decision</span>
                    <strong className="text-slate-800">Signed & Verified</strong>
                  </div>
                  <div className="pt-1.5 border-t border-slate-100 text-xs text-slate-500">
                    Timestamp: <strong className="text-slate-800">14 Oct 2024 · 14:32 UTC</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 group">
                  <span>Inspect pipeline logs</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: HOW PLACEMENT HUB WORKS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-bold uppercase tracking-widest">
              End-to-End Protocol
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              How Placement Hub Works
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              A deterministic four-phase workflow converting academic achievement into verified enterprise endorsement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-mono font-bold text-base flex items-center justify-center">
                  01
                </span>
                <span className="text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Build Your Profile</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Import verified academic credentials, transcripts, and coursework using authenticated registrar APIs.
              </p>
              <div className="pt-2 text-xs font-semibold text-blue-600 flex items-center gap-1">
                <span>Deterministic Academic Ledger</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-mono font-bold text-base flex items-center justify-center">
                  02
                </span>
                <span className="text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Showcase Projects</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Link live production deployments, architecture diagrams, and validated repositories with code-quality analytics.
              </p>
              <div className="pt-2 text-xs font-semibold text-indigo-600 flex items-center gap-1">
                <span>Git Commit Provenance</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-mono font-bold text-base flex items-center justify-center">
                  03
                </span>
                <span className="text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Discover Jobs</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Match with campus directories based on objective, executable verification rather than resume screening filters.
              </p>
              <div className="pt-2 text-xs font-semibold text-purple-600 flex items-center gap-1">
                <span>Precision Filter Algorithms</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-mono font-bold text-base flex items-center justify-center">
                  04
                </span>
                <span className="text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Track Applications</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Follow interview schedules, calculate cryptographic-screening statements, and claim verified job offers.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-600 flex items-center gap-1">
                <span>Deterministic Offer Issuance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: HIRE BASED ON PROVEN CODE, NOT RESUME KEYWORDS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Column: Recruiter Proposition */}
            <div className="lg:col-span-6 space-y-7">
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-bold uppercase tracking-widest">
                For Recruiters & Enterprise Talent Partners
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Hire Based on Proven Code, Not Resume Keywords.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Eliminate hours spent sorting unverified resumes. Access verified cohorts with direct access to production repositories, system architectural briefs, and university validation.
              </p>

              {/* 3 bullet feature rows */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-bold text-slate-900">Direct Repository Access</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Filter by peer-validated repositories, concurrency models, distributed primitives, and memory safety patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-bold text-slate-900">One-Click Campus Drive Scheduling</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Sync individual interview rounds directly into student schedules with native calendar integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-bold text-slate-900">Automated Institutional Screening</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Enforce company and university recruitment rules with strict cryptographic transcript verification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat Callout box */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-5">
                <div className="text-3xl sm:text-4xl font-black text-blue-600">64%</div>
                <div className="text-sm text-slate-600">
                  <strong className="text-slate-900 block text-base font-bold">Reduction in Screening Cycle Time</strong>
                  Automated verification replaces manual transcript checks and resume parsing.
                </div>
              </div>
            </div>

            {/* Right Column: Elena Rostova Candidate Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-100 p-7 sm:p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-purple-500/20">
                      ER
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Elena Rostova</h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold">DISTRIBUTED SYSTEMS TRACK · 2025</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold">
                    TOP 1% CANDIDATE
                  </span>
                </div>

                {/* Validated Competency Ratings */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Validated Competency Ratings
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-slate-700">Systems Architecture & Concurrency</span>
                      <span className="text-blue-600 font-bold">94%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[94%] h-full bg-blue-600 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-slate-700">Code Quality & Test Coverage</span>
                      <span className="text-indigo-600 font-bold">98%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-indigo-600 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-slate-700">Algorithmic Optimization</span>
                      <span className="text-purple-600 font-bold">91%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[91%] h-full bg-purple-600 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Faculty Endorsement Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <span className="text-emerald-600">★</span>
                    <span>Faculty Endorsement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "Elena demonstrates exceptional mastery in fault-tolerance implementations, having audited our university-cluster consensus protocol."
                  </p>
                  <p className="text-xs text-slate-500 font-semibold pt-1">
                    — Dr. R. Wilson, Head of Computer Science Dept.
                  </p>
                </div>

                {/* Recruiter Action Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all text-center">
                    Schedule Interview
                  </button>
                  <button className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-sm transition-all text-center">
                    Shortlist Candidate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: CAREER INSIGHTS & RESOURCES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs sm:text-sm font-bold uppercase tracking-widest">
                Industry Knowledge & Preparation
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Campus Recruitment Insights & Trends
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Curated preparation roadmaps, high-demand skill analyses, and direct technical benchmarks from top campus hiring partners.
              </p>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-blue-600 hover:border-blue-300 font-bold text-sm shadow-xs transition-all shrink-0"
            >
              <span>Explore All Insights</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Insight 1 */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold">SYSTEM DESIGN</span>
                <span className="text-slate-400">8 min read</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors cursor-pointer">
                Top Concurrency & Distributed Primitives Tested in 2026 Campus Drives
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A technical review of Raft consensus, message queues, and caching strategies commonly evaluated by enterprise engineering recruiters.
              </p>
              <div className="pt-2 flex items-center justify-between text-sm font-bold text-blue-600">
                <Link to="/insights" className="hover:underline">Read Full Benchmark</Link>
                <span>→</span>
              </div>
            </div>

            {/* Insight 2 */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-bold">PORTFOLIO AUDIT</span>
                <span className="text-slate-400">5 min read</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug hover:text-indigo-600 transition-colors cursor-pointer">
                How Code Verification Scores Outperform Traditional ATS Keyword Filters
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Why git-backed provenance, unit test coverage, and live deployment links generate 3.4x higher interview shortlisting rates.
              </p>
              <div className="pt-2 flex items-center justify-between text-sm font-bold text-indigo-600">
                <Link to="/insights" className="hover:underline">View Statistical Report</Link>
                <span>→</span>
              </div>
            </div>

            {/* Insight 3 */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-700 font-bold">HIRING TRENDS</span>
                <span className="text-slate-400">6 min read</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug hover:text-purple-600 transition-colors cursor-pointer">
                The 2026 University Placement Benchmark: Emerging Tech Stacks
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                An analysis of over 50,000 university applications highlighting the fastest-growing hiring demands across cloud and full-stack disciplines.
              </p>
              <div className="pt-2 flex items-center justify-between text-sm font-bold text-purple-600">
                <Link to="/insights" className="hover:underline">Explore Hiring Trends</Link>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: PLACEMENT ROADMAP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-widest">
                Structured Timeline
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Your Complete Placement Roadmap
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Step-by-step milestone progression from verified onboarding to formal campus offer letter acceptance.
              </p>
            </div>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all shrink-0"
            >
              <span>Interactive Roadmap Tracker</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3">
              <div className="text-xs sm:text-sm font-bold text-blue-600">PHASE 01</div>
              <h4 className="text-base font-bold text-slate-900">Registry & Verification</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Register student account</li>
                <li>Verify university email</li>
                <li>Connect GitHub profile</li>
                <li>Upload base resume</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3">
              <div className="text-xs sm:text-sm font-bold text-indigo-600">PHASE 02</div>
              <h4 className="text-base font-bold text-slate-900">Skill Verification</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Automated commit scan</li>
                <li>AI technical assessment</li>
                <li>Obtain skill badges</li>
                <li>Faculty/peer verification</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3">
              <div className="text-xs sm:text-sm font-bold text-purple-600">PHASE 03</div>
              <h4 className="text-base font-bold text-slate-900">Campus Drive Match</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Personalized job matching</li>
                <li>One-click applications</li>
                <li>Automated screening pass</li>
                <li>Direct shortlist triggers</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3">
              <div className="text-xs sm:text-sm font-bold text-emerald-600">PHASE 04</div>
              <h4 className="text-base font-bold text-slate-900">Interviews & Offer</h4>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Live calendar scheduling</li>
                <li>Technical round reviews</li>
                <li>Real-time status updates</li>
                <li>Digital offer issuance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: CALL TO ACTION BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
            Institutional Partnership Ready
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Transform Your Campus Hiring Experience?
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students, university placement offices, and top engineering teams on Placement Hub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
            <Link
              to="/signup"
              className="px-9 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all hover:scale-105"
            >
              Get Started Now →
            </Link>
            <Link
              to="/jobs"
              className="px-9 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition-all hover:scale-105"
            >
              Explore Jobs
            </Link>
          </div>

          {/* Compliance & credential badges */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-slate-400 font-semibold border-t border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>200+ Top-30 Certified Inst.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>50k+ Partner Students</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>FERPA / GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
