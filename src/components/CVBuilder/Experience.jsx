import Input from "./Input";
import { MdWorkOutline } from "react-icons/md";
import SectionTitle from "./SectionTitle";

const Experience = ({
  experienceSection,
  experienceSectionHandler,
  onAdd,
  onDelete,
  indexNumber,
}) => {
  return (
    <>
      <SectionTitle
        icon={<MdWorkOutline />}
        title={`Experience ${indexNumber + 1}`}
      />
      <Input
        labelText="Job Title:"
        inputId={`jobTitle-${indexNumber + 1}`}
        name="jobTitle"
        inputType="text"
        placeholder="Junior Copy-Paste Enthusiast"
        inputValue={experienceSection.schoolName}
        inputHandler={(e) => experienceSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Company Name:"
        inputId={`companyName-${indexNumber + 1}`}
        name="companyName"
        inputType="text"
        placeholder="Googlesoftflix"
        inputValue={experienceSection.schoolLocation}
        inputHandler={(e) => experienceSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Company Location:"
        inputId={`companyLocation-${indexNumber + 1}`}
        name="companyLocation"
        inputType="text"
        placeholder="London"
        inputValue={experienceSection.schoolDegree}
        inputHandler={(e) => experienceSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="Start Date:"
        inputId={`startDate-${indexNumber + 1}`}
        name="startDate"
        inputType="text"
        placeholder="05/21 or May 2021"
        inputValue={experienceSection.schoolSubject}
        inputHandler={(e) => experienceSectionHandler(e, indexNumber)}
      />
      <Input
        labelText="End Date:"
        inputId={`endDate-${indexNumber + 1}`}
        name="endDate"
        inputType="text"
        placeholder="05/22 or May 2022 or Current"
        inputValue={experienceSection.schoolStart}
        inputHandler={(e) => experienceSectionHandler(e, indexNumber)}
      />
      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor={`aboutJob-${indexNumber}`}>Job Description:</label>
        <textarea
          className="resize-none rounded-md border py-1 px-2 outline-offset-2 placeholder:font-light placeholder:italic"
          placeholder="Make yourself shine, baby!"
          id={`aboutJob-${indexNumber}`}
          name="aboutJob"
          rows="4"
          value={experienceSection.aboutJob}
          onChange={(e) => experienceSectionHandler(e, indexNumber)}
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

export default Experience;
