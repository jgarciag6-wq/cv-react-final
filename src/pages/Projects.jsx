import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Hoja de Vida Profesional",
      description:
        "Sitio web moderno construido con React, Tailwind y Framer Motion. Cuenta con panel administrativo para gestionar experiencias y una interfaz elegante tipo portafolio profesional.",
      image: "/assets/foto.jpg",
      link: "/assets/resume.pdf"
    },
    {
      title: "Tienda Electrónica ElectroNova",
      description:
        "Plataforma completa de comercio electrónico desarrollada con React y Node.js. Incluye catálogo dinámico, carrito de compras, administración, autenticación, filtros y un diseño moderno oscuro orientado a robótica y electrónica.",
      image: "/assets/tienda-electronica.jpg",
      link: "https://tienda-completa.onrender.com/"
    }

  ];

  return (
    <div className="min-h-screen pt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-gray-900 drop-shadow-sm text-center mb-12"
      >
        Proyectos
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl 
                       rounded-3xl overflow-hidden hover:scale-[1.03] transition-all"
          >
            <img
              src={p.image}
              className="w-full h-56 object-cover rounded-t-3xl"
              alt={p.title}
            />

            <div className="p-8">
              <h2 className="text-2xl font-bold text-indigo-700">{p.title}</h2>
              <p className="mt-3 text-gray-800">{p.description}</p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white 
                             rounded-full shadow hover:bg-indigo-700 transition"
                >
                  Ver Proyecto
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="h-20"></div>
    </div>
  );
}
