import { Experience } from "./Experience";
import { Heading } from "./Heading";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";

export const EducationSection = () => (
  <section className="col-span-3 mt-6" id="education">
    <Heading title="Education" />

    {/* <!-- Education 1 --> */}
    <div className="relative border-s border-gray-200 ml-4">
      <Experience
        icon={faGraduationCap}
        companyName="BE (Computer Science Engineer)"
        duration="2012 - 2016 (7.35 CGPA)"
        location="Kalasalingam Institude of Technology"
      />
      <Experience
        icon={faSchool}
        companyName="12th Grade"
        duration="2010 - 2012 (89.5%)"
        location="G.S. Hindu Higher Secondary School"
      />
    </div>
    {/* <!-- End Education 1 --> */}
  </section>
);
