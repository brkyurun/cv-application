const SectionTitle = ({ icon, title }) => {
  return (
    <h2 className="col-span-2 flex items-center gap-2 border-b-2 border-sky-800/50 text-2xl">
      {icon} {title}
    </h2>
  );
};

export default SectionTitle;
