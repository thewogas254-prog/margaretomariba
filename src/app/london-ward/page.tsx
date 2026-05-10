"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/button";

export default function LondonWardPage() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <main className="pt-28">
        <section className="section">
          <div className="container">
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">London Ward Vision</p>
            <h1 className="section-title">A Stronger, Safer, and More Empowered London Ward</h1>
            <p className="section-description max-w-3xl">
              Margaret Omariba’s vision for London Ward is rooted in servant leadership, community empowerment, and practical development that directly improves the lives of residents.
            </p>
          </div>
        </section>

        <section className="section bg-navy/10">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">A Stronger, Safer, and More Empowered London Ward</h2>
                <p className="text-white/80 mb-6">
                  Her focus is on building a ward where families feel safe, young people have opportunities, women are empowered, businesses can grow, and every resident is treated with dignity and respect.
                </p>
                <p className="text-white/75">
                  This vision is not built on promises alone — it is built on community engagement, action, and partnership with the people.
                </p>
              </div>
              <div className="image-frame">
                <Image
                  src="/images/profilephoto2.jpeg"
                  alt="Margaret Omariba in London Ward"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Priorities for London Ward</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Safe and Clean Neighborhoods</h3>
                <p className="text-white/75 mb-4">
                  Every family deserves to live in a clean, secure, and dignified environment. Margaret is committed to supporting initiatives that improve safety, sanitation, and community wellbeing across the ward.
                </p>
                <ul className="space-y-3 text-white/75 pl-5 list-disc">
                  <li>Community clean-up programs</li>
                  <li>Better street lighting in insecure areas</li>
                  <li>Youth engagement to reduce crime and drug abuse</li>
                  <li>Cleaner public spaces and improved waste management</li>
                  <li>Support for safer roads and pathways</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Youth Empowerment and Opportunities</h3>
                <p className="text-white/75 mb-4">
                  Young people are the future of London Ward. Margaret believes in creating opportunities that help youth discover their talents, gain skills, and build better futures.
                </p>
                <ul className="space-y-3 text-white/75 pl-5 list-disc">
                  <li>Leadership and mentorship programs</li>
                  <li>Sports development and talent support</li>
                  <li>Skills training and entrepreneurship support</li>
                  <li>Career guidance and empowerment forums</li>
                  <li>Youth engagement programs to promote positive community involvement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Education Support</h3>
                <p className="text-white/75 mb-4">
                  Education remains one of the strongest tools for transforming families and communities. Margaret is committed to supporting learners and creating better opportunities for children and youth.
                </p>
                <ul className="space-y-3 text-white/75 pl-5 list-disc">
                  <li>Mentorship and academic support programs</li>
                  <li>After-school learning initiatives</li>
                  <li>Support for vulnerable learners</li>
                  <li>Access to educational resources and community learning programs</li>
                  <li>Partnerships that promote quality education</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Health and Community Welfare</h3>
                <p className="text-white/75 mb-4">
                  A healthy community is a productive community. Margaret is committed to promoting better health awareness, family wellbeing, and support for vulnerable residents.
                </p>
                <ul className="space-y-3 text-white/75 pl-5 list-disc">
                  <li>Community health awareness campaigns</li>
                  <li>Support for maternal and child wellbeing</li>
                  <li>Clean environment initiatives to improve public health</li>
                  <li>Mental health and youth wellness awareness</li>
                  <li>Partnerships that improve access to community support services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Women Empowerment and Family Support</h3>
                <p className="text-white/75 mb-4">
                  Margaret believes empowered women build stronger families and communities. Her leadership prioritizes economic empowerment, support networks, and opportunities for women across the ward.
                </p>
                <ul className="space-y-3 text-white/75 pl-5 list-disc">
                  <li>Women empowerment forums and mentorship</li>
                  <li>Small business and entrepreneurship support</li>
                  <li>Skills-sharing initiatives</li>
                  <li>Community support networks for families</li>
                  <li>Encouraging financial independence and self-reliance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Environmental Conservation</h3>
                <p className="text-white/75 mb-4">
                  Protecting the environment is essential for the future of London Ward. Margaret supports practical environmental initiatives that create cleaner and greener neighborhoods.
                </p>
                <ul className="space-y-3 text-white/75 pl-5 list-disc">
                  <li>Tree planting programs</li>
                  <li>Environmental awareness campaigns</li>
                  <li>Waste reduction and recycling initiatives</li>
                  <li>Protection and improvement of public green spaces</li>
                  <li>Community participation in environmental conservation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-navy/10">
          <div className="container">
            <h2 className="section-title">Leadership Grounded in the Community</h2>
            <p className="text-white/75 mb-8 max-w-3xl">
              Margaret Omariba believes true leadership begins with listening to the people. Her approach is community-driven, transparent, and focused on practical solutions that address the everyday challenges facing residents.
            </p>
            <p className="text-white/75">
              This vision for London Ward is built from the voices of residents, youth, women groups, local leaders, schools, churches, and community stakeholders — not outside interests or political theatrics.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Ongoing Community Initiatives</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "Tree Planting Initiative", desc: "Residents and volunteers working together to create greener, cleaner, and healthier neighborhoods." },
                { title: "Youth Leadership Workshops", desc: "Programs focused on mentorship, life skills, leadership development, and positive youth engagement." },
                { title: "Community Clean-Up Drives", desc: "Local residents joining hands to improve sanitation, beautify neighborhoods, and promote safer public spaces." },
                { title: "Women Empowerment Forums", desc: "Creating spaces where women can share opportunities, build networks, support each other, and grow economically." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-navy/10">
          <div className="container">
            <h2 className="section-title">A Shared Future for London Ward</h2>
            <ul className="space-y-3 text-white/75 pl-5 list-disc">
              <li>A united ward.</li>
              <li>Empowered youth.</li>
              <li>Supported families.</li>
              <li>Cleaner neighborhoods.</li>
              <li>Better opportunities.</li>
              <li>Leadership that serves the people.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container flex flex-col gap-4 sm:flex-row justify-center">
            <Button href="/contact">Connect with Us</Button>
            <Button variant="secondary" href="/foundation">Explore Foundation</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
