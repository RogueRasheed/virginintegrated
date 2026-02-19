"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";



interface LightboxProps {
  images: string[];
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
}

function LightboxV2({ images, index, setIndex, onClose }: LightboxProps) {
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-[92vw] max-w-6xl h-[85vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* IMAGE */}
          <div className="relative flex-1">
            <Image
              src={images[index]}
              alt="Project image"
              fill
              className="object-contain rounded-xl"
              priority
            />

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>

            {/* NAV */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl px-3"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl px-3"
                >
                  ›
                </button>
              </>
            )}

            {/* COUNTER */}
            <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {index + 1} / {images.length}
            </div>
          </div>

          {/* THUMBNAILS */}
          {images.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-24 h-16 shrink-0 rounded-md overflow-hidden border-2 ${
                    i === index ? "border-white" : "border-transparent opacity-70"
                  }`}
                >
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


const projects = [
  {
    title: "Road/Drainage Constructions Across Edo State",
    category: "Road & Drainage Infrastructure",
    images: [
      "/images/ministr.jpg",
      "/images/projects/irrua-road.jpg",
    ],
    description:
      "Execution of multiple road and drainage construction projects across Edo State under the Ministry of Works.",
  },
  {
    title: "Construction of Irrua–Usugbenu–Ugbegun–Ebudin–Ujiogba Road",
    category: "Road Construction",
    images: ["/images/projects/irrua-road.jpg"],
    description:
      "Full-scale construction of inter-community road infrastructure improving connectivity and transport efficiency.",
  },
  {
    title: "Construction of Igueben – Ewohimi – Ewatto – Emu – Okhuesan Road",
    category: "Road Construction",
    images: ["/images/projects/igueben-road.jpg"],
    description:
      "Major arterial road construction project enhancing economic mobility and regional access.",
  },
  {
    title: "Construction of Uhen–Olumoye Road",
    category: "Road Construction",
    images: ["/images/projects/uhen-road.jpg"],
    description:
      "Strategic roadway project focused on durability, drainage optimization, and long-term sustainability.",
  },
  {
    title: "Construction of Iguobazuwa–Siluko Road",
    category: "Road Construction",
    images: ["/images/projects/iguobazuwa-road.jpg"],
    description:
      "Expansion and rehabilitation of roadway infrastructure to support increased traffic and commercial activity.",
  },
  {
    title: "Mission / Upper Mission Road Rehabilitation",
    category: "Road Rehabilitation",
    images: ["/images/projects/mission-road.jpg"],
    description:
      "Repair of potholes and structural reinforcement using stone base for enhanced roadway stability.",
  },
];



const extraProjects = [
  {
    client: "Delta State Government / World Bank",
    title: "State Government & Expenditure Result Consultancy Services (SEEFOR)",
    location: "Asaba, Ughelli, Warri, Sapele",
    status: "Completed",
  },
  {
    client: "Ministry of Works, Edo State",
    title: "Design of Adesogbe Road (Plymouth Road)",
    location: "Benin City, Edo State",
    status: "Completed",
  },
  {
    client: "Ministry of Works, Edo State",
    title: "Project Management Services for Siluko/Ugbowo Mission Road",
    location: "Benin City, Edo State",
    status: "Completed",
  },
  {
    client: "Ministry of Housing & Urban Development",
    title: "Architectural Consultant Design for University of Science & Tech, Uzairue",
    location: "Uzairue, Edo State",
    status: "Completed",
  },
  {
    client: "Edo State Government",
    title: "Remodelling/Refurbishment of Urban Water Board Building",
    location: "Benin City, Edo State",
    status: "Completed",
  },
  {
    client: "Ministry of Works, Edo State",
    title: "Design of Ekewan Road",
    location: "Benin City, Edo State",
    status: "Completed",
  },
  {
    client: "Delta state University Abraka",
    title: "Design of principal officers house & project management consultant",
    location: "Delta state University Abraka",
    status: "Completed",
  },
];


export default function ProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 bg-[#0B1C2D] text-white text-center">
        <h1 className="text-4xl font-bold">Our Projects</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Delivering sustainable infrastructure across Edo State and beyond.
        </p>
      </section>

      {/* GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openLightbox(project.images, 0)}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="mt-6">
                <p className="text-sm text-orange-500 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold text-[#0B1C2D] mt-2">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="relative h-80 cursor-pointer"
                onClick={() => openLightbox(project.images, 0)}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-sm text-orange-500 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-[#0B1C2D] mt-4">
                  {project.title}
                </h3>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {/* EXTRA PROJECT LIST SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-12">
            Additional Executed Projects
          </h2>

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="text-sm uppercase tracking-wider text-gray-600">
                  <th className="p-4 border">Client</th>
                  <th className="p-4 border">Project</th>
                  <th className="p-4 border">Location</th>
                  <th className="p-4 border">Status</th>
                </tr>
              </thead>

              <tbody>
                {extraProjects.map((p, i) => (
                  <tr key={i} className="text-sm hover:bg-gray-50 transition">
                    <td className="p-4 border font-medium">{p.client}</td>
                    <td className="p-4 border">{p.title}</td>
                    <td className="p-4 border">{p.location}</td>
                    <td className="p-4 border text-green-700 font-semibold">
                      {p.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <LightboxV2
          images={lightboxImages}
          index={lightboxIndex}
          setIndex={setLightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

    </main>
  );
}
