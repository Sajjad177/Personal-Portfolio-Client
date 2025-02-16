"use client";
import React from "react";

const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block">
      <button className="group relative px-10 py-5 rounded-lg bg-gradient-to-r from-cyan-700 to-blue-700 text-white font-semibold tracking-wider uppercase text-sm border border-cyan-400/60 hover:border-cyan-300 transition-all duration-300 ease-in-out hover:text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:translate-y-1 active:shadow-[0_0_10px_rgba(34,211,238,0.5)] active:scale-95">
        <span className="flex items-center gap-3 relative z-10">
          {children}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-125"
          >
            <path d="M12 2v20m0-20L4 12m8-10l8 10"></path>
          </svg>
        </span>

        {/* Background Gradient Animation */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-lg"></div>

        {/* Outer Glow Effect */}
        <div className="absolute -inset-1 -z-10 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 group-hover:opacity-50 blur-lg rounded-lg transition-all duration-300 group-hover:blur-2xl"></div>

        {/* Inner Glow for 3D Effect */}
        <div className="absolute inset-0 rounded-lg bg-white/5 opacity-10 group-hover:opacity-20 transition-all duration-300"></div>
      </button>
    </div>
  );
};

export default CustomButton;
