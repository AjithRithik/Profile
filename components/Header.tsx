import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Header = () => (
  <div className="flex-col flex md:flex-row bg-purple-700 rounded-b-lg border-b-2 border-white flex-1 p-4 gap-8">
    <div className="flex">
      <div className="flex flex-col gap-2 text-white">
        <h1 className="print:text-3xl lg:text-3xl md:text-xl mr-auto text-xl uppercase font-semibold">
          Ajith kumar Susai A
        </h1>
        <div className="text-lg">Specialist Sofware Engineer</div>
        <div className="text-sm">
          Angular | React js | Next js | Node js | TypeScript | Web Development
        </div>
        <Link
          className="text-sm underline"
          href={"https://ak-ajith-portfolio.vercel.app/"}
          target="_blank"
        >
          https://ak-ajith-portfolio.vercel.app/
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-3 items-start md:items-end flex-1 text-white text-sm">
      <a
        href="mailto:official.ajith171995@gmail.com"
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Official.ajith171995@gmail.com</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ajithkumaroffical"
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>linkedin.com/in/ajithkumaroffical</span>
      </a>
      <a
        href="https://github.com/AjithRithik"
        className="flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span>github.com/AjithRithik</span>
      </a>
      <a href="tel:+918754789957" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faPhone} />
        <span>+91 875 478 9957</span>
      </a>
    </div>
  </div>
);
