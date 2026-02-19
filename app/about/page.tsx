"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const managementTeam = [
  {
    name: "Prof. Achebo Joseph",
    role: "Engineering Services Lead",
    credentials: "B.Eng, MBA, M.Eng, Ph.D | MNSE | COREN",
    image: "/images/images.jpg",
  },
  {
    name: "Osuji Sylvester",
    role: "Civil & Structural Consultant",
    credentials: "B.Eng, M.Eng, Ph.D | MNSE | COREN | NIStructE | LLB | LLM",
    image: "/images/images.jpg",
  },
  {
    name: "Odiai Clifford",
    role: "Civil/Structural Engineer",
    credentials: "B.Eng, M.Eng | COREN | MNSE | MIABSE | MNIStructE",
    image: "/images/images.jpg",
  },
  {
    name: "Moses Ugheoke",
    role: "Chartered Builder",
    credentials: "B.Sc Building | Dip. Civil | MNIOB | 20+ yrs experience",
    image: "/images/images.jpg",
  },
  {
    name: "Eze David Simon",
    role: "Quantity Surveyor",
    credentials: "BSc (Hons) | MICI Arb | NIQS Member",
    image: "/images/images.jpg",
  },
  {
    name: "Charles Edeoghon",
    role: "Senior Civil Engineer",
    credentials: "B.Eng Civil | 25+ yrs experience",
    image: "/images/images.jpg",
  },
  {
    name: "Osagie Emankhu",
    role: "Architect",
    credentials: "B.Sc, M.Sc | MNIA",
    image: "/images/images.jpg",
  },
  {
    name: "John Ibuzugbe",
    role: "Senior Consultant Engineer",
    credentials: "B.Eng, M.Eng Civil | 18+ yrs experience",
    image: "/images/images.jpg",
  },
  {
    name: "Ochonogor Peter",
    role: "Administrative Manager",
    credentials: "B.Sc Business Management",
    image: "/images/images.jpg",
  },
  {
    name: "Darlington Okoka",
    role: "Electrical Consultant",
    credentials: "B.Eng, M.Eng | MNSE | 8+ yrs experience",
    image: "/images/images.jpg",
  },
  {
    name: "Henriatta Effiom",
    role: "HSE Officer",
    credentials: "BA, MPA | SPDC Safety Certificate",
    image: "/images/images.jpg",
  },
  {
    name: "Charles Afambu",
    role: "Head of Finance & Accounts",
    credentials: "BSc, MBA Accounts",
    image: "/images/images.jpg",
  },
];

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    "certi.jpg",
    "certi2.jpg",
    "certi3.jpg",
    "certi4.jpg",
    "certi5.jpg",
    "certi6.jpg",
    "certi7.jpg",
    "certi8.png",
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-[#0B1C2D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About Virgin Integrated Limited
          </motion.h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            A multidisciplinary engineering firm delivering infrastructure
            excellence and sustainable project solutions since 1998.
          </p>
        </div>
      </section>

      {/* MANAGEMENT TEAM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#0B1C2D]">
              Management Team
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {managementTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-200 p-8 hover:shadow-lg transition text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#0B1C2D]">
                  {member.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">{member.role}</p>

                <p className="text-gray-500 text-xs mt-4">
                  {member.credentials}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION GALLERY */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B1C2D]">
              Certifications & Professional Accreditations
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() =>
                  setSelectedImage(`/images/certifications/${cert}`)
                }
                className="relative h-64 border border-gray-200 overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`/images/certifications/${cert}`}
                  alt="Certification"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Certification Enlarged"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
