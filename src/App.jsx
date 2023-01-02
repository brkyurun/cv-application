import Header from "./components/Header";
import CVBuilder from "./components/CVBuilder";
import { useState } from "react";

function App() {
  const [aboutSection, setAboutSection] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    mailAddress: "",
  });

  function handleAboutSectionChange(e) {
    setAboutSection((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
    console.log(aboutSection);
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
