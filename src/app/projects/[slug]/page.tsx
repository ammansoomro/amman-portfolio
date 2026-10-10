import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projects, getProjectBySlug } from "@/data/projects";
import { ChromeIcon, ExternalLinkIcon, GitHubIcon } from "@/components/Icons";

const CATEGORY_LABELS: Record<string, string> = {
  extension: "Browser Extension",
  "mini-app": "Mini App",
  tool: "Developer Tool",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — Amman Soomro` };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const gallery = [project.cover, ...project.screenshots.filter((s) => s !== project.cover)];

  return (
    <main>
      <Navbar />

      <section className="case-hero">
        <div className="container">
          <Link href="/#work" className="case-breadcrumb">
            ← Back to work
          </Link>
          <div style={{ marginTop: "var(--spacing-24)" }}>
            <span className="eyebrow">{CATEGORY_LABELS[project.category ?? ""] ?? "Project"}</span>
          </div>
          <h1 className="heading" style={{ maxWidth: "20ch", marginTop: "var(--spacing-16)" }}>
            {project.title}
          </h1>
          <p className="subtitle" style={{ maxWidth: "60ch", marginTop: "var(--spacing-16)" }}>
            {project.description.split(". ")[0]}.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="case-gallery">
            {gallery.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`${project.title} screenshot`}
                loading={i === 0 ? "eager" : "lazy"}
                className={i === 0 ? "case-gallery-feature" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <div className="case-layout">
            <div className="case-main">
              <div className="case-main-block">
                <h2 className="case-section-title">Overview</h2>
                <p className="case-overview">{project.overview}</p>
              </div>

              <div className="case-main-block">
                <h2 className="case-section-title">The problem</h2>
                <p className="case-overview">{project.problem}</p>
              </div>

              <div className="case-main-block">
                <h2 className="case-section-title">Solution &amp; implementation</h2>
                <p className="case-overview">{project.solution}</p>
              </div>

              <div className="case-main-block">
                <h2 className="case-section-title">Key features</h2>
                <div className="case-feature-list">
                  {project.features.map((f) => (
                    <div key={f.title} className="case-feature">
                      <h3 className="case-feature-title">{f.title}</h3>
                      <p className="case-feature-desc">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {project.challenges && project.challenges.length > 0 && (
                <div className="case-main-block">
                  <h2 className="case-section-title">Engineering decisions</h2>
                  <div className="case-feature-list">
                    {project.challenges.map((c) => (
                      <div key={c.title} className="case-feature">
                        <h3 className="case-feature-title">{c.title}</h3>
                        <p className="case-feature-desc">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.outcomes && project.outcomes.length > 0 && (
                <div className="case-main-block">
                  <h2 className="case-section-title">Outcomes</h2>
                  <ul className="case-outcomes">
                    {project.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="case-aside">
              <div className="case-aside-card">
                <span className="case-meta-label">Category</span>
                <p className="case-meta-value">{CATEGORY_LABELS[project.category ?? ""] ?? "Web application"}</p>

                <span className="case-meta-label" style={{ marginTop: "var(--spacing-20)" }}>
                  Technology stack
                </span>
                <div className="case-stack-grid">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="case-actions">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <GitHubIcon size={16} /> Source code
                  </a>
                  {project.projectLink && (
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <ExternalLinkIcon size={16} /> Live demo
                    </a>
                  )}
                  {project.storeLink && (
                    <a href={project.storeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                      <ChromeIcon size={16} /> Chrome Web Store
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="case-next" style={{ marginBottom: "var(--spacing-120)" }}>
        <div className="container">
          <span className="eyebrow">Next up</span>
          <Link href={`/projects/${next.slug}`} className="case-next-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={next.cover} alt={next.title} />
            <div className="case-next-overlay">
              <span className="case-next-label">Up next</span>
              <span className="case-next-title">{next.title} →</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
