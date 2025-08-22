import { motion } from "framer-motion";
import { revealContainer, revealItem } from "../lib/animations";

export default function Resume() {
  const printNow = () => window.print();
  return (
    <motion.section
      className="container-main py-8 print:py-0"
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="print:hidden flex justify-end">
        <button onClick={printNow} className="btn-outline">Print Résumé</button>
      </div>

      <motion.div variants={revealItem} className="card mt-4 p-6 md:p-10 print:shadow-none print:border-0 print:rounded-none print:p-0 print:bg-white">
        <motion.header variants={revealItem} className="text-center border-b border-gray-200 dark:border-gray-700 pb-4">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Nzube Christian Nworah</h1>
          <p className="text-slate-700 dark:text-slate-300">Cybersecurity · DevOps · AI‑assisted IT Solutions</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Email: you@example.com · GitHub: github.com/yourhandle · LinkedIn: linkedin.com/in/yourhandle</p>
        </motion.header>

        <motion.section variants={revealItem} className="mt-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="mt-2 text-gray-800 dark:text-gray-200">
            <li className="leading-relaxed">
              <span className="font-medium">Ontario College Diploma, Computer Programming</span> — Conestoga College (Apr 2025), <em>with Distinction</em>
            </li>
          </ul>
        </motion.section>

        <motion.section variants={revealItem} className="mt-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">Capstone – Smart Business Solution (React, Node, Express, MongoDB)…</p>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}
