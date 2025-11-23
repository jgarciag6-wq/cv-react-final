import { motion } from "framer-motion";

export default function Studies() {
  const studies = [
    "Bachiller académico",
    "Técnico profesional en sistemas",
    "Cursos de electrónica básica",
    "Cursos de programación",
    "Cursos de plataformas educativas"
  ];

  return (
    <div className="min-h-screen pt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-gray-900 drop-shadow-sm text-center mb-12"
      >
        Estudios
      </motion.h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {studies.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl 
                       rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-indigo-700">{s}</h3>
          </motion.div>
        ))}
      </div>

      <div className="h-20"></div>
    </div>
  );
}
