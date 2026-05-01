import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./About";
import { useThemeContext } from '../contexts/ThemeContext';

export default function GithubActivity() {
  const { theme } = useThemeContext();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="GITHUB_ACTIVITY" index="05" inView={inView} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-card border border-border overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-muted ml-2">
                  github_activity.sh
                </span>
              </div>
              <a
                href="https://github.com/fahmihfdz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-gold transition-colors"
              >
                @fahmihfdz ↗
              </a>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="font-mono text-xs text-green-400 mb-6">
                {"$ git log --all --oneline | wc -l"}
              </p>

              {/* Contribution graph dari GitHub */}
              <div className="overflow-x-auto">
                <img
                  src="https://ghchart.rshah.org/c9a84c/fahmihfdz"
                  alt="GitHub Contribution Chart"
                  className="w-full min-w-[600px] opacity-80 hover:opacity-100 transition-opacity"
                  style={{
                    filter:
                      theme === "light"
                        ? "invert(1) hue-rotate(180deg)"
                        : "brightness(1.1)",
                  }}
                />
              </div>

              {/* Stats dari GitHub readme stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=fahmihfdz&show_icons=true&theme=dark&bg_color=161616&title_color=c9a84c&icon_color=c9a84c&text_color=888888&border_color=2a2a2a&hide_border=false"
                  alt="GitHub Stats"
                  className="w-full"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=fahmihfdz&layout=compact&theme=dark&bg_color=161616&title_color=c9a84c&text_color=888888&border_color=2a2a2a"
                  alt="Top Languages"
                  className="w-full"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 flex flex-wrap gap-6">
              {[
                { label: "PLATFORM", value: "GitHub" },
                { label: "USERNAME", value: "@fahmihfdz" },
                { label: "STATUS", value: "Active" },
              ].map((item) => (
                <div key={item.label} className="font-mono text-xs">
                  <span className="text-muted/50">{item.label}: </span>
                  <span
                    className={
                      item.label === "STATUS" ? "text-green-400" : "text-gold"
                    }
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
