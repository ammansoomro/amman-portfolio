import Section from "./Section";
import { skills } from "@/data/experience";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          What I bring to the <span className="text-gradient">table</span>
        </>
      }
    >
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-tile">
            <div className="skill-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={skill.logo} alt={skill.name} />
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
