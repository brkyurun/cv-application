import Input from "./Input";
import Section from "./Section";
import { SlGraduation } from "react-icons/sl";

const Education = ({
  educationSection,
  educationSectionHandler,
  onAdd,
  onDelete,
  indexNumber,
}) => {
  return (
    <Section
      sectionTitle={`Education ${indexNumber + 1}`}
      sectionIcon={<SlGraduation />}
    >
      <Input
        labelText="School:"
        inputId={`schoolName`}
        inputType="text"
        placeholder="Cambridge University"
        inputValue={educationSection.schoolName}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Location:"
        inputId={`schoolLocation`}
        inputType="text"
        placeholder="London / England"
        inputValue={educationSection.schoolLocation}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Degree:"
        inputId={`schoolDegree`}
        inputType="text"
        placeholder="B.A. / B.Sc. / Bachelor's"
        inputValue={educationSection.schoolDegree}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Subject:"
        inputId={`schoolSubject`}
        inputType="text"
        placeholder="Computer Science"
        inputValue={educationSection.schoolSubject}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Year Started:"
        inputId={`schoolStart`}
        inputType="text"
        placeholder="2017"
        inputValue={educationSection.schoolStart}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Year Graduated:"
        inputId={`schoolGraduate`}
        inputType="text"
        placeholder="lol never"
        inputValue={educationSection.schoolGraduate}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <div className="col-span-2 flex items-center justify-around">
        <button
          type="button"
          onClick={onAdd}
          className="text-bold text-md w-28 rounded-md bg-green-500 py-2 transition-colors duration-100 ease-out hover:scale-105 hover:bg-green-400"
        >
          Add
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="text-bold text-md w-28 rounded-md bg-red-500 py-2 transition-colors duration-100 ease-out hover:scale-105 hover:bg-red-400"
        >
          Delete
        </button>
      </div>
    </Section>
  );
};

export default Education;
