import { motion } from "framer-motion";
import AboutMe from "./AboutMe";

const Welcome = () => {
  return (
    <motion.div
      className="flex justify-center align-center p-10 mt-[5rem] mb-[5rem]"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <div className="flex flex-col min-h- justify-center align items-center">
        <h1 className="flex flex-col leading-tight sm:text-[5.5rem] text-[12vw] mb-[8vw] sm:mb-0 text-slate-800 font-extrabold relative z-10 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Desenvolvedor WEB
          </span>
          <span className="text-sky-100 sm:text-[1.6rem]">
            Eduardo Rodrigues
          </span>
        </h1>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-[100vh] pl-10 pr-10">
      <Welcome />
      <AboutMe />
    </div>
  );
}
