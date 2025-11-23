import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function EditExperience() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/api/experiencias/${id}`)
      .then((res) => {
        setTitulo(res.data.titulo);
        setDescripcion(res.data.descripcion);
      });
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/experiencias/${id}`, {
      titulo,
      descripcion,
    });
    navigate("/admin");
  };

  return (
    <div className="min-h-screen pt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-gray-900 text-center mb-12"
      >
        Editar Experiencia
      </motion.h1>

      <div className="max-w-xl mx-auto backdrop-blur-xl bg-white/40 border border-white/20 
                      shadow-xl rounded-3xl p-10">

        <form onSubmit={update} className="space-y-6">

          <div>
            <label className="font-semibold text-indigo-700">Título</label>
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-xl bg-white/60 border border-white/30 
                         shadow-inner focus:ring-2 focus:ring-indigo-500 outline-none"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold text-indigo-700">Descripción</label>
            <textarea
              className="w-full mt-2 p-3 rounded-xl bg-white/60 border border-white/30 
                         shadow-inner focus:ring-2 focus:ring-indigo-500 outline-none"
              rows="5"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            ></textarea>
          </div>

          <button className="w-full py-3 rounded-full bg-indigo-600 text-white 
                             shadow-lg hover:bg-indigo-700 duration-300">
            Actualizar
          </button>

        </form>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
