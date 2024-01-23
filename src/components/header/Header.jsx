import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Dropdown from "./Dropdown";

const navElements = [
  { value: "Sobre", delay: 0.2 },
  { value: "Tecnologias", delay: 0.4 },
  { value: "Projetos", delay: 0.6 },
];

const icons = [
  {
    icon: <FaGithub />,
    color: "#7e22ce",
    link: "https://github.com/BORRAACH",
  },
  {
    icon: <FaLinkedin />,
    color: "#0077B5",
    link: "https://linkedin.com/in/eduardo-rodrigues-de-paula-73474b2a4/",
  },
];

function NavListItems() {
  return navElements.map((item, index) => {
    return (
      <motion.li
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: item.delay,
          duration: 1,
        }}
        className={`transition ease-in duration-200 hover:text-purple-300`}
      >
        <a href="#">{item.value}</a>
      </motion.li>
    );
  });
}

function ListIcons() {
  return icons.map((item, index) => {
    return (
      <li key={index}>
        <a
          href={item.link}
          target="_blanck"
          className={`text-sky-100 text-[1.5rem] transition ease-in duration-200 hover:text-purple-300`}
        >
          {item.icon}
        </a>
      </li>
    );
  });
}

export default function Header() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 0.4, duration: 1 }}
      className="p-8 flex justify-between"
    >
      <div>
        <ul className="flex gap-8 items-center text-sky-100">
          <NavListItems />
          <Dropdown title="Options" delay={0.8} />
        </ul>
      </div>
      <div className="icons">
        <ul className="flex gap-8">
          <ListIcons />
        </ul>
      </div>
    </motion.div>
  );
}
