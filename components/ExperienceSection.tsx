import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Experience } from "./Experience";
import { Heading } from "./Heading";
import { ReactNode } from "react";

const Project = ({
  title,
  projects,
}: {
  title: string;
  projects: string[];
}) => (
  <div className="flex gap-2 pt-2 items-center">
    <div className="text-purple-900 font-medium">{title}:</div>
    <div className="flex flex-wrap gap-1">
      {projects?.map((project, key) => (
        <div
          key={key}
          className="px-3 text-xs font-semibold py-1 rounded-full bg-purple-700 bg-opacity-20 text-purple-700"
        >
          {project}
        </div>
      ))}
    </div>
  </div>
);

const List = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-2">
    <div className="flex mt-1">
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
    <div className="text-wrap text-justify">{children}</div>
  </div>
);

export const ExperienceSection = () => (
  <section className="col-span-3 mt-6" id="experience">
    <Heading title="Experience" />

    <div className="relative border-s border-gray-200 ml-4">
      <Experience
        companyName="Specialist-Software Engineer @ LTIMindtree - (Full-Time)"
        isPresent
        duration="Dec 2021 - Present"
        location="Bengaluru, Karnataka, India · Hybrid"
      >
        <div className="flex flex-col gap-1 text-[13px] font-medium">
          <List>
            Worked on the global multi-brand e-commerce Web application. My key
            responsibility is to translate the design system into a seamless
            user interface by using Next js
          </List>
          <List>
            Built reusable & themeable react components in the storybook to
            reduce code duplication.
          </List>
          <List>
            Actively worked on user engagement programs such as Loyalty and
            referral programs.
          </List>
          <List>
            Collaborated with Product owner and Frontend Architect team and
            provided excellent suggestions for new features development.
          </List>
          <List>
            Performed unit tests by using jest/vitest to maintain 80% code
            coverage in the Sonarqube
          </List>
          <List>
            Reviewed peer developers' code and enforced them to follow the best
            coding practices.
          </List>
        </div>
        <Project title="Projects" projects={["Blu/Pulze Vape Shop"]} />
      </Experience>
      <Experience
        companyName="Senior Frontend Developer @ F22 Labs - (Full-Time)"
        duration="Jan 2020 - Dec 2021"
        location="Chennai Area, India"
      >
        <div className="flex flex-col gap-1 text-[13px] font-medium">
          <List>
            Worked on multiple e-commerce projects with multiple clients
            simultaneously.
          </List>
          <List>
            Built responsive web and mobile applications by using Next js, and
            React Native.
          </List>
          <List>
            Led the team, developed, deployed, and delivered applications in the
            most effective way.
          </List>
          <List>
            Actively involved in project management activities such as project
            road maps, project estimations & project plannings.
          </List>
          <List>
            Mentored junior developers by providing excellent tips & feedbacks
            to enforced them to follow the best coding practices.
          </List>
        </div>
        <Project
          title="Projects"
          projects={[
            "Activkido",
            "CheftoYourTable",
            "JustAct",
            "Wimple",
            "Pixlmeet",
          ]}
        />
      </Experience>
      <Experience
        companyName="Software Engineer @ Orion Business Innovation - (Full-Time)"
        duration="Feb 2016 - Jan 2020"
        location="Madurai, Tamil Nadu, India"
      >
        <div className="flex flex-col gap-1 text-[13px] font-medium">
          <List>
            Worked on large-scale sports ERP projects for the major Sports
            organization in Australia (NRL, AFL & MLB).
          </List>
          <List>
            Built reusable components for complex workflows by using Angular js
            and Angular.
          </List>
          <List>
            Coordinated with the team, developed, deployed, supported, and
            delivered applications effectively even in tight schedules.
          </List>
          <List>
            Primarily involved in Frontend development, later took Backend
            challenges as well with Java frameworks (JSP, Struts, Spring MVC,
            spring boot).
          </List>
          <List>
            Actively involved in project management activities such as project
            estimations and project plannings.
          </List>
          <List>
            Mentored junior developers and helped them to follow the best code
            practices.
          </List>
        </div>
        <Project
          title="Sports Projects"
          projects={[
            "Contracts",
            "Salarycap",
            "Safegaurd",
            "Player trade",
            "integrity",
          ]}
        />
      </Experience>
    </div>
  </section>
);
