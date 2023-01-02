import Input from "./Input";
import Section from "./Section";

const Education = ({ experienceSection, experienceSectionHandler }) => {
  return (
    <Section sectionTitle="Education">
      <Input
        labelText="School:"
        inputId={`school-${Math.floor(Math.random() * 100)}`}
        inputType="text"
        placeholder="Cambridge University"
      />
    </Section>
  );
};

export default Education;
