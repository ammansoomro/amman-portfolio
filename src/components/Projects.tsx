"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "./Section";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { ChromeIcon, ExternalLinkIcon, GitHubIcon } from "./Icons";

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

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
        <GitHubIcon size={14} /> Source code
      </a>
      {project.projectLink && (
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
          <ExternalLinkIcon /> Live demo
        </a>
      )}
      {project.storeLink && (
        <a href={project.storeLink} target="_blank" rel="noopener noreferrer" className="project-link">
          <ChromeIcon /> Chrome Web Store
        </a>
      )}
    </div>
  );
}

function FeaturedShowcase({ project, index }: { project: Project; index: number }) {
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
      <ProjectLinks project={project} />
      <Link href={`/projects/${project.slug}`} className="showcase-frame">
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
          View case study →
        </span>
      </Link>
    </motion.article>
  );
}

export default function Projects() {
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
          <FeaturedShowcase key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="archive">
        <div className="archive-label">
          <span className="eyebrow">More projects</span>
        </div>
        <div className="archive-list">
          {rest.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="archive-row">
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
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
