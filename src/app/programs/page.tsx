"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

const programs = [
  {
    title: "Youth Empowerment",
    description: "Youth mentorship, skills workshops, and career coaching that help young people find direction and opportunity.",
    image: "/images/charity1.jpeg",
  },
  {
    title: "Women Empowerment",
    description: "Training, networking, and support services that uplift women as leaders and providers in the local community.",
    image: "/images/women1.jpeg",
  },
  {
    title: "Environmental Conservation",
    description: "Tree planting, clean-ups and awareness campaigns that make the ward greener and healthier.",
    image: "/images/charity2.jpeg",
  },
  {
    title: "Sports Empowerment",
    description: "Local sports events, coaching sessions, and tournaments that build confidence and social connection.",
    image: "/images/charity3.jpeg",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main className="pt-28">
        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Programs</p>
            <h1 className="section-title">Programs for stronger neighborhoods</h1>
            <p className="section-description max-w-3xl">
              Margaret Omariba Foundation runs focused programs that support youth, women, the environment, sports, and community outreach in London Ward.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              {programs.map((program) => (
                <article key={program.title} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  <div className="image-frame">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-white mb-3">{program.title}</h2>
                    <p className="text-white/75 mb-6">{program.description}</p>
                    <Button variant="secondary" href="/contact">Get Involved</Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container flex flex-col gap-4 sm:flex-row justify-center">
            <Button href="/foundation">Explore Foundation</Button>
            <Button variant="secondary" href="/contact">Join a Program</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
