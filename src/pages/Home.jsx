import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold text-gray-900 drop-shadow-lg"
      >
        Hola, soy <span className="text-indigo-600">JAVIER</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-xl text-gray-700 max-w-2xl"
      >
        Técnico profesional en sistemas, con experiencia en electrónica, programación, 
        desarrollo web, IoT y soporte técnico. Transformo ideas en soluciones reales.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-10 px-8 py-3 rounded-full bg-indigo-600 text-white 
                   shadow-xl hover:bg-indigo-700 duration-300"
      >
        Ver Proyectos
      </motion.button>

    </div>
  );
}
