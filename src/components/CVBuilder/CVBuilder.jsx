import About from "./About";
import EducationGroup from "./EducationGroup";
import ExperienceGroup from "./ExperienceGroup";

const CVBuilder = ({
  aboutSection,
  aboutSectionHandler,
  educationSection,
  educationSectionHandler,
  addEducation,
  deleteEducation,
  experienceSection,
  experienceSectionHandler,
  addExperience,
  deleteExperience,
}) => {
  return (
    <div className="container space-y-2">
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
      <ExperienceGroup
        experienceSection={experienceSection}
        experienceSectionHandler={experienceSectionHandler}
        onAdd={addExperience}
        onDelete={deleteExperience}
      />
    </div>
  );
};

export default CVBuilder;
