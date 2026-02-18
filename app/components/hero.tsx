"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#0B1C2D] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Engineering Excellence Since 1998
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Multi-disciplinary Engineering, Construction, Consultancy
          and Project Management Services across Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-md font-semibold">
            View Our Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
