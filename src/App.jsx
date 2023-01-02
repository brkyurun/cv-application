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

  function handleAboutSectionChange(e) {
    setAboutSection((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }

  function handleEducationSectionChange(e, indexNumber) {
    // TO DO //
    // 1. Filter the state array to remove the currently changing object
    // 2. Update the object
    // 3. Create a new state array containing the previous unchanged objects as well and update state

    const educationToBeChanged = educationSection[indexNumber];
    const newEducation = {
      ...educationSection[indexNumber],
      [e.target.id]: e.target.value,
    };
    const newState = educationSection.map((educationItem) =>
      educationItem[e.target.id] === newEducation[e.target.id]
        ? newEducation
        : educationItem
    );
    setEducationSection((prevState) => newState);
    console.log("NewEducation", newEducation);
    console.log("newState", newState);
    console.log(e.target.id);
    console.log(indexNumber);
  }

  function handleEducationSectionAdd(e) {
    const newEducation = {
      schoolName: "",
      schoolLocation: "",
      schoolDegree: "",
      schoolSubject: "",
      schoolStart: "",
      schoolGraduate: "",
    };

    setEducationSection(educationSection.concat(newEducation));
  }

  function handleEducationSectionDelete(e) {
    // TO DO //
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
        />
      </main>
    </>
  );
}

export default App;
