"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 container-main min-h-screen">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Leadership</h1>
        <p className="text-slate-400 text-lg">This section is under development.</p>
      </main>
      <Footer />
    </>
  );
}
