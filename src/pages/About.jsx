import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-gray-900 drop-shadow-sm text-center mb-12"
      >
        Sobre Mí
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto backdrop-blur-xl bg-white/40 border border-white/20 
                   shadow-xl rounded-3xl p-10"
      >
        <p className="text-lg text-gray-800 leading-relaxed">
          Soy un técnico profesional en sistemas con experiencia en electrónica, 
          programación, mantenimiento de equipos, desarrollo web, uso de plataformas educativas 
          y soporte técnico. Me caracterizo por ser responsable, comprometido, orientado a resultados 
          y con gran capacidad para aprender nuevas tecnologías y aplicarlas en proyectos reales.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed mt-6">
          Disfruto crear soluciones tecnológicas, trabajar con hardware, construir sistemas, 
          automatizar procesos y aprender constantemente sobre tecnología para seguir creciendo 
          profesionalmente.
        </p>
      </motion.div>

      <div className="h-20"></div>
    </div>
  );
}
