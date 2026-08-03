import { Heading } from "./Heading";

export const Profile = () => (
  <section className="mt-8 first:mt-0" id="profile">
    <Heading title="Profile" />
    <div className="text-sm leading-normal text-justify gap-2 flex flex-col">
      <p>
        Seasoned Front-End Developer with{" "}
        <span className="font-semibold">10.5 years of experience</span>,
        specializing in scalable, high-performance web applications. Expertise
        in <span className="font-semibold">modern JavaScript frameworks</span>{" "}
        (Angular, React, Next.js) and front-end architecture including{" "}
        <span className="font-semibold">
          performance optimization, state management, modular design, and
          responsive UI development.
        </span>
      </p>
      <p>
        Also proficient in backend development with{" "}
        <span className="font-semibold">Java (Spring MVC, Spring Boot)</span>{" "}
        and <span className="font-semibold">Node.js, Express</span>, and
        experienced in{" "}
        <span className="font-semibold">headless CMS implementations</span>{" "}
        (Contentful, Netlify CMS). Skilled in{" "}
        <span className="font-semibold">CI/CD workflows, cloud platforms</span>{" "}
        (Firebase), and modern development tools like{" "}
        <span className="font-semibold">
          Webpack, Turbo, and monorepo architectures.
        </span>
      </p>
      <p>
        Strong advocate for <span className="font-semibold">Agile</span> (Scrum)
        practices, with proven leadership in mentoring teams, collaborating
        cross-functionally, and delivering{" "}
        <span className="font-semibold">user-centric digital solutions</span>{" "}
        that align with business goals.
      </p>
    </div>
  </section>
);
