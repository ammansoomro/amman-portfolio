import { links } from "@/data/experience";
import { GitHubIcon } from "./Icons";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-brand" aria-label="Amman Soomro — home">
          A<span>.</span>
        </a>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-pill">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary nav-cta"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
