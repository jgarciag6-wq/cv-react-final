import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/30 
                 border-b border-white/20 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-700 drop-shadow">
          JAVIER
        </h1>

        <div className="flex gap-8 font-semibold">
          <Link className="hover:text-indigo-700 duration-300" to="/">Inicio</Link>
          <Link className="hover:text-indigo-700 duration-300" to="/about">Sobre mí</Link>
          <Link className="hover:text-indigo-700 duration-300" to="/studies">Estudios</Link>
          <Link className="hover:text-indigo-700 duration-300" to="/skills">Habilidades</Link>
          <Link className="hover:text-indigo-700 duration-300" to="/projects">Proyectos</Link>
          <Link className="hover:text-indigo-700 duration-300" to="/contact">Contacto</Link>
        </div>
      </div>
    </motion.nav>
  );
}
