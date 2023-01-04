import Experience from "./Experience";

const ExperiencePreview = ({ experienceSection }) => {
  if (!experienceSection) return;
  return (
    Object.values(experienceSection[0]).some((item) => item !== "") && (
      <div className="mt-6 text-left">
        <h2 className="border-b-4 border-sky-700 text-2xl">Experience</h2>
        {experienceSection.map((experience, index) => (
          <Experience key={index} experienceSection={experience} />
        ))}
      </div>
    )
  );
};

export default ExperiencePreview;
