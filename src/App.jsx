import Header from "./components/Header";
import CVBuilder from "./components/CVBuilder";
import CVPreview from "./components/CVPreview";
import Footer from "./components/Footer";
import {
  aboutSectionDummy,
  educationSectionDummy,
  experienceSectionDummy,
  aboutSectionEmpty,
  educationSectionEmpty,
  experienceSectionEmpty,
} from "./dummyData";
import { useState } from "react";

function App() {
  const [aboutSection, setAboutSection] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    mailAddress: "",
    about: "",
  });
  const [educationSection, setEducationSection] = useState([
    {
      schoolName: "",
      schoolLocation: "",
      schoolDegree: "",
      schoolSubject: "",
      schoolStart: "",
      schoolGraduate: "",
      schoolAbout: "",
    },
  ]);
  const [experienceSection, setExperienceSection] = useState([
    {
      jobTitle: "",
      companyName: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
      aboutJob: "",
    },
  ]);
  const [isLightbulbToggled, setIsLightbulbToggled] = useState(false);

  function handleAboutSectionChange(e) {
    setAboutSection((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleEducationSectionChange(e, indexNumber) {
    const { name, value } = e.target;
    const updatedEducations = [...educationSection];
    updatedEducations[indexNumber][name] = value;
    setEducationSection(updatedEducations);
  }

  function handleEducationSectionAdd() {
    const newEducation = {
      schoolName: "",
      schoolLocation: "",
      schoolDegree: "",
      schoolSubject: "",
      schoolStart: "",
      schoolGraduate: "",
      schoolAbout: "",
    };

    setEducationSection([...educationSection, newEducation]);
  }

  function handleEducationSectionDelete(index) {
    if (educationSection.length === 1) {
      alert("You must have studied somewhere :/");
      return;
    }
    const updatedEducation = educationSection.filter((item, i) => i !== index);
    setEducationSection(updatedEducation);
  }

  function handleExperienceSectionChange(e, indexNumber) {
    const { name, value } = e.target;
    const updatedExperiences = [...experienceSection];
    updatedExperiences[indexNumber][name] = value;
    setExperienceSection(updatedExperiences);
  }

  function handleExperienceSectionAdd() {
    const newExperience = {
      jobTitle: "",
      companyName: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
      aboutJob: "",
    };

    setExperienceSection([...experienceSection, newExperience]);
  }

  function handleExperienceSectionDelete(index) {
    if (experienceSection.length === 1) {
      alert("If you don't have any experience, please leave this area blank.");
      return;
    }
    const updatedExperiences = experienceSection.filter(
      (item, i) => i !== index
    );
    setExperienceSection(updatedExperiences);
  }

  function handleLightbulbClick() {
    if (isLightbulbToggled) {
      setIsLightbulbToggled((prevVal) => !prevVal);
      setAboutSection(aboutSectionEmpty);
      setEducationSection(educationSectionEmpty);
      setExperienceSection(experienceSectionEmpty);
    } else {
      setIsLightbulbToggled((prevVal) => !prevVal);
      setAboutSection(aboutSectionDummy);
      setEducationSection(educationSectionDummy);
      setExperienceSection(experienceSectionDummy);
    }
  }

  return (
    <>
      <Header
        onClickLightbulb={handleLightbulbClick}
        isToggled={isLightbulbToggled}
      />
      <main className="relative grid grid-cols-3 justify-items-end py-8 px-16">
        <CVBuilder
          aboutSection={aboutSection}
          aboutSectionHandler={handleAboutSectionChange}
          educationSection={educationSection}
          educationSectionHandler={handleEducationSectionChange}
          addEducation={handleEducationSectionAdd}
          deleteEducation={handleEducationSectionDelete}
          experienceSection={experienceSection}
          experienceSectionHandler={handleExperienceSectionChange}
          addExperience={handleExperienceSectionAdd}
          deleteExperience={handleExperienceSectionDelete}
        />
        <CVPreview
          aboutSection={aboutSection}
          educationSection={educationSection}
          experienceSection={experienceSection}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
