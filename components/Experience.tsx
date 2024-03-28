import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

type ExperienceProps = {
  companyName: string;
  location?: string;
  isPresent?: boolean;
  duration?: string;
  children?: ReactNode;
  icon?: IconDefinition;
};

export const Experience = ({
  companyName,
  isPresent,
  duration,
  children,
  location,
  icon,
}: ExperienceProps) => {
  return (
    <div className="mb-8 ms-8">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-700 rounded-full -start-4 ring-8 ring-white ">
        <FontAwesomeIcon
          icon={icon ?? faSuitcase}
          className="text-white text-sm"
        />
      </span>
      <h3 className="flex items-center mb-1 font-semibold text-purple-900">
        {companyName}
        {isPresent && (
          <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ml-2">
            Present
          </span>
        )}
      </h3>
      {duration && (
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
          {duration}
        </time>
      )}
      {location && (
        <div className="block mb-2 text-sm font-normal leading-none text-gray-400">
          {location}
        </div>
      )}
      <div className="text-sm">{children}</div>
    </div>
  );
};
