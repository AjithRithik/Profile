import { Heading } from "./Heading";
import { Skills } from "./Skills";

export const SkillSection = () => (
  <section className="col-span-1 mt-8 first:mt-0" id="skills">
    <Heading title="Skills" />
    {/* <!-- Programming Languages --> */}
    <Skills
      title={"Programming Languages"}
      skills={[
        "HTML",
        "CSS/CSS3/Sass",
        "JavaScript (ES6+)",
        "TypeScript",
        "Node js",
        "GraphQL",
      ]}
    />
    {/* <!-- End Programming Languages --> */}

    {/* <!-- Libraries & Frameworks --> */}
    <Skills
      title={"Libraries & Frameworks"}
      skills={[
        "React",
        "Next.js",
        "Angular",
        "JQuery",
        "Axois",
        "Apollo",
        "Express",
        "Themeui",
        "Tailwind",
        "Bootstrap",
        "Material UI",
        "Styled Components",
      ]}
    />
    {/* <!-- End Libraries & Frameworks --> */}

    {/* <!-- Test Runners --> */}
    <Skills
      title={"Test Runners & Libraries"}
      skills={["Jest", "Vite", "Cypress"]}
    />
    {/* <!-- End Test Runners --> */}

    {/* <!-- Tools | Platforms | Services --> */}

    <Skills
      title={"Tools | Services | Database | CMS"}
      skills={[
        "Git / Bash / Shells",
        "Eslint",
        "GitLab",
        "Azure",
        "CI / CD",
        "Sonarqube",
        "GrowthBook",
        "Kippa OCR",
        "Vscode",
        "NPM",
        "Yarn",
        "Optimizely A/B testing",
        "Contentful CMS",
        "Netlify CMS",
        "Netlify",
        "Vercel",
        "Jenkins",
        "Webpack",
        "Turbo",
        "Monorepo",
        "AWS cloud front",
        "Firebase",
        "Mongodb",
        "Zendesk",
        "Optimove",
        "Chat tools",
        "Google Analytics",
      ]}
    />

    {/* <!-- End Tools | Platforms | Services --> */}

    {/* <!-- Related Skills --> */}

    <Skills
      title={"Related Skills"}
      skills={["Agile (Scrum)", "SEO / Meta", "Jira / Atlassian"]}
    />

    {/* <!-- End Related Skills --> */}
  </section>
);
