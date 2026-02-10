"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { STATS } from "@/lib/constants";
import { useGSAP } from "@/hooks/useGSAP";

export default function About() {
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const sectionRef = useGSAP<HTMLElement>(() => {
    // Animate Header
    if (headRef.current) {
      gsap.from(headRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Animate Content
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Animate Stats
    if (statsRef.current) {
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-spacing relative overflow-hidden bg-[#020c1b]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

            {/* Header Column */}
            <div ref={headRef}>
              <p className="overline-tag mb-8 flex items-center gap-3">
                 <span className="w-8 h-px bg-teal-400"></span>
                 Corporate Profile
              </p>
              <h2 className="text-display font-display text-slate-light leading-none">
                Petroleum <br/>
                <span className="text-teal-400">Reliability</span> <br/>
                at Scale.
              </h2>
            </div>

            {/* Content Column */}
            <div ref={contentRef} className="flex flex-col justify-end">
              <p className="text-xl text-slate-300 leading-relaxed mb-8 font-light">
                PAK Petroleum is engineered for mission-critical fuel continuity.
                We align procurement, storage, and distribution into a single,
                resilient supply chain.
              </p>
              <p className="text-base text-slate-400 leading-relaxed font-mono">
                {`// From the port to the pump, our operations cover the nation's
                highest-demand corridors, ensuring that industry never stops.`}
              </p>
            </div>
        </div>

        {/* Stats Grid - Technical Look */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e2d4d] border border-[#1e2d4d]"
        >
          {STATS.map((stat, index) => {
            const decimals = stat.value % 1 !== 0 ? 1 : 0;
            return (
              <div
                key={stat.label}
                className="flex flex-col justify-center px-8 py-12 bg-[#0a192f] hover:bg-[#112240] transition-colors duration-300 group"
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <CountUp
                    end={stat.value}
                    decimals={decimals}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={index * 100}
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="text-4xl lg:text-5xl font-bold text-teal-400 font-mono tracking-tighter"
                      />
                    )}
                  </CountUp>
                  <span className="text-2xl font-bold text-teal-500/50">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
