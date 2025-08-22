import { useState } from "react";
import { motion } from "framer-motion";
import { revealContainer, revealItem } from "../lib/animations";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      // ✅ Dev: Vite proxies /api -> http://localhost:7071
      // ✅ Prod: Static Web Apps routes /api -> Azure Functions
      const { data } = await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(data?.message || "Message sent successfully");
      e.target.reset();
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Error submitting message";
      toast.error(msg);
      console.error("Contact submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="container-main py-14 md:py-20"
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={revealItem} className="text-3xl font-bold mb-6">
        Contact
      </motion.h2>

      <motion.form
        variants={revealItem}
        onSubmit={handleSubmit}
        className="card p-6 space-y-5"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            className="mt-1 w-full border border-slate-300 dark:border-slate-700
                      bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100
                      rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full border border-slate-300 dark:border-slate-700
                      bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100
                      rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-800 dark:text-slate-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 w-full border border-slate-300 dark:border-slate-700
                      bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100
                      rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="btn-primary disabled:opacity-60"
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
      </motion.form>
    </motion.section>
  );
}
