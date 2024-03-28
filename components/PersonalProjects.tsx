import { Experience } from "./Experience";
import { Heading } from "./Heading";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

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

export const PersonalProjects = () => (
  <section className="col-span-3 mt-6" id="education">
    <Heading title="Personal Projects" />

    {/* <!-- Education 1 --> */}
    <div className="relative border-s border-gray-200 ml-4">
      <Experience
        icon={faRocket}
        companyName="medzlegal"
        location="https://portal.medzlegal.co/"
      >
        <Project title="Tech stack" projects={["React js, Tailwind css"]} />
      </Experience>
      <Experience
        icon={faRocket}
        companyName="The purble bird"
        location="https://thepurblebird.com/"
      >
        <Project title="Tech stack" projects={["Next js, Tailwind css"]} />
      </Experience>
    </div>
    {/* <!-- End Education 1 --> */}
  </section>
);
