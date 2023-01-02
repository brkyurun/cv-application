import Education from "./Education";
import Section from "./Section";

const EducationGroup = ({
  educationSection,
  educationSectionHandler,
  onAdd,
  onDelete,
}) => {
  return (
    <Section>
      {educationSection.map((educationItem, index) => (
        <Education
          key={index}
          educationSection={educationItem}
          educationSectionHandler={educationSectionHandler}
          indexNumber={index}
          onAdd={onAdd}
          onDelete={onDelete}
        />
      ))}
    </Section>
  );
};

export default EducationGroup;
