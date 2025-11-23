import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-gray-900 drop-shadow-sm text-center mb-12"
      >
        Contacto
      </motion.h1>

      <div className="max-w-xl mx-auto backdrop-blur-xl bg-white/40 border border-white/30 
                      shadow-xl rounded-3xl p-10">

        <p className="text-lg text-gray-800 text-center mb-6">
          Si deseas comunicarte conmigo, puedes hacerlo a través de los siguientes medios:
        </p>

        <div className="text-center space-y-4">
          <p className="text-xl font-semibold text-indigo-700">
            📧 garciaguerrerojavier30@gmail.com
          </p>
          <p className="text-xl font-semibold text-indigo-700">
            📱 3046147511
          </p>

          <a
            href="/assets/resume.pdf"
            target="_blank"
            className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white 
                       rounded-full shadow hover:bg-indigo-700 transition"
          >
            Ver Hoja de Vida en PDF
          </a>
        </div>

      </div>

      <div className="h-20"></div>
    </div>
  );
}
