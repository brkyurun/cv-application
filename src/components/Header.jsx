const Header = () => {
  return (
    <header className="bg-sky-500 py-4 text-center">
      <h1 className="text-3xl uppercase text-white">Create-Curriculum-Vitae</h1>
      <p className="italic text-sky-100">
        Create a simple CV that you can blame yourself for using this app
        instead of{" "}
        <a
          href="https://flowcv.com/"
          className="font-bold underline underline-offset-2 transition-colors duration-150 hover:text-sky-300"
        >
          FlowCV
        </a>{" "}
        when you don't get the job!
      </p>
    </header>
  );
};

export default Header;
