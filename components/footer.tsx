import React from "react";
import ThemeToggle from "./theme-toggle";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-8 lg:px-16 y-12 sm:py-16 border-t border-border">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            © 2025 Sarah Mitchell, Paralegal. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground">
            Professional Legal Support Services
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
            <svg
              className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
