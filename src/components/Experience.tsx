"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          The road <span className="text-gradient">so far</span>
        </>
      }
    >
      <div className="xp-timeline">
        <span className="xp-rail" aria-hidden="true" />

        {experiences.map((entry, index) => {
          const isCurrent = /present/i.test(entry.tenure);

          return (
            <motion.article
              key={entry.company + entry.tenure}
              className="xp-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <span className="xp-node" aria-hidden="true">
                {isCurrent && <span className="xp-node-pulse" />}
              </span>

              <header className="xp-card-head">
                <div className="xp-logo">
                  <img src={entry.logo} alt={`${entry.company} logo`} />
                </div>

                <div className="xp-headings">
                  <h3 className="xp-role">{entry.role}</h3>
                  {entry.companyUrl ? (
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xp-company"
                    >
                      {entry.company}
                      <svg
                        className="xp-company-arrow"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 9L9 3M9 3H4M9 3V8"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="xp-company">{entry.company}</span>
                  )}
                </div>

                <div className="xp-meta">
                  {isCurrent && (
                    <span className="xp-badge">
                      <span className="xp-badge-dot" />
                      Current
                    </span>
                  )}
                  <span className="xp-tenure">{entry.tenure}</span>
                </div>
              </header>

              <ul className="xp-points">
                {entry.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
