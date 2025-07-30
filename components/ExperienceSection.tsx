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
  <div className="flex gap-2 pt-2 items-center mb-4">
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
  <section className="col-span-3" id="experience">
    <Heading title="Experience" />

    <div className="relative border-s border-gray-200 ml-4">
      <Experience
        companyName="Specialist-Software Engineer @ LTIMindtree - (Full-Time)"
        isPresent
        duration="Dec 2021 - Present"
        location="Coimbatore, Tamil Nadu, India"
      >
        <div className="flex flex-col gap-4 text-[13px] font-medium">
          {/* Angular + Java Spring MVC Project (Current Project) */}
          <div>
            <div className="font-semibold text-purple-900 mb-1">
              <Project
                title="Projects"
                projects={["Healthcare Platform (Angular & Java Spring MVC)"]}
              />
            </div>
            <List>
              Working as a Full Stack Developer in the healthcare domain, using
              Angular for frontend and Java Spring MVC for backend.
            </List>
            <List>
              Refactored complex Angular components and worked on multiple
              features like pricing package modal.
            </List>
            <List>
              Developed comprehensive unit test cases for all modules, achieving
              above 80% code coverage.
            </List>
            <List>
              Conducted extensive code reviews to ensure maintainability and
              adherence to best practices.
            </List>
            <List>
              Contributed to a large-scale project impacting multiple healthcare
              workflows.
            </List>
          </div>
          {/* Next.js Project */}
          <div>
            <div className="font-semibold text-purple-900 mb-1">
              <Project
                title="Projects"
                projects={["Blu/Pulze Vape Shop (Next.js)"]}
              />
            </div>
            <List>
              Worked on a global multi-brand e-commerce web application,
              translating the design system into a seamless user interface using
              Next.js.
            </List>
            <List>
              Built reusable and themeable React components in Storybook to
              reduce code duplication.
            </List>
            <List>
              Actively contributed to user engagement programs such as Loyalty
              and Referral.
            </List>
            <List>
              Collaborated with Product Owners and Frontend Architects,
              providing suggestions for new feature development.
            </List>
            <List>
              Performed unit tests using Jest/Vitest to maintain 80% code
              coverage in SonarQube.
            </List>
            <List>Reviewed peer code and enforced best coding practices.</List>
          </div>
        </div>
      </Experience>
      <Experience
        companyName="Senior Frontend Developer @ F22 Labs - (Full-Time)"
        duration="Jan 2020 - Dec 2021"
        location="Chennai Area, India"
      >
        <div className="font-semibold text-purple-900 mb-1">
          <Project
            title="Projects"
            projects={[
              "CheftoYourTable",
              "JustAct",
              "Wimple",
              "Pixlmeet",
              "Frankdarling",
            ]}
          />
        </div>
        <div className="flex flex-col gap-1 text-[13px] font-medium">
          <List>
            Worked on multiple e-commerce projects with multiple clients
            simultaneously.
          </List>
          <List>
            Built responsive web and mobile applications using Next.js and React
            Native.
          </List>
          <List>
            Led the team, developed, deployed, and delivered applications in the
            most effective way.
          </List>
          <List>
            Actively involved in project management activities such as project
            roadmaps, project estimations, and project planning.
          </List>
          <List>
            Mentored junior developers by providing excellent tips and feedback
            to encourage them to follow best coding practices.
          </List>
        </div>
      </Experience>
      <Experience
        companyName="Software Engineer @ Orion Business Innovation - (Full-Time)"
        duration="Feb 2016 - Jan 2020"
        location="Madurai, Tamil Nadu, India"
      >
        <div className="font-semibold text-purple-900 mb-1">
          <Project
            title="Sports Projects"
            projects={[
              "Contracts",
              "Salarycap",
              "Safeguard",
              "Player Trade",
              "Integrity",
            ]}
          />
        </div>
        <div className="flex flex-col gap-1 text-[13px] font-medium">
          <List>
            Worked on large-scale sports ERP projects for major sports
            organizations in Australia (NRL, AFL & MLB).
          </List>
          <List>
            Built reusable components for complex workflows using AngularJS and
            Angular.
          </List>
          <List>
            Coordinated with the team, developed, deployed, supported, and
            delivered applications effectively even under tight schedules.
          </List>
          <List>
            Primarily involved in frontend development, later took on backend
            challenges as well with Java frameworks (JSP, Struts, Spring MVC,
            Spring Boot).
          </List>
          <List>
            Actively involved in project management activities such as project
            estimations and project planning.
          </List>
          <List>
            Mentored junior developers and guided them to consistently follow
            best coding practices.
          </List>
        </div>
      </Experience>
    </div>
  </section>
);
