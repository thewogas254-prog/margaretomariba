"use client";

import { motion } from "framer-motion";

type ImpactCardProps = {
  title: string;
  description: string;
};

export function ImpactCard({ title, description }: ImpactCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#132238] p-8 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
    >
      <span className="mb-4 inline-flex text-xs uppercase tracking-[0.28em] text-white/60">
        Initiative
      </span>
      <h3 className="mb-4 text-2xl font-semibold text-cream">{title}</h3>
      <p className="text-sm leading-7 text-white/80">{description}</p>
    </motion.article>
  );
}
