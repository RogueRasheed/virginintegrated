"use client";

import { motion } from "framer-motion";
import EngineeringIcon from '@mui/icons-material/Engineering'; 
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HandshakeIcon from '@mui/icons-material/Handshake';

const services = [
  {
    title: "Engineering & Management",
    description:
      "Comprehensive engineering solutions and structured project management for public and private sector developments.",
    icon: <EngineeringIcon />,
  },
  {
    title: "Construction",
    description:
      "Roads, bridges, drainage systems, civil works and large-scale infrastructure projects executed with precision.",
    icon: <ConstructionIcon />,
  },
  {
    title: "Consultancy",
    description:
      "Professional advisory services in planning, design, structural analysis and economic project evaluation.",
    icon: <HandshakeIcon />,
  },
  {
    title: "Inspection & Logistics",
    description:
      "Technical supervision, site inspection and operational logistics for complex engineering projects.",
    icon: <AssignmentTurnedInIcon />,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Our Core Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <span className="material-icons text-4xl text-orange-500 mb-6 block">
                {service.icon}
              </span>

              <h3 className="text-xl font-semibold text-[#0B1C2D] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
