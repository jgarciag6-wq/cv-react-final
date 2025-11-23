import GradientCard from "../components/GradientCard";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  const skills = [
    "Herramientas ofimáticas (Word, Excel, PDF)",
    "Manejo de plataformas educativas",
    "Organización y presentación de documentos",
    "Competencias digitales",
    "Navegación web y gestión de archivos",
    "Electrónica básica",
    "Reconocimiento de componentes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 pt-28 px-6">

      <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-sm 
                     text-center mb-16 tracking-wide">
        Habilidades
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
                      gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <GradientCard key={index} title={skill} />
        ))}
      </div>

      <div className="h-20"></div>
    </div>
  );
}
