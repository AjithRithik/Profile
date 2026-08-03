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
        companyName="Specialist Software Engineer @ LTIMindtree - (Full-Time)"
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
              Collaborate within a 15-member Agile team building an enterprise
              healthcare platform using Angular, TypeScript, and Java Spring MVC
              REST APIs.
            </List>
            <List>
              Refactored and optimized complex Angular components, including the
              pricing package module, boosting performance and maintainability.
            </List>
            <List>
              Established unit testing from scratch, driving code coverage from
              0% to 80%+ across all modules.
            </List>
            <List>
              Delivered error-free feature releases through rigorous Git-based
              code reviews and Angular/TypeScript best practices.
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
              Built a global multi-brand e-commerce platform in Next.js and
              TypeScript, translating designs into production-ready UI.
            </List>
            <List>
              Engineered reusable, themeable React components in Storybook,
              cutting code duplication across brand storefronts.
            </List>
            <List>
              Delivered Loyalty and Referral engagement features in partnership
              with Product Owners and Frontend Architects.
            </List>
            <List>
              Maintained 80%+ code coverage with Jest/Vitest, validated via
              SonarQube, and enforced best practices through Git code reviews.
            </List>
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
            Led a 10-member team delivering 6 concurrent e-commerce client
            projects under tight delivery timelines.
          </List>
          <List>
            Built responsive web and mobile apps using Next.js, React Native,
            and TypeScript with REST API integrations.
          </List>
          <List>
            Directed end-to-end delivery across projects, ensuring on-time
            releases in a fast-paced Agile environment.
          </List>
          <List>
            Owned roadmaps, estimations, and sprint planning across simultaneous
            client engagements.
          </List>
          <List>
            Mentored junior developers on coding practices, code reviews, and
            Git workflows.
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
            Collaborated across cross-functional teams of 15-20 engineers
            building sports ERP systems for major Australian sports
            organizations (NRL, AFL & MLB).
          </List>
          <List>
            Built reusable, scalable components using AngularJS and Angular,
            supporting feature releases every 3-6 months.
          </List>
          <List>
            Developed, deployed, and supported production applications
            end-to-end under tight schedules.
          </List>
          <List>
            Expanded into full-stack development, building backend services and
            REST APIs with Java (JSP, Struts, Spring MVC, Spring Boot).
          </List>
          <List>
            Owned project estimations and planning, and mentored junior
            developers on best coding practices.
          </List>
        </div>
      </Experience>
    </div>
  </section>
);
