"use client";

import React from "react";

export default function Navigation() {
  return (
    <nav suppressHydrationWarning className="fixed top-0 left-0 right-0 z-50 pt-2 md:pt-4">
      <div suppressHydrationWarning className="glass-card mx-2 md:mx-4 rounded-2xl px-2 md:px-4 py-1 md:py-2 flex items-center justify-between overflow-x-auto relative">
        
        {/* Capybara Loader Background */}
        <div aria-hidden="true" className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="absolute top-[65%] -translate-y-1/2" style={{ animation: 'walkTab 25s linear infinite' }}>
            <div className="capybaraloader origin-left scale-[0.18] md:scale-[0.22]">
            <div className="capybara">
              <div className="capy">
                <div className="capyhead">
                  <div className="capyear">
                    <div className="capyear2"></div>
                  </div>
                  <div className="capyear">
                    <div className="capyear2"></div>
                  </div>
                  <div className="capyeye"></div>
                  <div className="capyeye"></div>
                  <div className="capymouth">
                    <div className="capylips"></div>
                    <div className="capylips"></div>
                  </div>
                </div>
                <div className="capyleg"></div>
                <div className="capyleg2"></div>
                <div className="capyleg2"></div>
                <div className="capyleg2"></div>
              </div>
            </div>
            <div className="loader">
              <div className="loaderline"></div>
            </div>
            </div>
          </div>
        </div>

        <a href="#" aria-label="Home" className="flex items-center gap-1 md:gap-2 text-base md:text-xl font-bold text-secondary uiverse-nav-logo flex-shrink-0 relative z-10">
          <span aria-hidden="true" className="eye-icon">
            <div className="up"></div>
            <div className="down"></div>
            <div className="mid"></div>
          </span>
          <span>Portfolio</span>
        </a>
        <ul className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
          {[
            { name: "ประวัติ", id: "profile" },
            { name: "ทักษะ", id: "skills" },
            { name: "การศึกษา", id: "education" },
            { name: "ประสบการณ์", id: "experience" },
            { name: "ติดต่อ", id: "contact" }
          ].map((item) => (
            <li key={item.id} className="uiverse-nav-item flex-shrink-0">
              <a href={`#${item.id}`} className="group relative">
                <span className="relative z-10 font-bold tracking-wide text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  {item.name}
                </span>
                <span className="uiverse-nav-hover-bg"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
