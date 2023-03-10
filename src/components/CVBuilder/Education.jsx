import Input from "./Input";
import { SlGraduation } from "react-icons/sl";
import SectionTitle from "./SectionTitle";

const Education = ({
  educationSection,
  educationSectionHandler,
  onAdd,
  onDelete,
  indexNumber,
}) => {
  return (
    <>
      <SectionTitle
        icon={<SlGraduation />}
        title={`Education ${indexNumber + 1}`}
      />
      <Input
        labelText="Degree:"
        inputId={`schoolDegree-${indexNumber + 1}`}
        name="schoolDegree"
        inputType="text"
        placeholder="B.A. / B.Sc. / Bachelor's"
        inputValue={educationSection.schoolDegree}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Subject:"
        inputId={`schoolSubject-${indexNumber + 1}`}
        name="schoolSubject"
        inputType="text"
        placeholder="Computer Science"
        inputValue={educationSection.schoolSubject}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="School:"
        inputId={`schoolName-${indexNumber + 1}`}
        name="schoolName"
        inputType="text"
        placeholder="Cambridge University"
        inputValue={educationSection.schoolName}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Location:"
        inputId={`schoolLocation-${indexNumber + 1}`}
        name="schoolLocation"
        inputType="text"
        placeholder="London / England"
        inputValue={educationSection.schoolLocation}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Year Started:"
        inputId={`schoolStart-${indexNumber + 1}`}
        name="schoolStart"
        inputType="text"
        placeholder="2017"
        inputValue={educationSection.schoolStart}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Year Graduated:"
        inputId={`schoolGraduate-${indexNumber + 1}`}
        name="schoolGraduate"
        inputType="text"
        placeholder="lol never"
        inputValue={educationSection.schoolGraduate}
        inputHandler={(e) => educationSectionHandler(e, indexNumber)}
      />
      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor="schoolAbout">School Description:</label>
        <textarea
          className="resize-none rounded-md border py-1 px-2 outline-offset-2 placeholder:font-light placeholder:italic"
          placeholder={`Start each sentence on a new line \nlike this to create a nice list!`}
          id={`schoolAbout-${indexNumber + 1}`}
          name="schoolAbout"
          rows="4"
          value={educationSection.schoolAbout}
          onChange={(e) => educationSectionHandler(e, indexNumber)}
        ></textarea>
      </div>
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
          onClick={() => onDelete(indexNumber)}
          className="text-bold text-md w-28 rounded-md bg-red-500 py-2 transition-colors duration-100 ease-out hover:scale-105 hover:bg-red-400"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Education;
