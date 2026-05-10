"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

const taglines = [
  "Serving the People. Building the Community.",
  "Together for a Stronger London Ward.",
  "Empowering Families. Inspiring Hope.",
  "Leadership Rooted in Service.",
  "A Voice for the Community. A Heart for the People.",
];

export default function LeadershipVisionPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main className="pt-28">
        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Leadership Vision</p>
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center">
              <div>
                <h1 className="section-title">About Margaret Omariba</h1>
                <p className="section-description max-w-3xl">
                  Margaret Omariba is a dedicated community leader, mentor, and servant of the people of London Ward. She is passionate about improving the lives of ordinary families through practical local programs that support youth, women, education, the environment, sports, and community welfare.
                </p>
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
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Short Profile</h2>
                <p className="text-white/80 mb-6">
                  Born from the spirit of service and compassion, Margaret has consistently stood with the people during times of need — listening to residents, supporting vulnerable families, encouraging young people, and working together with local groups to build a stronger and more united community.
                </p>
                <p className="text-white/80">
                  Through the Margaret Omariba Foundation, she continues to champion initiatives that create opportunities for youth, support women and small businesses, promote clean and safe neighborhoods, and restore hope to families across the ward.
                </p>
              </div>
              <div>
                <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-lg font-semibold text-white">Leadership that listens</h3>
                  <p className="text-white/75">
                    Margaret believes leadership is about being close to the people, understanding their daily struggles, and working hand in hand with the community to bring meaningful and lasting change.
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-lg font-semibold text-white">Community-centered service</h3>
                  <p className="text-white/75">
                    Her approach is rooted in dignity and credibility while remaining grounded, relatable, and politically resonant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Community Work</h2>
            <p className="text-white/75 mb-8 max-w-3xl">
              Margaret Omariba has actively participated in several grassroots initiatives aimed at uplifting the people of London Ward. Her work focuses on practical solutions that directly touch the lives of residents.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Supporting youth mentorship and talent development programs",
                "Organizing women empowerment initiatives and small business support",
                "Participating in environmental clean-up activities",
                "Supporting vulnerable families and children in need",
                "Encouraging sports and community engagement among young people",
                "Working with local stakeholders to strengthen unity and development",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-navy/10">
          <div className="container">
            <h2 className="section-title">Vision for the Community</h2>
            <p className="text-white/75 mb-8 max-w-3xl">
              Margaret Omariba envisions a united, empowered, clean, and economically stronger London Ward where every family has safety, respect, and opportunity.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "Youth have opportunities to grow and succeed", desc: "Leadership and mentorship programs, skills training, sports support, and positive community engagement." },
                { title: "Women are empowered economically and socially", desc: "Forums, business support, and networks that strengthen families and livelihoods." },
                { title: "Families live in safer and cleaner neighborhoods", desc: "Community cleanup, improved sanitation, and safer public spaces." },
                { title: "Community voices are heard and respected", desc: "Transparency, inclusivity, and partnership with local residents." },
                { title: "Development reaches every part of the ward fairly", desc: "Balanced support across neighborhoods and practical programs for all." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-6">Suggested Taglines</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {taglines.map((tagline) => (
                <div key={tagline} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
                  {tagline}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container flex flex-col gap-4 sm:flex-row justify-center">
            <Button href="/about-margaret">Learn About Margaret</Button>
            <Button variant="secondary" href="/contact">Connect with Us</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
