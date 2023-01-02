import Header from "./components/Header";
import CVBuilder from "./components/CVBuilder";
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
    },
  ]);
  const [experienceSection, setExperienceSection] = useState([
    {
      jobTitle: "",
      companyName: "",
      companyLocation: "",
      startDate: "",
      endDate: "",
    },
  ]);

  function handleAboutSectionChange(e) {
    setAboutSection((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(e.target.name);
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
    const updatedExperiences = experienceSection.filter(
      (item, i) => i !== index
    );
    setExperienceSection(updatedExperiences);
  }

  return (
    <>
      <Header />
      <main className="p-8">
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
      </main>
    </>
  );
}

export default App;
