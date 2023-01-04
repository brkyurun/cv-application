import AboutPreview from "./AboutPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

const CVPreview = ({ aboutSection, educationSection, experienceSection }) => {
  return (
    <div className="sticky top-4 col-span-2 max-h-[100rem] min-h-[70rem] w-10/12 border-2 border-sky-700 bg-gray-50 px-16 text-center">
      <AboutPreview aboutSection={aboutSection} />
      <EducationPreview educationSection={educationSection} />
      <ExperiencePreview experienceSection={experienceSection} />
    </div>
  );
};

export default CVPreview;
