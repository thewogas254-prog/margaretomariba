"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

const galleryItems = [
  { src: "/images/charity1.jpeg", title: "Youth empowerment workshop" },
  { src: "/images/women1.jpeg", title: "Women's mentoring circle" },
  { src: "/images/charity2.jpeg", title: "Community outreach event" },
  { src: "/images/charity3.jpeg", title: "Sports and charity tournament" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main className="pt-28">
        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Gallery</p>
            <h1 className="section-title">Community work in action</h1>
            <p className="section-description max-w-3xl">
              Browse a pictorial snapshot of foundation activities and London Ward projects that bring people together.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {galleryItems.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="image-frame">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={700}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container flex flex-col gap-4 sm:flex-row justify-center">
            <Button href="/programs">View Programs</Button>
            <Button variant="secondary" href="/contact">Request a Visit</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
