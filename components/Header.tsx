import Image from "next/image";
import ProfileImage from "@/public/images/AjithNew-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Header = () => (
  <div className="flex bg-purple-700 rounded-b-lg border-b-2 border-white flex-1 p-4">
    <div className="flex">
      <div className="mr-5">
        <div className="w-28 h-28 rounded-xl shadow-2xl shadow-white relative overflow-hidden">
          <Image
            alt="profile image"
            src={ProfileImage}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h1 className="print:text-3xl lg:text-3xl md:text-xl mr-auto text-xl uppercase font-semibold">
          Ajith kumar Susai A
        </h1>
        <div className="text-lg">Specialist Sofware Engineer</div>
        <div className="text-xs">
          Web Development | Next js | React js | Angular
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-3 items-end flex-1 text-white text-sm">
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
