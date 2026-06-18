"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import {
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { ChromeIcon, CloseIcon, ExternalLinkIcon, GitHubIcon } from "./Icons";

const FEATURED_COUNT = 3;
const swatchColors = ["#663af3", "#e46d4c", "#027dea", "#269684"];

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  extension: "Extension",
  "mini-app": "Mini App",
  tool: "Tool",
};

function CategoryBadge({ category }: { category?: ProjectCategory }) {
  if (!category) return null;
  return <span className={`project-badge project-badge-${category}`}>{CATEGORY_LABELS[category]}</span>;
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-desc">{project.description}</p>
        <div className="tech-row">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <GitHubIcon size={14} /> Source code
          </a>
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLinkIcon /> Live demo
            </a>
          )}
          {project.storeLink && (
            <a
              href={project.storeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ChromeIcon /> Chrome Web Store
            </a>
          )}
        </div>
        <div className="modal-gallery">
          {project.screenshots.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={`${project.title} screenshot`} loading="lazy" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedShowcase({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="showcase-item"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="showcase-index">
        Project {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="showcase-title">
        {project.title}
        <CategoryBadge category={project.category} />
      </h3>
      <p className="showcase-desc">{project.description}</p>
      <div className="showcase-tech">
        {project.technologies.slice(0, 8).map((tech) => (
          <span key={tech} className="tech-chip">
            {tech}
          </span>
        ))}
        {project.technologies.length > 8 && (
          <span className="tech-chip">
            +{project.technologies.length - 8} more
          </span>
        )}
      </div>
      <div className="project-links">
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <GitHubIcon size={14} /> Source code
        </a>
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLinkIcon /> Live demo
          </a>
        )}
        {project.storeLink && (
          <a
            href={project.storeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ChromeIcon /> Chrome Web Store
          </a>
        )}
      </div>
      <button className="showcase-frame" onClick={onOpen}>
        <span className="anno-chip anno-chip-tl">
          <span className="anno-swatches">
            {swatchColors.slice(0, project.tags.length + 1).map((color) => (
              <span
                key={color}
                className="anno-swatch"
                style={{ background: color }}
              />
            ))}
          </span>
          {project.tags.join(" · ")}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="showcase-shot"
          src={project.cover}
          alt={project.title}
          loading={index === 0 ? "eager" : "lazy"}
        />
        <span className="anno-chip anno-chip-br">
          View {project.screenshots.length}{" "}
          {project.screenshots.length === 1 ? "screen" : "screens"} →
        </span>
      </button>
    </motion.article>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);

  return (
    <Section
      id="work"
      eyebrow="Work"
      title={
        <>
          Things I&apos;ve <span className="text-gradient">built</span>
        </>
      }
    >
      <div className="showcase">
        {featured.map((project, i) => (
          <FeaturedShowcase
            key={project.title}
            project={project}
            index={i}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <div className="archive">
        <div className="archive-label">
          <span className="eyebrow">More projects</span>
        </div>
        <div className="archive-list">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className="archive-row"
              role="button"
              tabIndex={0}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
            >
              <span className="archive-num">
                {String(FEATURED_COUNT + i + 1).padStart(2, "0")}
              </span>
              <span className="archive-main">
                <span className="archive-title">
                  {project.title}
                  <CategoryBadge category={project.category} />
                </span>
                <span className="archive-sub">{project.description}</span>
              </span>
              <span className="archive-tech">
                {project.technologies.slice(0, 3).join(" · ")}
              </span>
              <span className="archive-actions">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHubIcon size={15} />
                </a>
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLinkIcon size={15} />
                  </a>
                )}
                {project.storeLink && (
                  <a
                    href={project.storeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on the Chrome Web Store`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ChromeIcon size={15} />
                  </a>
                )}
                <span className="archive-arrow">→</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
}
