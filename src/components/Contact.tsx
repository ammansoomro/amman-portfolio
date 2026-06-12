import Section from "./Section";
import { links } from "@/data/experience";
import {
  ChatIcon,
  FileIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";

const cards = [
  {
    href: links.resume,
    icon: <FileIcon />,
    title: "Download Resume",
    sub: "PDF · Google Drive",
  },
  {
    href: `mailto:${links.email}`,
    icon: <MailIcon />,
    title: "Email Me",
    sub: links.email,
  },
  {
    href: links.whatsapp,
    icon: <ChatIcon />,
    title: "Text Me",
    sub: "WhatsApp",
  },
];

export default function Contact() {
  return (
    <>
      <Section
        id="contact"
        eyebrow="Contact"
        title={
          <>
            Connect <span className="text-gradient">with me</span>
          </>
        }
      >
        <div className="contact-cards">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">{card.icon}</span>
              <span className="contact-label">
                <span className="contact-label-title">{card.title}</span>
                <span className="contact-label-sub">{card.sub}</span>
              </span>
            </a>
          ))}
        </div>
      </Section>
      <footer className="footer">
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} Amman Soomro — crafted with care.
          </span>
          <div className="footer-socials">
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={16} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={16} />
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
