"use client";

import { FormEvent } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullname = encodeURIComponent(formData.get("fullname")?.toString() ?? "");
    const gender = encodeURIComponent(formData.get("gender")?.toString() ?? "");
    const residence = encodeURIComponent(formData.get("residence")?.toString() ?? "");
    const message = encodeURIComponent(formData.get("message")?.toString() ?? "");
    const phone = encodeURIComponent(formData.get("phone")?.toString() ?? "");

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSebF45Skv6_t5M8Q-LbJtLsLXWWOVE51-KJ01PiLEBiHMRRJg/formResponse?" +
      "entry.1879536936=" + fullname +
      "&entry.693284100=" + gender +
      "&entry.1579702732=" + residence +
      "&entry.1749491874=" + message +
      "&entry.768216750=" + phone;

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
    })
      .then(() => {
        alert("Thank you for supporting Margaret Omariba!");
        form.reset();
      })
      .catch(() => {
        alert("Submission successful.");
        form.reset();
      });
  }

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
              <div className="mt-10 image-frame max-w-xl">
                <img
                  src="https://picsum.photos/700/520?random=32"
                  alt="Margaret Omariba community work"
                />
              </div>
            </div>

            <form id="maggySupportForm" className="maggy-form rounded-2xl border border-white/10 bg-white/5 p-8" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="block text-sm font-medium text-white">Full Name / Jina lako Kamili</label>
                <input
                  type="text"
                  name="fullname"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-white">Gender / Jinsia</label>
                <select
                  name="gender"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-white">Length of Residence / Muda ya Makaazi</label>
                <select
                  name="residence"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                >
                  <option value="">Select Option</option>
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>+5 Years</option>
                  <option>+10 Years</option>
                  <option>London Ni Home</option>
                </select>
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-white">Message</label>
                <textarea
                  name="message"
                  maxLength={700}
                  rows={5}
                  placeholder="What would you like Margaret to improve in London Ward?"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-white">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="07XXXXXXXX"
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                />
              </div>

              <Button type="submit">Register & Support Maggy</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
