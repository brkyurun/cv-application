import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" bg-sky-800 py-6 text-center text-lg text-sky-50 transition-all duration-500 ease-out hover:bg-sky-500">
      <p>
        Made with <AiFillHeart fill="red" className="mx-auto inline" /> (and
        occasional tears) by{" "}
        <a
          href="https://github.com/brkyurun"
          className="hover:text-cyan-200 hover:underline hover:underline-offset-2"
        >
          @brkyurun
        </a>{" "}
        - Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
