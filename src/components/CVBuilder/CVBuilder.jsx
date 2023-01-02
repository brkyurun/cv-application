import About from "./About";

const CVBuilder = ({ aboutSection, aboutSectionHandler }) => {
  return (
    <div className="">
      <About
        aboutSection={aboutSection}
        aboutSectionHandler={aboutSectionHandler}
      />
    </div>
  );
};

export default CVBuilder;
