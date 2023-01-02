import Input from "./Input";
import Section from "./Section";

const About = ({ aboutSection, aboutSectionHandler }) => {
  return (
    <Section sectionTitle="About">
      <Input
        labelText="First Name:"
        inputId="firstName"
        inputType="text"
        placeholder="Mark"
        inputValue={aboutSection.firstName}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="Last Name:"
        inputId="lastName"
        inputType="text"
        placeholder="Johnson"
        inputValue={aboutSection.lastName}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="Title:"
        inputId="jobTitle"
        inputType="text"
        placeholder="Senior Vim Addict"
        inputValue={aboutSection.jobTitle}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="E-mail:"
        inputId="mailAddress"
        inputType="email"
        placeholder="markjohnson@example.com"
        inputValue={aboutSection.mailAddress}
        inputHandler={aboutSectionHandler}
      />
    </Section>
  );
};

export default About;
