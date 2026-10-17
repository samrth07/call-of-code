import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Brand & mission */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
                P
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Placement<span className="text-blue-500">Hub</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              A cryptographic infrastructure for verified campus recruitment, transcript validation, and high-velocity talent pipelines.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM STATUS: OPERATIONAL</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Product</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-white transition">Pipeline Protocol</Link></li>
              <li><Link to="/about" className="hover:text-white transition">Verification Engine</Link></li>
              <li><Link to="/jobs" className="hover:text-white transition">ATS Automation</Link></li>
              <li><Link to="/about" className="hover:text-white transition">Evaluation Roster</Link></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Platforms</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/signin" className="hover:text-white transition">Student Portal</Link></li>
              <li><Link to="/signin" className="hover:text-white transition">Recruiter Terminal</Link></li>
              <li><Link to="/signin" className="hover:text-white transition">Colleges Placement</Link></li>
              <li><Link to="/about" className="hover:text-white transition">Security & Ledger</Link></li>
            </ul>
          </div>

          {/* Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Governance</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white transition cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Compliance</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Security Audits</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PLACEMENT HUB, INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span>ISO 27001 VERIFIED</span>
            <span>·</span>
            <span>FERPA / GDPR COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
