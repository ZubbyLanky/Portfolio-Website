import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Moon, Sun } from "lucide-react";


export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 inline-flex items-center gap-2 ${className}`}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {theme === "dark" ? (<><FaSun className="text-yellow-400" /><span>Light</span></>) : (<><FaMoon className="text-blue-500" /><span>Dark</span></>)}
    </button>
  );
}
