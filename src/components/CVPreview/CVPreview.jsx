import AboutPreview from "./AboutPreview";

const CVPreview = ({ aboutSection, educationSection, experienceSection }) => {
  return (
    <div className="col-span-2 w-11/12 border-2 border-sky-700 bg-gray-50 px-16 text-center">
      <AboutPreview aboutSection={aboutSection} />
    </div>
  );
};

export default CVPreview;
