import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function GradientCard({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3 }}
      className="backdrop-blur-xl bg-white/30 border border-white/40 
                 shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                 rounded-2xl p-5 flex items-center gap-4"
    >
      <FiCheckCircle className="text-purple-600 text-3xl drop-shadow" />
      <span className="text-gray-900 font-semibold text-lg tracking-wide">
        {title}
      </span>
    </motion.div>
  );
}
