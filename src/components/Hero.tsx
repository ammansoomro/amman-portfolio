"use client";

import { motion } from "framer-motion";
import { links } from "@/data/experience";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="container">
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">Software Engineer · Full Stack</span>
          <h1 className="display">
            Amman <span className="text-gradient">Soomro</span>
          </h1>
          <p className="subtitle">
            Developing innovative solutions with clean, well-structured code —
            building high-performance applications that make an impact.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="hero-socials">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-tile"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
