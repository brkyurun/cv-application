import Input from "./Input";
import Section from "./Section";
import { SlGraduation } from "react-icons/sl";

const Education = ({ experienceSection, experienceSectionHandler }) => {
  return (
    <Section sectionTitle="Education" sectionIcon={<SlGraduation />}>
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
