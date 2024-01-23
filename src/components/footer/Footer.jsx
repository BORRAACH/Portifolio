import { forwardRef } from "react";
import { motion } from "framer-motion";

function BlocksOfInformations() {
  return (
    <div className="p-5 flex gap-8">
      <ul className="text-neutral-400 flex flex-col gap-6 p-10">
        <li>Eduardo Rodrigues de Paula</li>
        <li>eduardorpaula254@gmail.com</li>
        <li>(12) 98809-4004</li>
      </ul>
    </div>
  );
}

const Footer = forwardRef(({ isInView }, ref) => {
  return (
    <div ref={ref} className="pt-10">
      <motion.div
        className={"bg-neutral-900"}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <BlocksOfInformations />
      </motion.div>
    </div>
  );
});

Footer.displayName = "footer";

export default Footer;
