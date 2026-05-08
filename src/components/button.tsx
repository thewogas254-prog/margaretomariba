import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  children: ReactNode;
  target?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "type"> & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function Button({ variant = "primary", href, children, target, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";
  const styles =
    variant === "secondary"
      ? "border border-solid border-white/15 bg-white/10 text-cream hover:bg-white/15"
      : "bg-gold text-charcoal shadow-[0_16px_45px_rgba(198,167,106,0.28)] hover:bg-[#d8b965]";

  if (href) {
    return (
      <a href={href} target={target} className={`${base} ${styles}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}
