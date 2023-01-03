const Section = ({ children }) => {
  return (
    <section className="grid grid-cols-2 gap-x-8 gap-y-4 overflow-auto rounded-lg border-2 border-sky-700 bg-sky-50 p-6">
      {children}
    </section>
  );
};

export default Section;
