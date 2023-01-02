import About from "./About";
import Education from "./Education";

const CVBuilder = ({ aboutSection, aboutSectionHandler }) => {
  return (
    <div className="space-y-2">
      <About
        aboutSection={aboutSection}
        aboutSectionHandler={aboutSectionHandler}
      />
      <Education />
    </div>
  );
};

export default CVBuilder;
