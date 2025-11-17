import { Heading } from "./Heading";

export const Profile = () => (
  <section className="mt-8 first:mt-0" id="profile">
    <Heading title="Profile" />
    <div className="text-sm leading-normal text-justify gap-2 flex flex-col">
      <p>
        Seasoned Front-End Developer with{" "}
        <span className="font-semibold">9.5+ years of experience</span>,
        specializing in scalable, high-performance web applications. Expertise
        in <span className="font-semibold">modern JavaScript frameworks</span>{" "}
        (Angular, React, Next.js) and front-end architecture including{" "}
        <span className="font-semibold">
          performance optimization, state management, modular design, and
          responsive UI development.
        </span>
      </p>
      <p>
        Proficient in{" "}
        <span className="font-semibold">partial MEAN stack development</span>{" "}
        (Node.js, Express, MongoDB) and experienced in{" "}
        <span className="font-semibold">headless CMS implementations</span>{" "}
        (Contentful, Netlify CMS). Skilled in{" "}
        <span className="font-semibold">CI/CD workflows, cloud platforms</span>{" "}
        (Firebase), and modern development tools like{" "}
        <span className="font-semibold">
          Webpack, Turbo, and monorepo architectures
        </span>
      </p>
      <p>
        Strong advocate for <span className="font-semibold">Agile</span> (Scrum)
        practices, with proven leadership in mentoring teams, collaborating
        cross-functionally, and delivering{" "}
        <span className="font-semibold">user-centric digital solutions</span>{" "}
        that align with business goals.
      </p>
      {/* Seasoned Front-End Developer with over 9.5 years of experience
      specializing in building scalable, high-performance web applications using
      modern JavaScript frameworks such as Angular, React, and Next.js.
      Primarily focused on front-end architecture including performance
      optimization, state management, modular design, and responsive UI
      development, also contributing to partial MEAN stack development including
      Node.js, Express, and MongoDB integration. Proficient in headless CMS
      implementations (Contentful, Netlify CMS) and experienced in delivering
      dynamic, content-driven applications across e-commerce, finance,
      healthcare, and sports domains. Skilled in CI/CD workflows, cloud
      platforms like Firebase, and modern tooling such as Webpack, Turbo, and
      monorepo architectures. Strong advocate of Agile (Scrum), with hands-on
      experience in SEO best practices, A/B testing, and effective collaboration
      with product managers, designers, and backend teams. Demonstrated
      leadership in mentoring front-end developers, driving technical
      excellence, and delivering user-centric digital solutions aligned with
      business objectives. */}
    </div>
  </section>
);
