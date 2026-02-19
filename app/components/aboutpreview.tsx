"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D]">
            Engineering Excellence Since 1998
          </h2>

          <div className="w-20 h-1 bg-orange-500 mt-4 mb-8"></div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Virgin Integrated Limited was conceived and incorporated in 1998
            by highly skilled professionals committed to engineering
            excellence and sustainable infrastructure development.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            As a multidisciplinary firm, we integrate Civil Engineering,
            Mechanical & Electrical Engineering, Architecture, Quantity
            Surveying and Project Management to deliver viable and
            economically sustainable solutions across Nigeria.
          </p>

          <Link href="/about">
            <button className="bg-[#0B1C2D] text-white px-8 py-3 hover:bg-[#1E3A8A] transition">
              Learn More About Us
            </button>
          </Link>
        </motion.div>

        {/* Right Accent Block */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#0B1C2D] text-white p-12"
        >
          <h3 className="text-xl font-semibold mb-6">
            Our Core Strength
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>• Civil & Structural Engineering</li>
            <li>• Mechanical & Electrical Engineering</li>
            <li>• Infrastructure Project Management</li>
            <li>• Government & Public Sector Projects</li>
            <li>• Planning, Design & Supervision</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
