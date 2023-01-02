const Section = ({ sectionTitle, sectionIcon, children }) => {
  return (
    <section className="grid w-1/3 grid-cols-2 gap-x-8 gap-y-4 overflow-auto rounded-lg border-2 border-sky-700 bg-sky-50 p-6">
      <h2 className="col-span-2 flex items-center gap-2 border-b-2 border-sky-800/50 text-2xl">
        {sectionIcon} {sectionTitle}
      </h2>
      {children}
    </section>
  );
};

export default Section;
