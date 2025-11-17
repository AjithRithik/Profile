import { Heading } from "./Heading";
import { Skills } from "./Skills";

export const SkillSection = () => (
  <section className="col-span-1 mt-8 first:mt-0" id="skills">
    <Heading title="Skills" />

    {/* Programming Languages */}
    <Skills
      title="Programming Languages"
      skills={[
        "HTML",
        "CSS / CSS3 / Sass",
        "JavaScript (Advanced)",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "MongoDB",
        "Java",
        "SQL (basic)",
      ]}
    />

    {/* Frontend & Backend Frameworks */}
    <Skills
      title="Frontend & Backend Frameworks"
      skills={[
        "Angular",
        "React",
        "Next.js",
        "jQuery",
        "Axios",
        "Apollo",
        "Theme UI",
        "Tailwind",
        "Bootstrap",
        "Material UI",
        "Styled Components",
        "Redux",
        "React Query",
        "RxJS",
        "NgRx",
        "Express",
        "Nest.js",
        "Java Spring MVC",
      ]}
    />

    {/* DevOps, Tools & Build Systems */}
    <Skills
      title="DevOps, Tools & Build Systems"
      skills={[
        "Git / Bash / GitHub",
        "GitLab",
        "Azure",
        "CI / CD",
        "SonarQube",
        "Jenkins",
        "ESLint",
        "VSCode",
        "NPM",
        "Yarn",
        "Webpack",
        "Turbo",
        "Monorepo",
      ]}
    />

    {/* Cloud, Analytics, CMS & Communication */}
    <Skills
      title="Cloud, Analytics, CMS & Communication"
      skills={[
        "AWS CloudFront",
        "Firebase",
        "Google Analytics",
        "GrowthBook",
        "Optimizely A/B Testing",
        "Optimove",
        "Contentful CMS",
        "Netlify CMS",
        "Netlify",
        "Vercel",
        "Zendesk",
        "Chat Tools",
      ]}
    />

    {/* Testing & Related Skills */}
    <Skills
      title="Testing libraries"
      skills={["Jest", "Cypress", "Testing Library", "Vitest", "Cucumber"]}
    />
  </section>
);
