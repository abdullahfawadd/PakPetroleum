import React from "react";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-body text-slate-light pt-32 pb-24">
      <div className="container-main">
        {/* Header */}
        <section className="mb-24">
          <h1 className="font-display text-hero font-bold text-white mb-6">
            Design System <span className="text-teal-400">Locked</span>
          </h1>
          <p className="text-body-lg text-slate max-w-2xl">
            This is the visual verification for the PAK Petroleum design system.
            It serves as the source of truth for developers to check implementation
            details against the spec.
          </p>
        </section>

        {/* Colors */}
        <section className="mb-24">
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
            01. Color System
          </h2>

          <div className="space-y-12">
            {/* Navy Scale */}
            <div>
              <h3 className="text-subheading mb-6 text-white">Navy Scale (Backgrounds)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorSwatch name="Deep Navy (950)" token="bg-navy-950" hex="#020c1b" />
                <ColorSwatch name="Navy (900)" token="bg-navy-900" hex="#0a192f" />
                <ColorSwatch name="Light Navy (800)" token="bg-navy-800" hex="#112240" />
                <ColorSwatch name="Navy 700" token="bg-navy-700" hex="#233554" />
              </div>
            </div>

            {/* Teal Scale */}
            <div>
              <h3 className="text-subheading mb-6 text-white">Teal Scale (Accents)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorSwatch name="Teal (400)" token="bg-teal-400" text="text-navy-950" hex="#64FFDA" />
                <ColorSwatch name="Teal Dark (500)" token="bg-teal-500" text="text-navy-950" hex="#14b8a6" />
                <ColorSwatch name="Teal 900" token="bg-teal-900" text="text-teal-400" hex="#0f2e2b" />
              </div>
            </div>

            {/* Slate Scale */}
            <div>
              <h3 className="text-subheading mb-6 text-white">Slate Scale (Text)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorSwatch name="Slate Light (Primary)" token="bg-slate-light" text="text-navy-950" hex="#ccd6f6" />
                <ColorSwatch name="Slate (Secondary)" token="bg-slate" text="text-navy-950" hex="#8892b0" />
                <ColorSwatch name="Slate Dark (Muted)" token="bg-slate-dark" text="text-white" hex="#495670" />
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
            02. Typography
          </h2>

          <div className="space-y-8 max-w-4xl">
            <TypeSpec role="Hero" font="font-display" size="text-hero" weight="font-bold" sample="Energy Grade." />
            <TypeSpec role="Display" font="font-display" size="text-display" weight="font-bold" sample="Mission Critical." />
            <TypeSpec role="Heading" font="font-display" size="text-heading" weight="font-semibold" sample="Infrastructure." />
            <TypeSpec role="Subheading" font="font-sans" size="text-subheading" weight="font-medium" sample="Sustainable Future." />
            <TypeSpec role="Body LG" font="font-sans" size="text-body-lg" weight="font-normal" sample="Leading the nation's energy transition through robust infrastructure." />
            <TypeSpec role="Body" font="font-sans" size="text-body" weight="font-normal" sample="Our visual identity is built on four core pillars that reflect our mission." />
            <TypeSpec role="Caption" font="font-sans" size="text-caption" weight="font-normal" sample="Figure 1.1: Pipeline distribution network map." />
            <TypeSpec role="Overline" font="font-mono" size="text-overline" weight="font-semibold" sample="SYSTEM STATUS: ONLINE" />
          </div>
        </section>

        {/* Components */}
        <section className="mb-24">
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
            03. Components
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Buttons */}
            <div>
              <h3 className="text-subheading mb-6 text-white">Buttons</h3>
              <div className="flex flex-wrap gap-6 items-center bg-navy-800 p-8 rounded-lg border border-white/10">
                <button className="btn-primary">
                  Primary Action
                </button>
                <button className="btn-outline">
                  Secondary Action
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <h3 className="text-subheading mb-6 text-white">Inputs</h3>
              <div className="bg-navy-800 p-8 rounded-lg border border-white/10 space-y-4">
                <input type="text" className="input" placeholder="Enter your email..." />
                <input type="password" className="input" placeholder="Password" />
              </div>
            </div>

            {/* Cards */}
            <div className="col-span-full">
              <h3 className="text-subheading mb-6 text-white">Cards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-dark">
                  <div className="overline-tag mb-4">Operations</div>
                  <h4 className="font-display text-xl text-white mb-2">Downstream Logistics</h4>
                  <p className="text-slate text-sm">Efficient distribution networks ensuring reliable fuel delivery across the nation.</p>
                </div>

                <div className="card-glass p-8">
                  <div className="overline-tag mb-4">Innovation</div>
                  <h4 className="font-display text-xl text-white mb-2">Smart Monitoring</h4>
                  <p className="text-slate text-sm">Real-time IoT sensors deployed across 500+ terminal points.</p>
                </div>

                <div className="card-dark border-l-4 border-l-teal-400">
                  <div className="overline-tag mb-4">Metrics</div>
                  <h4 className="font-display text-xl text-white mb-2">Total Volume</h4>
                  <p className="font-mono text-3xl text-teal-400">4.2M <span className="text-sm text-slate">BBL</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Grid */}
        <section>
          <h2 className="font-display text-heading mb-12 border-b border-white/10 pb-4">
            04. Spacing (8pt Grid)
          </h2>
          <div className="flex flex-wrap items-end gap-2 text-xs font-mono text-slate">
             <SpacingBlock size="w-2 h-2" label="2 (0.5)" />
             <SpacingBlock size="w-4 h-4" label="4 (1)" />
             <SpacingBlock size="w-8 h-8" label="8 (2)" />
             <SpacingBlock size="w-12 h-12" label="12 (3)" />
             <SpacingBlock size="w-16 h-16" label="16 (4)" />
             <SpacingBlock size="w-24 h-24" label="24 (6)" />
             <SpacingBlock size="w-32 h-32" label="32 (8)" />
          </div>
        </section>

      </div>
    </main>
  );
}

function ColorSwatch({ name, token, hex, text = "text-slate-light" }: { name: string, token: string, hex: string, text?: string }) {
  return (
    <div className="group">
      <div className={`h-24 rounded-lg mb-3 border border-white/5 ${token} flex items-end p-3 shadow-lg group-hover:-translate-y-1 transition-transform duration-300`}>
        <span className={`font-mono text-xs ${text}`}>{hex}</span>
      </div>
      <p className="text-sm font-semibold text-white">{name}</p>
      <p className="text-xs text-slate font-mono opacity-60">.{token}</p>
    </div>
  );
}

function TypeSpec({ role, font, size, weight, sample }: { role: string, font: string, size: string, weight: string, sample: string }) {
  return (
    <div className="border-b border-white/5 pb-8">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-teal-400 font-mono text-sm uppercase tracking-wider">{role}</span>
        <span className="text-slate font-mono text-xs opacity-60">.{font} .{size} .{weight}</span>
      </div>
      <p className={`${font} ${size} ${weight} text-white`}>
        {sample}
      </p>
    </div>
  );
}

function SpacingBlock({ size, label }: { size: string, label: string }) {
  return (
    <div className="text-center">
      <div className={`${size} bg-teal-400/20 border border-teal-400/50 mx-auto mb-2`}></div>
      <span>{label}</span>
    </div>
  );
}
