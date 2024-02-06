import { motion } from "framer-motion";

export default function MovingParagraph({ children, className, variants }) {
  const paragraphVariants = {
    hidden: {
      transition: {
        when: "beforeChildren",
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.1,
        when: "afterChildren",
      },
    },
  };
  return (
    <motion.section className="">
      <motion.p
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        className={className}
      >
        {children.split(" ").map((word) => (
          <>
            <motion.span key={crypto.randomUUID()} className="inline-block">
              {word.split("").map((letter) => (
                <motion.span
                  key={crypto.randomUUID()}
                  variants={variants}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>{" "}
          </>
        ))}
      </motion.p>
    </motion.section>
  );
}
