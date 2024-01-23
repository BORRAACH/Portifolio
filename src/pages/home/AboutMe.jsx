import { FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import figma from "../../assets/img/svg/figma_logo.svg";
import { BsFiletypeSql } from "react-icons/bs";
import { motion } from "framer-motion";

function FigmaLogo({ className }) {
  return <img src={figma} className={className} />;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 1, delay: 1.4 } },
};

const itemVariants = {
  hidden: { width: 0, p: 0 },
  visible: { width: "100%", p: 10, transition: { delay: 1.4 } },
};

const pVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function AboutMe() {
  return (
    <div className="flex justify-center align-center">
      <div className="max-w-[60vw]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row gap-5 max-h[20rem]"
        >
          <motion.div
            variants={itemVariants}
            className="min-h-[20rem] bg-neutral-700 p-10 rounded-md"
          ></motion.div>
          <motion.div
            variants={itemVariants}
            className="min-h-[20rem] bg-neutral-800 p-10 rounded-md"
          >
            <motion.p
              variants={pVariants}
              className="text-sky-100 text-xl text-left break-all"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sed
              vel minima ducimus nulla nisi cupiditate tempore cumque? Velit,
              odio cupiditate similique possimus perferendis iusto aspernatur
              aliquam. Delectus, facilis nisi.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex mt-5 flex-row gap-5"
        >
          <motion.div
            variants={itemVariants}
            className="min-h-[20rem] bg-neutral-700 p-10 rounded-md"
          ></motion.div>
          <motion.div
            variants={itemVariants}
            className="min-h-[20rem] bg-neutral-700 p-10 rounded-md"
          >
            <motion.div variants={itemVariants} className="flex gap-5">
              <FaReact className="text-sky-600 text-6xl shadow-md shadow-neutral-900 bg-neutral-900 p-2 rounded-md" />
              <IoLogoJavascript className="text-black text-6xl shadow-md shadow-neutral-900 bg-yellow-400 p-3 rounded-md" />
              <IoLogoHtml5 className="text-orange-700 text-6xl shadow-md shadow-neutral-900 bg-neutral-800 p-2 rounded-md" />
              <IoLogoCss3 className="text-blue-500 text-6xl shadow-md shadow-neutral-900 bg-neutral-800 p-2 rounded-md" />
              <FigmaLogo className="h-[3.75rem] w-[3.75rem] line-height-1 shadow-md shadow-neutral-900 bg-neutral-800 p-2 rounded-md" />
              <FaJava className="text-red-500 text-6xl bg-neutral-800 shadow-md shadow-neutral-900 p-2 rounded-md" />
              <FaGitAlt className="text-orange-500 text-6xl shadow-md shadow-neutral-900 bg-neutral-800 p-2 rounded-md" />
              <BsFiletypeSql className="text-white text-6xl bg-neutral-800 shadow-md shadow-neutral-900 p-2 rounded-md" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
