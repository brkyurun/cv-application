const Education = ({ educationSection }) => {
  return (
    <div className="mt-4 flex justify-between align-top">
      <div>
        <h3 className="text-lg font-bold">
          {educationSection.schoolDegree} {educationSection.schoolSubject}{" "}
          {educationSection.schoolName && ","}
          <span className="ml-2 text-lg font-normal italic">
            {educationSection.schoolName}
          </span>
        </h3>
      </div>
      <div>
        <p>
          {educationSection.schoolStart} {educationSection.schoolStart && "-"}{" "}
          {educationSection.schoolGraduate}
        </p>
        <p>{educationSection.schoolLocation}</p>
      </div>
    </div>
  );
};

export default Education;
