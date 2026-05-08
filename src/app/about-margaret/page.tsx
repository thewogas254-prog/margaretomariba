"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

export default function AboutMargaretPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main className="pt-28">
        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">About Margaret</p>
            <h1 className="section-title">Margaret Omariba</h1>
            <p className="section-description max-w-3xl">
              Hon. Margaret Omariba is a dedicated community leader and mentor committed to serving the people of <strong>London Ward</strong>. She is passionate about uplifting families through programs focused on youth empowerment, women empowerment, education, environmental cleanliness, sports, and community welfare.

              Through the Margaret Omariba Foundation, she works closely with residents, supports vulnerable families, and champions initiatives that create opportunities, strengthen communities, and restore hope across the ward.

              Margaret believes true leadership means listening to the people, understanding their challenges, and working together to bring lasting and meaningful change.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">From service to sustained local leadership</h2>
                <p className="text-white/80 mb-6">
                  From community service to trusted local leadership, Margaret Omariba has continued to stand with the people of London Ward through action and compassion. She has worked closely with families, schools, youth groups, women groups, health workers, churches, and local stakeholders to address everyday challenges affecting the community.

                  She is building a strong and lasting platform focused on empowering residents, supporting access to better health and community welfare, creating opportunities for youth and women, and promoting a cleaner, safer, and more united ward.
                </p>
                <ul className="space-y-4 text-white/75">
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span><strong>London Community First:</strong> Listening to residents and responding to the real needs of families, youth, women, and vulnerable members of the community.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span><strong>Health & Welfare:</strong> Supporting community health awareness, clean environments, family wellbeing, and access to better support services.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span><strong>Core Values:</strong> Transparency, inclusivity, accountability, and service to the people..</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span><strong>Leadership Approach:</strong> Working hand in hand with the community through grassroots partnerships and practical solutions that create lasting impact.</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/profilephoto.jpeg"
                  alt="Margaret Omariba"
                  width={400}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-navy/10">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-6">Leadership Story</p>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Early years</h3>
                <p className="text-white/75 mb-6">
                  Margaret began community work by supporting neighborhood sports and youth mentorship, proving that leadership starts at the local level.
                </p>
                <Image
                  src="/images/charity1.jpeg"
                  alt="Youth Sports"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Community impact</h3>
                <p className="text-white/75 mb-6">
                  She has led tree planting campaigns, women's gatherings, and education support services that build trust across London Ward.
                </p>
                <Image
                  src="/images/women1.jpeg"
                  alt="Women Empowerment"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Future ambition</h3>
                <p className="text-white/75 mb-6">
                  Margaret sees community service as the foundation for stronger, more connected local governance.
                </p>
                <Image
                  src="/images/charity2.jpeg"
                  alt="Community Future"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button href="/foundation">Explore Foundation</Button>
              <Button variant="secondary" href="/contact">Connect with Us</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
