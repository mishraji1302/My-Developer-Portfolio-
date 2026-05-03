import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.2,
          },
        },
      }}
      className={`max-w-6xl mx-auto px-6 py-24 sm:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
