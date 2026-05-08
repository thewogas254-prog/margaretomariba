"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main className="pt-28">
        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Contact</p>
            <h1 className="section-title">Get in touch</h1>
            <p className="section-description max-w-3xl">
              Reach out to support the foundation, join an event, or learn more about work across London Ward.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-6">Connect</p>
              <h2 className="text-2xl font-semibold text-white mb-6">Partner with us</h2>
              <p className="text-white/80 mb-8">
                If you want to volunteer, support a program, or learn more about Margaret's foundation work, please contact us through the details below.
              </p>
              <ul className="space-y-4 text-white/75">
                <li>
                  <strong className="text-white">Email:</strong>
                  <br />
                  hello@omaribafoundation.org
                </li>
                <li>
                  <strong className="text-white">Phone:</strong>
                  <br />
                  +44 7000 000000
                </li>
                <li>
                  <strong className="text-white">Location:</strong>
                  <br />
                  London Ward community hub
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                  />
                </div>
                <Button href="mailto:hello@omaribafoundation.org">
                  Send Message
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
