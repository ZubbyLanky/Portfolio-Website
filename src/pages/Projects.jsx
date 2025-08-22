import { motion } from "framer-motion";
import { revealContainer, revealItem } from "../lib/animations";

export default function Projects() {
  const projects = [
    { title: "Capstone – Smart Business Solution", desc: "Award‑winning app that automates sales & reporting workflows.", stack: ["React","Node","Express","MongoDB"], link: "#" },
    { title: "Dynamic Websites", desc: "Responsive SPAs with routing, forms and API integration.", stack: ["React (Vite)","Tailwind","Router"], link: "#" },
    { title: "Mobile Apps I & II", desc: "Cross‑platform auth, sync, push notifications.", stack: ["React Native","Firebase"], link: "#" },
    { title: "SQL Database Solutions", desc: "Schema design, normalization, indexing, performance tuning.", stack: ["PostgreSQL/SQL Server"], link: "#" },
  ];

  return (
    <motion.section
      className="container-main py-14 md:py-20"
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      <motion.h2 variants={revealItem} className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">Projects</motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.article key={p.title} variants={revealItem} className="card hover:shadow-lg transition">
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs bg-blue-100 text-blue-800
                 dark:bg-blue-900/40 dark:text-blue-200
                 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">{s}</span>
                ))}
              </div>
              {p.link && <a href={p.link} className="mt-5 inline-block text-sm font-medium
              text-blue-700 dark:text-blue-300 hover:underline">View repository →</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
