import Section from "./Section";

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "2M+", label: "Users served in production" },
  { value: "50+", label: "Freelance projects delivered" },
  { value: "3.5", label: "CGPA · Dean's & Rector's List" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          The engineer <span className="text-gradient">behind the screen</span>
        </>
      }
    >
      <div className="stat-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="about-grid">
        <div className="about-prose">
          <p>Hi, I&apos;m Amman —</p>
          <p>
            A Software Engineer with{" "}
            <a href="#experience">3 years of experience</a> in full-stack
            development. I enjoy building high-performance applications that
            make an impact.
          </p>
          <p>
            I graduated from{" "}
            <a
              href="https://www.nu.edu.pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAST National University of Computer and Emerging Sciences
              (NUCES)
            </a>{" "}
            with a CGPA of <strong>3.5</strong>, earning a place on the
            Dean&apos;s and Rector&apos;s List multiple times and securing{" "}
            <strong>1st position</strong> in one of my semesters.
          </p>
          <p>
            Currently, I&apos;m working at{" "}
            <a
              href="https://matrix.com.pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matrix Systems
            </a>{" "}
            on a large-scale management and portfolio optimization platform,{" "}
            <strong>MARS (Managed Accounts Rebalancing System)</strong>. I
            contribute to critical modules involving portfolio analysis, risk
            management, and optimization, while ensuring best practices,
            performance tuning, and clean code for enterprise-level financial
            institutions.
          </p>
          <p>
            Previously, I worked at{" "}
            <a
              href="https://www.techlogix.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Techlogix
            </a>{" "}
            on a major digital banking application used by{" "}
            <strong>millions of users</strong>. I developed key modules,
            optimized performance, and collaborated closely with my team to
            deliver reliable, efficient features for large-scale production
            systems.
          </p>
          <p>
            Alongside my full-time role, I&apos;ve been freelancing on{" "}
            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiverr
            </a>{" "}
            for over 2 years. As a <strong>Level 2 Seller</strong>, I&apos;ve
            successfully delivered <strong>50+ projects</strong> with
            consistently high ratings, helping clients worldwide with custom
            software solutions, academic projects, and full application
            development.
          </p>
          <p>
            Outside of work, I love exploring new technologies, building
            personal projects, and relaxing with some PlayStation gaming.
          </p>
          <p>Thanks for stopping by!</p>
        </div>
      </div>
    </Section>
  );
}
