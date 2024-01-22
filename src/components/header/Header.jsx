import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navElements = [
  { value: "Example", x: -10, delay: 0.2 },
  { value: "Example", x: -20, delay: 0.4 },
  { value: "Example", x: -30, delay: 0.6 },
];

const icons = [
  { icon: <FaGithub />, link: "https://github.com/BORRAACH" },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/eduardo-rodrigues-de-paula-73474b2a4/",
  },
];

const NavListItems = () => {
  return navElements.map((value, index) => {
    return (
      <motion.li
        key={index}
        initial={{ x: value.x, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: value.delay,
          duration: 1,
        }}
        className="transition ease-in duration-200 hover:text-sky-400"
      >
        <a href="#" className="hover:scale-[1.2]">
          {value.value}
        </a>
      </motion.li>
    );
  });
};

const ListIcons = () => {
  return icons.map((item, index) => {
    return (
      <li key={index}>
        <a
          href={item.link}
          target="_blanck"
          className="text-sky-100 text-[1.5rem] transition ease-in duration-200 hover:text-[#4078c0]"
        >
          {item.icon}
        </a>
      </li>
    );
  });
};

export default function Header() {
  return (
    <div className="p-5 flex justify-between">
      <div>
        <ul className="flex gap-8 text-sky-100">
          <NavListItems />
        </ul>
      </div>
      <div className="icons">
        <ul className="flex gap-8">
          <ListIcons />
        </ul>
      </div>
    </div>
  );
}
