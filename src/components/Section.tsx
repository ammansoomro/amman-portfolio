"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="heading">{title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
