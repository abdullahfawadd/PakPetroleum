"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";
import { EASINGS, VARIANTS } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function MotionSystemPage() {
  const containerRef = useGSAP<HTMLDivElement>(() => {
    // GSAP Scroll Trigger Example
    gsap.from(".gsap-box", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: EASINGS.POWER,
      scrollTrigger: {
        trigger: ".gsap-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-navy-950 text-slate-light pt-32 pb-24">
      <div className="container-main">
        <header className="mb-24">
          <h1 className="font-display text-hero font-bold text-white mb-6">
            Motion System <span className="text-teal-400">v1.0</span>
          </h1>
          <p className="text-body-lg text-slate max-w-2xl">
            Live verification of the &quot;Energy-Grade Minimalism&quot; motion language.
            Test easing curves, transitions, and scroll behaviors here.
          </p>
        </header>

        {/* Easing Visualizer */}
        <section className="mb-24">
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
            01. Easing Curves
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <EasingDemo name="Power (Standard)" ease={EASINGS.POWER} />
            <EasingDemo name="Expo (Reveal)" ease={EASINGS.EXPO} />
            <EasingDemo name="Circ (Precision)" ease={EASINGS.CIRC} />
            <EasingDemo name="Linear (Loop)" ease={EASINGS.LINEAR} duration={2} />
          </div>
        </section>

        {/* Framer Motion Variants */}
        <section className="mb-24">
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
            02. Standard Entrances
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={VARIANTS.FADE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="p-8 bg-navy-900 border border-white/5 rounded-lg text-center"
            >
              <h3 className="text-white font-bold mb-2">Fade Up</h3>
              <p className="text-sm text-slate">Standard content entry.</p>
            </motion.div>

            <motion.div
              variants={VARIANTS.SCALE_UP}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="p-8 bg-navy-900 border border-white/5 rounded-lg text-center"
            >
              <h3 className="text-white font-bold mb-2">Scale Up</h3>
              <p className="text-sm text-slate">For cards and modals.</p>
            </motion.div>

            <motion.div
              variants={VARIANTS.FADE_IN}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="p-8 bg-navy-900 border border-white/5 rounded-lg text-center"
            >
              <h3 className="text-white font-bold mb-2">Fade In</h3>
              <p className="text-sm text-slate">Subtle appearance.</p>
            </motion.div>
          </div>
        </section>

        {/* Stagger Container */}
        <section className="mb-24">
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
             03. Staggered List
          </h2>
          <motion.div
            variants={VARIANTS.STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={VARIANTS.FADE_UP}
                className="h-24 bg-navy-800 rounded flex items-center justify-center text-teal-400 font-mono text-xl border border-white/5"
              >
                0{i}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Interactive States */}
        <section className="mb-24">
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
            04. Interaction States
          </h2>
          <div className="flex flex-wrap gap-8">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#64FFDA", color: "#0a192f" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-teal-400/10 text-teal-400 border border-teal-400 rounded font-semibold transition-colors duration-300"
            >
              Primary Action
            </motion.button>

            <motion.div
              whileHover={{ y: -5, borderColor: "rgba(100, 255, 218, 0.5)" }}
              className="p-6 bg-navy-900 border border-white/10 rounded-lg w-64 cursor-pointer"
            >
              <h4 className="text-white font-bold mb-2">Hover Card</h4>
              <p className="text-sm text-slate">Subtle lift with border glow.</p>
            </motion.div>
          </div>
        </section>

        {/* GSAP Scroll Section */}
        <section className="gsap-section py-24 border-t border-white/10">
          <h2 className="font-display text-heading mb-12">
            05. GSAP Scroll Trigger
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="gsap-box h-40 bg-slate-800 rounded-lg flex items-center justify-center text-white font-mono">
              Element 1
            </div>
            <div className="gsap-box h-40 bg-slate-700 rounded-lg flex items-center justify-center text-white font-mono">
              Element 2
            </div>
            <div className="gsap-box h-40 bg-slate-600 rounded-lg flex items-center justify-center text-white font-mono">
              Element 3
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

function EasingDemo({ name, ease, duration = 1 }: { name: string, ease: string, duration?: number }) {
    const [key, setKey] = useState(0);

    return (
        <div
          className="bg-navy-900 p-6 rounded-lg border border-white/5 cursor-pointer hover:border-white/20 transition-colors"
          onClick={() => setKey(k => k + 1)}
        >
            <div className="flex justify-between items-center mb-6">
                <span className="text-white font-mono text-sm">{name}</span>
                <span className="text-xs text-slate-500">Click to replay</span>
            </div>
            <div className="h-2 bg-navy-950 rounded-full overflow-hidden relative">
                 <GSAPBall ease={ease} duration={duration} triggerKey={key} />
            </div>
             <p className="mt-4 text-xs text-slate-500 font-mono">{ease}</p>
        </div>
    )
}

function GSAPBall({ ease, duration, triggerKey }: { ease: string, duration: number, triggerKey: number }) {
    const barRef = useGSAP<HTMLDivElement>(() => {
        gsap.fromTo(barRef.current,
            { scaleX: 0 },
            { scaleX: 1, duration: duration, ease: ease }
        );
    }, [triggerKey]);

    return (
        <div ref={barRef} className="h-full bg-teal-400 w-full origin-left"></div>
    );
}
