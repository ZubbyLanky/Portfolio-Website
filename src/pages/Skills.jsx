import { motion } from "framer-motion";
import { revealContainer, revealItem } from "../lib/animations";

export default function Skills() {
  const groups = {
    "Languages & Frameworks": ["JavaScript","TypeScript","React","React Native","Node.js","Express"],
    "Data & Cloud": ["SQL","MongoDB","PostgreSQL","Azure"],
    "DevOps & Quality": ["Git & GitHub","CI/CD","Docker","SQA"],
    "Focus Areas": ["Cybersecurity Foundations","DevOps + AI Assistance"],
  };

  return (
    <motion.section
      className="container-main py-14 md:py-20"
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={revealItem} className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">Skills</motion.h2>
      <div className="card p-6 space-y-9">
        {Object.entries(groups).map(([title, items]) => (
          <motion.div key={title} variants={revealItem} className="card p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
