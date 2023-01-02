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
  const [experienceSection, setExperienceSection] = useState([
    {
      school: "",
    },
  ]);

  function handleAboutSectionChange(e) {
    setAboutSection((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }

  return (
    <>
      <Header />
      <main className="p-8">
        <CVBuilder
          aboutSection={aboutSection}
          aboutSectionHandler={handleAboutSectionChange}
        />
      </main>
    </>
  );
}

export default App;
