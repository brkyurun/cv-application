const CVPreview = ({ aboutSection, educationSection, experienceSection }) => {
  return (
    <div className="col-span-2 w-11/12 border-2 border-sky-800 bg-gray-50">
      <p className="text-center text-3xl font-bold">{`${aboutSection.firstName} ${aboutSection.lastName}`}</p>
    </div>
  );
};

export default CVPreview;
