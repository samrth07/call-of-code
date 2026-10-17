import React, { useState } from "react";
import { Link } from "react-router-dom";

interface InsightArticle {
  id: string;
  category: "Industry News" | "Campus Trends" | "Engineering Deep-Dive" | "Hiring Benchmarks";
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  tags: string[];
  keyTakeaways: string[];
  summary: string;
  fullContent: string;
}

const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "news-1",
    category: "Industry News",
    title: "The Death of LeetCode Memorization: Tier-1 Tech Shifts to Real-World Architecture",
    subtitle: "Why 84% of engineering recruiters now favor executable code repositories over abstract algorithm tricks.",
    readTime: "5 min read",
    date: "October 14, 2026",
    author: "Elena Rostova",
    authorRole: "Head of Campus Talent, FinScale Global",
    tags: ["Recruitment", "SystemDesign", "CodeQuality", "NodeJS"],
    keyTakeaways: [
      "Traditional algorithmic whiteboard rounds failed to predict candidate performance in production systems.",
      "Fintech and SaaS companies now evaluate async concurrency, schema design, and error recovery.",
      "Students with verified GitHub pull requests and CI pipelines see 3.4x higher callback rates.",
    ],
    summary:
      "A comprehensive survey of 180+ tech companies reveals a massive shift away from artificial dynamic programming brainteasers toward practical system resilience, Docker containerization, and API security.",
    fullContent: `
For over a decade, university students spent countless hours memorizing optimal solutions to inverted binary trees and sliding window puzzles. While these exercises test raw algorithmic cognition, engineering leaders consistently report that high LeetCode scores fail to correlate with productive software craftsmanship.

In 2026, the industry has fundamentally pivoted. Leading technology companies are now adopting autonomous sandbox evaluations where candidates are asked to debug an Express middleware bottleneck, optimize a slow PostgreSQL index query, or design an idempotent webhook listener.

"We don't need engineers who can recite Dijkstra's algorithm from memory," explains a Senior Engineering Manager at Stripe. "We need developers who understand how to handle database connection pool exhaustion when traffic surges tenfold."
    `,
  },
  {
    id: "news-2",
    category: "Campus Trends",
    title: "Campus Tech Compensation Benchmark: 2026 Fullstack & Backend Salaries",
    subtitle: "Detailed breakdown of stipend ranges, base offers, and equity packages across Indian tech hubs.",
    readTime: "7 min read",
    date: "October 08, 2026",
    author: "Kavita Ramamurthy",
    authorRole: "Principal Compensation Analyst, TechMetrics",
    tags: ["Salaries", "Tier1Offers", "CampusHiring", "CareerGrowth"],
    keyTakeaways: [
      "Average Tier-1 campus offers for Node/Postgres backend engineers surged 28% year-over-year.",
      "Pre-placement offers (PPOs) via 6-month capstone internships convert at an all-time high of 76%.",
      "Specialized capabilities in AI API orchestration and Vector DBs command a 35% salary premium.",
    ],
    summary:
      "An in-depth compensation study across Bangalore, Pune, and Hyderabad analyzing starting compensation for new graduates across Product, Fintech, and Cloud Infrastructure sectors.",
    fullContent: `
The 2026 placement season demonstrates strong demand for engineers who combine core computer science fundamentals with modern cloud-native execution. While generic entry-level hiring has stabilized, compensation packages for candidates with verified backend engineering credentials have reached record milestones.

Key compensation data points from the latest campus recruitment cycle:
- Tier-1 Product Companies: ₹18 LPA - ₹34 LPA base + variable ESOPs
- High-Growth Fintech & SaaS: ₹14 LPA - ₹26 LPA base
- Enterprise Cloud Infrastructure: ₹12 LPA - ₹20 LPA base

The biggest competitive differentiator observed across all candidate evaluations was the presence of cryptographic skill evidence and reproducible benchmark results over generic static resumes.
    `,
  },
  {
    id: "news-3",
    category: "Engineering Deep-Dive",
    title: "Inside Node.js Event Loop Bottlenecks: How Junior Devs Accidentally Block Worker Threads",
    subtitle: "A technical autopsy of JSON.parse on mega-payloads, regex backtracking, and microtask starvation.",
    readTime: "9 min read",
    date: "September 28, 2026",
    author: "Arjun Deshmukh",
    authorRole: "Staff Backend Architect & Open-Source Contributor",
    tags: ["NodeJS", "EventLoop", "Performance", "Concurrency"],
    keyTakeaways: [
      "Synchronous parsing of large JSON buffers starves the libuv event loop from accepting new socket connections.",
      "Catastrophic Regular Expression Denial of Service (ReDoS) remains the #1 security vulnerability in campus code submissions.",
      "Using streaming parsers and worker threads maintains sub-15ms p99 latency under heavy load.",
    ],
    summary:
      "A deep technical breakdown of how asynchronous Node.js applications degrade under concurrent load, and the architectural patterns required to maintain five-nines reliability.",
    fullContent: `
One of the most frequent misconceptions among junior backend developers is that 'Node.js is asynchronous, therefore it can never freeze.' In reality, because JavaScript executes on a single main thread, any CPU-intensive synchronous operation immediately halts the event loop for all concurrent connections.

When an endpoint runs a heavy cryptographic hash or synchronously parses an 80MB JSON document, every incoming HTTP request is forced to wait in the OS socket backlog. Understanding how to offload heavy calculations to Worker Threads or break long-running tasks across multiple tick phases using setImmediate() is what separates amateur code from production-ready systems.
    `,
  },
  {
    id: "news-4",
    category: "Hiring Benchmarks",
    title: "Why Autonomous AI Assessments Produce 4x Better Hires than Traditional HR Screeners",
    subtitle: "How unbiased code execution and structured Gemini rubrics eliminate nepotism and subjective recruiter bias.",
    readTime: "6 min read",
    date: "September 15, 2026",
    author: "Dr. Sandeep Patel",
    authorRole: "Director of Cognitive Systems, AI Ethics Council",
    tags: ["AIassessment", "ZeroBias", "UniversityTPO", "Ethics"],
    keyTakeaways: [
      "Traditional resume screening discards up to 72% of qualified candidates due to arbitrary keyword mismatches.",
      "AI evaluation evaluates candidate logic step-by-step against strict functional criteria.",
      "Colleges partnering with autonomous skill engines report 98% student satisfaction with test fairness.",
    ],
    summary:
      "Research analysis demonstrating how objective, automated technical evaluations expand opportunities for tier-2 and tier-3 college candidates who are unfairly filtered by legacy ATS bots.",
    fullContent: `
For decades, campus placement drives suffered from systemic gatekeeping. University students outside of the top three institutions were frequently ignored by top-tier recruiters simply due to college tier branding or superficial resume formatting differences.

Autonomous assessment systems like CallOfCode invert this broken dynamic. By generating personalized, interactive challenges derived directly from the student's claimed project stack and grading their code execution deterministically, talent from any accredited institution can prove their caliber directly to engineering managers.
    `,
  },
];

export const InsightsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const categories = ["All", "Industry News", "Campus Trends", "Engineering Deep-Dive", "Hiring Benchmarks"];

  const filteredArticles = INSIGHTS_DATA.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Campus Intelligence & Tech Editorial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Industry Insights & Hiring News
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Stay ahead of campus placement hiring cycles with verified industry trends, compensation benchmarks, technical deep-dives, and engineering leadership briefings.
          </p>
        </div>

        {/* Featured Visual Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
          <img
            src="/tech_insights.jpg"
            alt="Campus Tech Hiring Charts and Industry Analytics"
            className="w-full h-auto max-h-[28rem] object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                Quarterly Tech Market Intelligence
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                2026 Engineering Recruitment Trends & Hiring Benchmarks
              </h2>
            </div>
            <a
              href="#articles"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm shadow-md hover:bg-slate-100 transition whitespace-nowrap"
            >
              <span>Explore Reports</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Search & Category Filter Navigation */}
        <div id="articles" className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword (e.g. Node.js, Salary, LeetCode, System Design)..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 rounded-2xl text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="text-slate-900 font-bold">{filteredArticles.length}</span> articles
            </div>
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold uppercase tracking-wide border border-blue-200/60">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Key takeaways box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Executive Takeaways
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {article.keyTakeaways.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-mono font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Footer & Trigger */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-900">{article.author}</div>
                  <div className="text-xs text-slate-400">{article.authorRole}</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{article.date}</div>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition whitespace-nowrap shadow-xs"
                >
                  Read Briefing →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Full-Text Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-10 max-h-[85vh] overflow-y-auto space-y-6 relative border border-slate-200 shadow-2xl">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <span>By {selectedArticle.author} ({selectedArticle.authorRole})</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line border-t border-b border-slate-100 py-6">
                {selectedArticle.fullContent.trim()}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {selectedArticle.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-slate-500">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Placement Action Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-5">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Turn Industry Knowledge Into Verified Offers
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Directly test your engineering capability on our AI assessment engine and earn cryptographic placement endorsements.
          </p>
          <div className="pt-2">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm rounded-xl shadow-lg transition"
            >
              <span>Explore Verified Campus Jobs</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
