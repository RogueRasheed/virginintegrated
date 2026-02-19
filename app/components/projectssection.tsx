"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title:
      "Road/Drainage Constructions Across The State",
    subtitle:
      "Ministry of Works, Edo State Government",
    image: "/images/ministry4.jpg",
  },
  {
    title:
      "Construction of Irrua–Usugbenu–Ugbegun–Ebudin–Ujogba Road",
    subtitle: "Highway Construction Project",
    image: "/images/irrua.jpg",
  },
  {
    title:
      "Construction of Iguobazuwa–Siluko Road",
    subtitle: "Road Infrastructure Development",
    image: "/images/siluko.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Featured Infrastructure Projects
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-80 overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href="/projects">
            <button className="bg-[#0B1C2D] text-white px-8 py-3 hover:bg-[#1E3A8A] transition">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
