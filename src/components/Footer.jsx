import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-slate-200 dark:border-slate-800 mt-10">
      <div className="container-main flex justify-center gap-6 text-gray-700 dark:text-gray-300">
        <a href="mailto:nworahchristiannzube.com" aria-label="Email" className="hover:text-blue-700 dark:hover:text-blue-300">
          <FaEnvelope size={22} />
        </a>
        <a href="https://github.com/ZubbyLanky" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-blue-700 dark:hover:text-blue-300">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/nworahchrisnzube/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-300">
          <FaLinkedin size={22} />
        </a>
        <a href="https://www.youtube.com/@Iam_Nzube/videos" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-red-600 dark:hover:text-red-400">
          <FaYoutube size={22} />
        </a>
      </div>
    </footer>
  );
}
