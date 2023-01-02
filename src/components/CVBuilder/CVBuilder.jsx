import About from "./About";
import Education from "./Education";

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
      {educationSection.map((educationPart, index) => {
        return (
          <Education
            key={index}
            indexNumber={index}
            educationSection={educationPart}
            educationSectionHandler={educationSectionHandler}
            onAdd={addEducation}
            onDelete={deleteEducation}
          />
        );
      })}
    </div>
  );
};

export default CVBuilder;
