import { Button } from "./button";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/1E9GPMde3C/" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal/95 py-20 text-cream backdrop-blur-xl">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Margaret Omariba Foundation</p>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-cream">Community. Leadership. Hope.</h2>
          <p className="max-w-lg text-base leading-8 text-white/70">
            Join the movement that uplifts London Ward through service-led leadership, health work, and grounded community impact.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Newsletter</p>
          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/70">Stay connected with updates, events and campaign stories.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-cream placeholder:text-white/40 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Campaign</p>
            <h3 className="mt-3 text-2xl font-semibold text-cream">Support the next wave of community programs.</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button variant="secondary" href="mailto:hello@omaribafoundation.org">
            Donate Now
          </Button>
        </div>
      </div>
    </footer>
  );
}
