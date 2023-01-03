import Education from "./Education";

const EducationPreview = ({ educationSection }) => {
  if (!educationSection) return;
  return (
    <div className="mt-6 text-left">
      {Object.values(educationSection[0]).some((item) => item !== "") && (
        <h2 className="border-b-4 border-sky-700 text-2xl">Education</h2>
      )}
      {educationSection.map((education) => (
        <Education educationSection={education} />
      ))}
    </div>
  );
};

export default EducationPreview;
