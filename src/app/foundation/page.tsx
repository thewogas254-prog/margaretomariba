"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

export default function FoundationPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main className="pt-28">
        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Foundation</p>
            <h1 className="section-title">What we DO</h1>
            <p className="section-description max-w-3xl">
              The Margaret Omariba Foundation focuses on community programs that build trust, stability, and long-term local capacity in London Ward.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">What we stand for</h2>
                <p className="text-white/80 mb-6">
                  Our foundation is a service organization that supports families, youth, women and the environment while strengthening local leadership from the inside out.
                </p>
                <ul className="space-y-4 text-white/75">
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span><strong>Mission:</strong> uplift underserved communities through inclusive programs and direct support.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span><strong>Vision:</strong> a London Ward where every resident has access to opportunity, safety, and community care.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span><strong>Values:</strong> empathy, accountability, sustainability, and partnership.</span>
                  </li>
                </ul>
              </div>
              <div className="image-frame">
                <Image
                  src="/images/profilephoto2.jpeg"
                  alt="Margaret Omariba profile"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-navy/10">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-8">Core Pillars</p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Youth development", desc: "Mentorship, life skills and career readiness." },
                { title: "Women empowerment", desc: "Training, networking and support services." },
                { title: "Environmental care", desc: "Tree planting, clean-ups and green education." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container flex flex-col gap-4 sm:flex-row justify-center">
            <Button href="/programs">View Programs</Button>
            <Button variant="secondary" href="/contact">Get Involved</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
