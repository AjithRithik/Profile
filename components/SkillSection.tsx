import { Heading } from "./Heading";
import { Skills } from "./Skills";

export const SkillSection = () => (
  <section className="col-span-1 mt-8 first:mt-0" id="skills">
    <Heading title="Skills" />

    {/* Languages */}
    <Skills
      title="Languages"
      skills={[
        "HTML",
        "CSS / CSS3 / Sass",
        "JavaScript (Advanced)",
        "TypeScript",
        "Java",
        "SQL (basic)",
      ]}
    />

    {/* Frontend Frameworks & Libraries */}
    <Skills
      title="Frontend Frameworks & Libraries"
      skills={[
        "Angular",
        "React",
        "Next.js",
        "jQuery",
        "Redux",
        "NgRx",
        "RxJS",
        "React Query",
        "Apollo",
        "Axios",
        "Tailwind",
        "Bootstrap",
        "Material UI",
        "Styled Components",
        "Theme UI",
      ]}
    />

    {/* Backend & APIs */}
    <Skills
      title="Backend & APIs"
      skills={["Node.js", "Express", "Nest.js", "Java Spring MVC"]}
    />

    {/* Testing */}
    <Skills
      title="Testing"
      skills={["Jest", "Vitest", "Cypress", "Testing Library", "Cucumber"]}
    />

    {/* DevOps, Build Tools & Cloud */}
    <Skills
      title="DevOps, Build Tools & Cloud"
      skills={[
        "Git / Bash / GitHub",
        "GitLab",
        "CI / CD",
        "Jenkins",
        "Webpack",
        "Turbo",
        "Monorepo",
        "NPM",
        "Yarn",
        "ESLint",
        "VSCode",
        "SonarQube",
        "Azure",
        "AWS CloudFront",
        "Firebase",
        "Netlify",
        "Vercel",
      ]}
    />

    {/* AI Tools */}
    <Skills
      title="AI Tools"
      skills={[
        "GitHub Copilot",
        "ChatGPT",
        "Claude Code",
        "Cursor",
        "Antigravity",
        "OpenCode",
        "OpenEx",
        "Stitch AI",
      ]}
    />

    {/* CMS & Analytics */}
    <Skills
      title="CMS & Analytics"
      skills={[
        "Optimizely A/B Testing",
        "Google Analytics",
        "Contentful CMS",
        "LaunchDarkly",
        "Netlify CMS",
        "GrowthBook",
        "Chat Tools",
        "Optimove",
        "Zendesk",
      ]}
    />
  </section>
);
