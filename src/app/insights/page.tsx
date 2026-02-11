"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { Section } from "@/components/ui/Section";
import { ArrowRight, Calendar } from "lucide-react";

const INSIGHTS = [
  {
    category: "Market Analysis",
    title: "Global Crude Price Trends: Q3 2026 Outlook",
    date: "Oct 12, 2026",
    summary: "An in-depth analysis of supply constraints and their impact on domestic fuel prices.",
  },
  {
    category: "Company News",
    title: "PAK Petroleum Expands Terminal Capacity in Karachi",
    date: "Sep 28, 2026",
    summary: "New storage facility adds 50,000 MT capacity to our national reserve network.",
  },
  {
    category: "Technology",
    title: "Implementing AI in Supply Chain Logistics",
    date: "Sep 15, 2026",
    summary: "How predictive analytics is reducing delivery times and optimizing fleet usage.",
  },
];

export default function InsightsPage() {
  const containerRef = useGSAP<HTMLDivElement>(() => {
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1
    });

    gsap.from(".insight-card", {
        scrollTrigger: {
            trigger: ".insights-grid",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
    });
  });

  return (
    <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
      <div className="container-main mb-24">
        <p className="hero-text text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
          Knowledge Hub
        </p>
        <h1 className="hero-text text-5xl md:text-7xl font-display font-bold text-white mb-8">
          Industry <br /> <span className="text-slate-400">Insights.</span>
        </h1>
        <p className="hero-text text-xl text-slate-400 max-w-2xl leading-relaxed">
          Stay informed with the latest market trends, company announcements, and expert analysis from our team.
        </p>
      </div>

      <Section className="py-12 bg-navy-900/50 border-t border-white/5">
        <div className="insights-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((item, idx) => (
                <div key={idx} className="insight-card group bg-navy-900 border border-white/5 p-8 rounded-xl hover:border-teal-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono uppercase tracking-wider text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                            {item.category}
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {item.summary}
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">
                        Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            ))}
        </div>
      </Section>

    </main>
  );
}
