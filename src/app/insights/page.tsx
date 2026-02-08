"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ───────────────────────────────────────────────
   Card data – 4 cards matching eternacloud layout
   ─────────────────────────────────────────────── */
const INSIGHT_CARDS = [
  {
    label: "Supply Chain",
    title: "Realize stable supply\nwithout the firefighting.",
    bullets: [
      "Consolidated procurement signals",
      "Decision-ready allocation plans",
    ],
    summary:
      "High-volume operators lose momentum to fragmented procurement data. We unify terminal, vendor, and delivery intelligence into one clear view.",
  },
  {
    label: "Quality Assurance",
    title: "Qualify every batch\nwith far fewer handoffs.",
    bullets: [
      "Batch-level traceability",
      "Real-time quality monitoring",
    ],
    summary:
      "We map dependencies across terminals, vendors, and stations to keep fuel quality consistent across every shift and every handoff.",
  },
  {
    label: "Logistics",
    title: "Receive the right fuel\non site without delays.",
    bullets: [
      "GPS-tracked dispatch chains",
      "Escalation ownership",
    ],
    summary:
      "We remove handoff ambiguity so fuel moves with clarity, and compliance stays intact from terminal to station.",
  },
  {
    label: "Market Intelligence",
    title: "Trade with curated context,\nnot guesswork.",
    bullets: [
      "Predictive pricing models",
      "Risk-adjusted procurement",
    ],
    summary:
      "We surface the critical levers that protect margins and supply continuity, even when market conditions shift rapidly.",
  },
];

/* ───────────────────────────────────────────────
   Individual card component
   ─────────────────────────────────────────────── */
function InsightCard({
  card,
}: {
  card: (typeof INSIGHT_CARDS)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="insight-card group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer"
      style={{
        background: isHovered
          ? "rgba(255, 255, 255, 0.04)"
          : "rgba(255, 255, 255, 0.02)",
        border: `1px solid ${
          isHovered ? "rgba(200, 111, 255, 0.2)" : "rgba(255, 255, 255, 0.06)"
        }`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[380px]">
        {/* Category Tag */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full"
            style={{ background: "rgba(200, 111, 255, 0.12)" }}
          >
            <div
              className="rounded-full transition-all duration-500"
              style={{
                width: isHovered ? 10 : 6,
                height: isHovered ? 10 : 6,
                background: "#C86FFF",
              }}
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            {card.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-[1.65rem] font-heading text-white leading-tight mb-6 whitespace-pre-line transition-colors duration-300 group-hover:text-purple-200">
          {card.title}
        </h3>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-auto">
          {card.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-sm text-white/40 leading-relaxed"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#C86FFF" }}
              />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Show More */}
        <div className="mt-8">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
            style={{
              color: isHovered ? "#C86FFF" : "rgba(200, 111, 255, 0.5)",
            }}
          >
            Show me more
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300"
              style={{
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
              }}
            />
          </span>
        </div>
      </div>

      {/* Bottom gradient line on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-700"
        style={{
          width: isHovered ? "100%" : "0%",
          background: "linear-gradient(90deg, #AC24FF, #C86FFF, #E59DFA)",
        }}
      />

      {/* Corner glow on hover */}
      <div
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 111, 255, 0.15), transparent 70%)",
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Page component
   ─────────────────────────────────────────────── */
export default function InsightsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.5,
        });
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".insight-card");
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navigation />

      <main>
        {/* ─── Hero Section (eternacloud style) ─── */}
        <section
          className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden"
          style={{ background: "#13101C" }}
        >
          {/* Background orbs */}
          <div
            aria-hidden="true"
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(200,111,255,0.08) 0%, transparent 55%)",
              filter: "blur(80px)",
            }}
          />

          <div className="container-custom relative z-10">
            <div ref={heroRef} className="text-center max-w-4xl mx-auto">
              {/* Overline – like eternacloud "Mission Critical Continuity" */}
              <p className="overline-tag mb-8">
                Mission-Critical Continuity
              </p>

              {/* Big headline – like "Design and build with ease." */}
              <h1 className="text-display font-heading text-white leading-[1.05] mb-8">
                Trusted by fuel teams
                <br />
                <span className="text-gradient">
                  from procurement to delivery.
                </span>
              </h1>

              {/* Description paragraph */}
              <p className="text-lg lg:text-xl text-white/40 max-w-3xl mx-auto leading-relaxed">
                PAK Petroleum helps station operators, fleet managers, and
                distribution partners execute reliable fuel supply across
                Pakistan. Unify sourcing, storage, and dispatch without the
                heavy lifting.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Cards Section ─── */}
        <section
          className="section-spacing relative overflow-hidden"
          style={{ background: "#1A1726" }}
        >
          {/* Subtle top divider */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(200,111,255,0.12), transparent)",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute top-1/4 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "rgba(200, 111, 255, 0.05)",
              filter: "blur(80px)",
            }}
          />

          <div className="container-custom relative z-10">
            <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
              {INSIGHT_CARDS.map((card) => (
                <InsightCard key={card.label} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        <section
          className="section-spacing-sm relative overflow-hidden"
          style={{ background: "#13101C" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(200,111,255,0.12), transparent)",
            }}
          />

          <div className="container-custom relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-display font-heading text-white mb-6">
                Ready to streamline
                <span className="block text-gradient">
                  your fuel operations?
                </span>
              </h2>
              <p className="text-lg text-white/40 mb-10 leading-relaxed">
                Talk to our team about building a supply plan that removes
                friction and keeps your business moving.
              </p>
              <a href="/contact" className="btn-primary group">
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
