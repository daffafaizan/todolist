import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100, transition: { duration: 3 } },
};

function AnimatedPage({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedPage;
