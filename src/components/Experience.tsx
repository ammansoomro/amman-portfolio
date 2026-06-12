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
      <div className="timeline">
        {experiences.map((entry) => (
          <div key={entry.company + entry.tenure} className="timeline-entry">
            <div className="timeline-head">
              <span className="timeline-role">{entry.role}</span>
              {entry.companyUrl ? (
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-company"
                >
                  {entry.company}
                </a>
              ) : (
                <span className="timeline-company">{entry.company}</span>
              )}
            </div>
            <div className="timeline-tenure">{entry.tenure}</div>
            <ul className="timeline-points">
              {entry.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
