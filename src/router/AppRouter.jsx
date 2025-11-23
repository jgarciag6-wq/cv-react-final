import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Studies from "../pages/Studies";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import ExperiencesList from "../admin/ExperiencesList.jsx";
import NewExperience from "../admin/NewExperience.jsx";
import EditExperience from "../admin/EditExperience.jsx";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Panel Administrativo */}
        <Route path="/admin/experiencias" element={<ExperiencesList />} />
        <Route path="/admin/experiencias/nueva" element={<NewExperience />} />
        <Route path="/admin/experiencias/editar/:id" element={<EditExperience />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
