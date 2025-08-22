import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../components/ThemeToggle"; // correct relative path

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const base = "px-3 py-2 rounded-lg transition-colors text-sm md:text-base";
const inactive = "text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300";
const active = "text-blue-800 dark:text-blue-200 font-semibold bg-blue-100 dark:bg-blue-900/40";

  const Item = ({ to, label }) => (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="bg-white/90 dark:bg-gray-900/80 backdrop-blur border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg md:text-xl font-extrabold tracking-tight">
            Nzube Christian Nworah
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Item to="/" label="Home" />
            <Item to="/about" label="About" />
            <Item to="/projects" label="Projects" />
            <Item to="/skills" label="Skills" />
            <Item to="/contact" label="Contact" />
            <Item to="/resume" label="Résumé" />
            {/* <ThemeToggle /> */}
          </div>

          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <HiX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800">
          <div className="container-main py-3 flex flex-col gap-2">
            <Item to="/" label="Home" />
            <Item to="/about" label="About" />
            <Item to="/projects" label="Projects" />
            <Item to="/skills" label="Skills" />
            <Item to="/contact" label="Contact" />
            <Item to="/resume" label="Résumé" />
            <ThemeToggle className="mt-2" />
          </div>
        </div>
      )}
    </nav>
  );
}
