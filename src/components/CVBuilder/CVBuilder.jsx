import About from "./About";
import EducationGroup from "./EducationGroup";

const CVBuilder = ({
  aboutSection,
  aboutSectionHandler,
  educationSection,
  educationSectionHandler,
  addEducation,
  deleteEducation,
}) => {
  return (
    <div className="space-y-2">
      <About
        aboutSection={aboutSection}
        aboutSectionHandler={aboutSectionHandler}
      />
      <EducationGroup
        educationSection={educationSection}
        educationSectionHandler={educationSectionHandler}
        onAdd={addEducation}
        onDelete={deleteEducation}
      />
    </div>
  );
};

export default CVBuilder;
