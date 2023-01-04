const Experience = ({ experienceSection }) => {
  const listItems = experienceSection.aboutJob
    .split("\n")
    .map((str) => str.trim());

  return (
    <div className="mt-4 flex justify-between align-top">
      <div>
        <h3 className="text-lg font-bold">
          {experienceSection.companyName}
          <p className="mb-1 text-base font-normal italic">
            {experienceSection.jobTitle}
          </p>
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
          {experienceSection.startDate} {experienceSection.startDate && "-"}{" "}
          {experienceSection.endDate}
        </p>
        <p className="text-right">{experienceSection.companyLocation}</p>
      </div>
    </div>
  );
};

export default Experience;
