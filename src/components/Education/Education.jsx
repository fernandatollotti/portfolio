import { GraduationCap, Code } from "@phosphor-icons/react";
import EducationSection from "./EducationSection";
import { educationData } from "../../data/educationData";
import "./Education.css";

function Education() {
  return (
    <div className="resume__education">
      <EducationSection title="Educação" icon={GraduationCap} category="course" data={educationData} />
      <EducationSection title="Bootcamps" icon={Code} category="bootcamp" data={educationData} />
    </div>
  )
}

export default Education;