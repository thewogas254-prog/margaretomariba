"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { ImpactCard } from "@/components/impact-card";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

const impactItems = [
  {
    title: "Youth Empowerment",
    description:
      "Mentorship, skills training, and career guidance that help young people in London Ward discover their potential and build brighter futures.",
  },
  {
    title: "Women Empowerment",
    description:
      "Training, networking, and support services that uplift women as leaders, entrepreneurs, and providers in the community.",
  },
  {
    title: "Environmental Care",
    description:
      "Tree planting, clean-ups, and awareness campaigns that create greener, healthier, and safer neighborhoods across the ward.",
  },
  {
    title: "Sports & Community",
    description:
      "Athletic programs, tournaments, and community events that build confidence, teamwork, and social connections among residents.",
  },
  {
    title: "Health & Welfare",
    description:
      "Community health awareness, family support, and initiatives that promote wellbeing and access to better support services.",
  },
];

const chapters = [
  {
    title: "A Leader for London Ward",
    text: "Margaret Omariba is a dedicated community leader and servant of the people, committed to building stronger neighborhoods through practical programs and grassroots partnerships.",
    image: "/images/profilephoto2.jpeg",
    alt: "Margaret Omariba leading community initiatives",
    reverse: false,
  },
  {
    title: "Foundation for Change",
    text: "Through the Margaret Omariba Foundation, she champions youth empowerment, women support, environmental care, and community welfare that directly improves lives in London Ward.",
    image: "/images/women1.jpeg",
    alt: "Community empowerment programs",
    reverse: true,
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: "vertical",
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="hero-overlay" />
          <div className="container hero-copy">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Community • Leadership • Service
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Margaret Omariba
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              Dedicated community leader and candidate for London Ward Member of County Assembly. Building stronger neighborhoods through service, empowerment, and partnership with the people.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="hero-actions"
            >
              <Button href="/programs">Our Programs</Button>
              <Button variant="secondary" href="/contact">
                Get Involved
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="impact" className="section">
          <div className="container">
            <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] items-center mb-14">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/50">Foundation Programs</p>
                <h2 className="section-title">Empowering London Ward Communities</h2>
                <p className="section-description">
                  Through the Margaret Omariba Foundation, we deliver practical programs that support youth, women, the environment, sports, and community health across the ward.
                </p>
              </div>
              <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src="/images/profilephoto2.jpeg"
                  alt="Margaret Omariba leading foundation programs"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="impact-grid">
              {impactItems.map((item) => (
                <ImpactCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section bg-navy/10">
          <div className="container">
            {chapters.map((chapter, index) => (
              <section
                key={chapter.title}
                className={`feature-section ${chapter.reverse ? "reverse" : ""}`}
              >
                <div className="feature-image">
                  <Image 
                    src={chapter.image} 
                    alt={chapter.alt}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="feature-copy">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/50">Editorial Section</p>
                  <h2>{chapter.title}</h2>
                  <p>{chapter.text}</p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="section section-cta" id="story">
          <div className="container">
            <h2>Leadership Rooted in Service</h2>
            <p>
              Margaret Omariba's vision for London Ward is built on servant leadership, community empowerment, and practical development that directly improves the lives of residents. As a candidate for Member of County Assembly, she is committed to safer neighborhoods, youth opportunities, women empowerment, education support, health awareness, and environmental conservation.
            </p>
            <Button href="/london-ward">Learn About the Vision</Button>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="floating-panel mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Join the Movement</p>
              <h2 className="section-title">Support Margaret Omariba for London Ward MCA</h2>
              <p className="section-description mx-auto">
                Stand with a leader who listens to the people, understands community challenges, and works hand-in-hand to build a stronger, safer, and more empowered London Ward.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact">Get Involved</Button>
                <Button variant="secondary" href="/leadership-vision">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
