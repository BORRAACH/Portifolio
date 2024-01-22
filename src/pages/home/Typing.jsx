import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TypingAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 },
    });
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={controls}>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        T
      </motion.span>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        e
      </motion.span>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        x
      </motion.span>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        t
      </motion.span>
    </motion.div>
  );
};

export default TypingAnimation;
