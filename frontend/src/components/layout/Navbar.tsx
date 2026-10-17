import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { homeFor } from "../../lib/roles";

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Placement<span className="text-blue-600">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            to="/"
            className={`px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all ${
              isActive("/")
                ? "text-blue-600 bg-blue-50/90 font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            Home
          </Link>

          <Link
            to="/jobs"
            className={`px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all flex items-center gap-2 ${
              isActive("/jobs")
                ? "text-blue-600 bg-blue-50/90 font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            <span>Jobs</span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Live
            </span>
          </Link>

          <Link
            to="/roadmap"
            className={`px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all ${
              isActive("/roadmap")
                ? "text-blue-600 bg-blue-50/90 font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            Roadmap
          </Link>

          <Link
            to="/insights"
            className={`px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all ${
              isActive("/insights")
                ? "text-blue-600 bg-blue-50/90 font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            Insights
          </Link>

          <Link
            to="/about"
            className={`px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all ${
              isActive("/about")
                ? "text-blue-600 bg-blue-50/90 font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Action / Auth Buttons (Toggle based on user login state) */}
        <div className="hidden md:flex items-center gap-3.5 shrink-0">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to={homeFor(user.role)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 transition-all group"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-xs ${
                    user.role === "STUDENT"
                      ? "bg-gradient-to-tr from-blue-600 to-indigo-600"
                      : user.role === "RECRUITER"
                      ? "bg-gradient-to-tr from-purple-600 to-indigo-600"
                      : "bg-gradient-to-tr from-emerald-600 to-teal-600"
                  }`}
                >
                  {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                </div>
                <div className="text-left pr-1">
                  <span className="block text-xs font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    Dashboard
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    {user.role}
                  </span>
                </div>
              </Link>

              <button
                onClick={handleLogout}
                className="px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/signin"
                className="px-4 py-2.5 text-[15px] font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2.5 text-[15px] font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-5 pt-4 pb-6 space-y-2.5">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold ${
              isActive("/") ? "text-blue-600 bg-blue-50 font-bold" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>
          <Link
            to="/jobs"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
              isActive("/jobs") ? "text-blue-600 bg-blue-50 font-bold" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <span>Jobs</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Live
            </span>
          </Link>
          <Link
            to="/roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold ${
              isActive("/roadmap") ? "text-blue-600 bg-blue-50 font-bold" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Roadmap
          </Link>
          <Link
            to="/insights"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold ${
              isActive("/insights") ? "text-blue-600 bg-blue-50 font-bold" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Insights
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold ${
              isActive("/about") ? "text-blue-600 bg-blue-50 font-bold" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            About
          </Link>

          {/* Auth toggle for mobile */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            {user ? (
              <>
                <Link
                  to={homeFor(user.role)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-center text-sm font-bold text-white bg-blue-600 rounded-xl shadow-md"
                >
                  Go to Dashboard ({user.role})
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <Link
                  to="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-center text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
