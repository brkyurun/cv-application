const Education = ({ educationSection }) => {
  const listItems = educationSection.schoolAbout
    .split("\n")
    .map((str) => str.trim());

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
        <ul className="">
          {listItems.map((item) => {
            if (item === "") return;
            return (
              <li key={item} className="ml-6 list-disc">
                {item}
              </li>
            );
          })}
        </ul>
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
