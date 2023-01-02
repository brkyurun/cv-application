import Input from "./Input";
import Section from "./Section";
import { AiOutlineUser } from "react-icons/ai";

const About = ({ aboutSection, aboutSectionHandler }) => {
  return (
    <Section sectionTitle="About" sectionIcon={<AiOutlineUser />}>
      <Input
        labelText="First Name:"
        inputId="firstName"
        name="firstName"
        inputType="text"
        placeholder="Mark"
        inputValue={aboutSection.firstName}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="Last Name:"
        inputId="lastName"
        name="lastName"
        inputType="text"
        placeholder="Johnson"
        inputValue={aboutSection.lastName}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="Title:"
        inputId="jobTitle"
        name="jobTitle"
        inputType="text"
        placeholder="Senior Vim Addict"
        inputValue={aboutSection.jobTitle}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="Address:"
        inputId="address"
        name="address"
        inputType="text"
        placeholder="London / England"
        inputValue={aboutSection.address}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="Phone:"
        inputId="phone"
        name="phone"
        inputType="tel"
        placeholder="+1 821-842-25-73"
        inputValue={aboutSection.phone}
        inputHandler={aboutSectionHandler}
      />
      <Input
        labelText="E-mail:"
        inputId="mailAddress"
        name="mailAddress"
        inputType="email"
        placeholder="markjohnson@example.com"
        inputValue={aboutSection.mailAddress}
        inputHandler={aboutSectionHandler}
      />
      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor="about">Cover Description:</label>
        <textarea
          className="resize-none rounded-md border py-1 px-2 outline-offset-2 placeholder:font-light placeholder:italic"
          placeholder="Make yourself shine, baby!"
          id="about"
          rows="4"
          value={aboutSection.about}
          onChange={aboutSectionHandler}
        ></textarea>
      </div>
    </Section>
  );
};

export default About;
