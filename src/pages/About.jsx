import { motion } from "framer-motion";
import { revealContainer, revealItem } from "../lib/animations";

export default function About() {
  return (
    <motion.section
      className="container-main py-14 md:py-20"
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      <motion.h2 variants={revealItem} className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">About</motion.h2>
      <motion.p variants={revealItem} className="mb-4 text-slate-700 dark:text-slate-300">
        Ontario College Diploma in Computer Programming (Conestoga College, April 2025) with Distinction…
      </motion.p>
      <motion.ul variants={revealItem} className="list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-1">
        <li>Strong foundation in web, mobile, SQL, systems analysis, and SQA.</li>
        <li>Capstone project award and high academic standing.</li>
      </motion.ul>
    </motion.section>
  );
}
