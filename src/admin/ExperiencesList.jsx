import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function ExperiencesList() {
  const [experiences, setExperiences] = useState([]);

  const fetchExperiences = async () => {
    const res = await axios.get("http://localhost:4000/api/experiencias");
    setExperiences(res.data);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const deleteExp = async (id) => {
    await axios.delete(`http://localhost:4000/api/experiencias/${id}`);
    fetchExperiences();
  };

  return (
    <div className="min-h-screen pt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-gray-900 text-center mb-14"
      >
        Panel Administrativo
      </motion.h1>

      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/40 border border-white/20 
                      shadow-xl rounded-3xl p-10">

        <Link
          to="/admin/new"
          className="inline-block mb-8 px-6 py-3 rounded-full bg-indigo-600 
                     text-white shadow-lg hover:bg-indigo-700 transition"
        >
          ➕ Nueva Experiencia
        </Link>

        <div className="overflow-x-auto">
          <table className="w-full text-left mt-4 bg-white/30 rounded-xl backdrop-blur-md">
            <thead>
              <tr className="text-indigo-700 font-bold">
                <th className="p-4">Título</th>
                <th className="p-4">Descripción</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {experiences.map((exp, index) => (
                <motion.tr
                  key={exp._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-white/20"
                >
                  <td className="p-4 font-semibold">{exp.titulo}</td>
                  <td className="p-4 text-gray-700">{exp.descripcion}</td>
                  <td className="p-4 text-center flex justify-center gap-3">

                    <Link
                      to={`/admin/edit/${exp._id}`}
                      className="px-4 py-2 text-white bg-purple-600 rounded-full 
                                 hover:bg-purple-700 duration-300 shadow"
                    >
                      ✏ Editar
                    </Link>

                    <button
                      onClick={() => deleteExp(exp._id)}
                      className="px-4 py-2 text-white bg-red-600 rounded-full 
                                 hover:bg-red-700 duration-300 shadow"
                    >
                      🗑 Eliminar
                    </button>

                  </td>
                </motion.tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
