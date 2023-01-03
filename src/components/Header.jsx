import { RiLightbulbLine } from "react-icons/ri";

const Header = ({ onClickLightbulb, isToggled }) => {
  const lightbulbClasses = isToggled
    ? "text-yellow-400 hover:text-white"
    : "text-white hover:text-yellow-400";
  return (
    <header className="relative bg-sky-500 py-4 text-center">
      <div
        className={`absolute left-8 top-7 isolate ${lightbulbClasses}`}
        title="Click to toggle dummy data!"
        onClick={onClickLightbulb}
      >
        <RiLightbulbLine size={36} />
      </div>
      <div>
        <h1 className="text-3xl uppercase text-white">
          Create-Curriculum-Vitae
        </h1>
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
      </div>
    </header>
  );
};

export default Header;
