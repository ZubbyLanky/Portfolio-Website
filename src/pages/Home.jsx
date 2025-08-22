import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa6";
import { revealContainer, revealItem } from "../lib/animations";




export default function Home() {
  return (
    <motion.section
      className="relative overflow-hidden"
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* background accent */}
      <div className="absolute inset-x-0 -top-24 -z-10 h-72 bg-gradient-to-r from-blue-100 via-indigo-100 to-transparent dark:from-blue-950/40 dark:via-indigo-950/40 blur-2xl opacity-90" />

      <div className="container-main py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE (text) */}
        <div>
          <motion.p variants={revealItem} className="text-sm uppercase tracking-wider text-blue-700 font-semibold">
            Portfolio
          </motion.p>

          <motion.h1
            variants={revealItem}
            className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-slate-100"
          >
            Nzube Christian Nworah
          </motion.h1>

          <motion.p
            variants={revealItem}
            className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl"
          >
            Aspiring <span className="font-semibold">Cybersecurity Expert</span> ·{" "}
            <span className="font-semibold">DevOps Enthusiast</span> · AI-Driven IT Solutions Developer
          </motion.p>

          <motion.div variants={revealItem} className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/resume" className="btn-outline">View Résumé</Link>
          </motion.div>

          <motion.div variants={revealItem} className="mt-10 flex flex-wrap gap-2">
            {["React", "Vite", "Tailwind", "Node.js", "Azure"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE (image) */}
        <motion.div
          variants={revealItem}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/profile.PNG" // <-- replace with your image in /public folder
            alt="Nzube Christian Nworah Image"
            className="w-72 h-150 md:w-[420px] rounded-2xl shadow-soft object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}