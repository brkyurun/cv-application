import Section from "./Section";
import Experience from "./Experience";

const ExperienceGroup = ({
  experienceSection,
  experienceSectionHandler,
  onAdd,
  onDelete,
}) => {
  return (
    <Section>
      {experienceSection.map((experienceItem, index) => (
        <Experience
          key={index}
          experienceSection={experienceItem}
          experienceSectionHandler={experienceSectionHandler}
          indexNumber={index}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      ))}
    </Section>
  );
};

export default ExperienceGroup;
