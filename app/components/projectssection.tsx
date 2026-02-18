"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FoundationIcon from '@mui/icons-material/Foundation';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import HandymanIcon from '@mui/icons-material/Handyman';
import RouteIcon from '@mui/icons-material/Route';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddRoadIcon from '@mui/icons-material/AddRoad';

const projects = [
  {
    title: "Ogbesse River Bridge",
    category: "Bridge Design & Project Management",
    icon: <FoundationIcon />,
  },
  {
    title: "Ekehuan Road",
    category: "Road Design",
    icon: <RouteIcon />,
  },
  {
    title: "Irrua–Usugbenu–Ugbegun–Ebudin–Ujogba Road",
    category: "Highway Construction",
    icon: <EngineeringIcon />,
  },
  {
    title: "Iguobazuwa–Siluko Road",
    category: "Road Construction",
    icon: <ForkRightIcon />,
  },
  {
    title: "SEEFOR Project",
    category: "Project Management Services",
    icon: <HandymanIcon />,
  },
  {
    title: "Road & Drainage Construction (Edo State)",
    category: "Civil Infrastructure",
    icon: <AddRoadIcon />,
  },
];


export default function ProjectsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Delivering infrastructure excellence across Edo State and beyond
            through structured engineering and project management.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-gray-200 p-8 transition duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <span className="material-icons text-orange-500 text-3xl mb-4 block">
                {project.icon}
              </span>

              <h3 className="text-lg font-semibold text-[#0B1C2D] mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
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
