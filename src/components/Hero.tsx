"use client";

import { motion } from "framer-motion";
import { links } from "@/data/experience";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
} as const;

function TerminalCard() {
  return (
    <div className="hero-terminal-wrap">
      <span className="anno-chip anno-chip-tl">
        <span className="anno-swatches">
          <span className="anno-swatch" style={{ background: "#663af3" }} />
          <span className="anno-swatch" style={{ background: "#027dea" }} />
          <span className="anno-swatch" style={{ background: "#269684" }} />
        </span>
        SDE II @ Matrix Systems
      </span>
      <div className="hero-terminal">
        <div className="term-header">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-title">amman.ts — portfolio</span>
        </div>
        <div className="term-body">
          <span className="ln">
            <span className="tok-kw">const</span>{" "}
            <span className="tok-var">engineer</span>
            <span className="tok-punc"> = {"{"}</span>
          </span>
          <span className="ln">
            {"  "}
            <span className="tok-key">name</span>
            <span className="tok-punc">: </span>
            <span className="tok-str">&quot;Amman Soomro&quot;</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="ln">
            {"  "}
            <span className="tok-key">role</span>
            <span className="tok-punc">: </span>
            <span className="tok-str">&quot;Software Engineer · Full Stack&quot;</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="ln">
            {"  "}
            <span className="tok-key">stack</span>
            <span className="tok-punc">: [</span>
            <span className="tok-str">&quot;React&quot;</span>
            <span className="tok-punc">, </span>
            <span className="tok-str">&quot;TypeScript&quot;</span>
            <span className="tok-punc">, </span>
            <span className="tok-str">&quot;Node.js&quot;</span>
            <span className="tok-punc">, </span>
            <span className="tok-str">&quot;Java&quot;</span>
            <span className="tok-punc">],</span>
          </span>
          <span className="ln">
            {"  "}
            <span className="tok-key">experience</span>
            <span className="tok-punc">: </span>
            <span className="tok-str">&quot;3+ years&quot;</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="ln">
            {"  "}
            <span className="tok-key">ships</span>
            <span className="tok-punc">: </span>
            <span className="tok-str">&quot;clean, high-performance code&quot;</span>
            <span className="tok-punc">,</span>
          </span>
          <span className="ln">
            <span className="tok-punc">{"}"};</span>
            <span className="term-cursor" />
          </span>
        </div>
      </div>
      <span className="anno-chip anno-chip-br">2M+ users served · 50+ projects</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="container">
        <motion.div
          className="hero-inner"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Software Engineer · Full Stack
          </motion.span>
          <motion.h1 variants={fadeUp} className="display">
            Amman <span className="text-gradient">Soomro</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="subtitle">
            Developing innovative solutions with clean, well-structured code —
            building high-performance applications that make an impact.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <a href="#work" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-socials">
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
          </motion.div>
          <motion.div variants={fadeUp} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <TerminalCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
