import Education from "./Education";

const EducationPreview = ({ educationSection }) => {
  if (!educationSection) return;
  return (
    Object.values(educationSection[0]).some((item) => item !== "") && (
      <div className="mt-6 text-left">
        <h2 className="border-b-4 border-sky-700 text-2xl">Education</h2>
        {educationSection.map((education, index) => (
          <Education key={index} educationSection={education} />
        ))}
      </div>
    )
  );
};

export default EducationPreview;
