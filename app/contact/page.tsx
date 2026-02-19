"use client";

import { motion } from "framer-motion";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 bg-[#0B1C2D] text-white text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Reach out to discuss infrastructure projects, partnerships, or
          consulting opportunities.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-bold text-[#0B1C2D]">
              Get in Touch
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Virgin Integrated Ltd delivers reliable infrastructure,
              construction, and consulting services across Nigeria. Contact
              our team to discuss your next project or partnership.
            </p>

            {/* PHONE */}
            <a
              href="tel:+2348023038559"
              className="flex items-center gap-4 p-5 border rounded-xl hover:shadow-md transition"
            >
              <Phone className="text-[#0B1C2D]" />
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-semibold text-[#0B1C2D]">
                  +234 0802 303 8559
                     <br />
                           +234 902 557 9473
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:virginintegrated@yahoo.com"
              className="flex items-center gap-4 p-5 border rounded-xl hover:shadow-md transition"
            >
              <Email className="text-[#0B1C2D]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-[#0B1C2D]">
                  virginintegrated@yahoo.com
                </p>
              </div>
            </a>

            {/* ADDRESS */}
            <div className="flex items-start gap-4 p-5 border rounded-xl">
              <LocationOn className="text-[#0B1C2D] mt-1" />
              <div>
                <p className="text-sm text-gray-500">Office Address</p>
                <p className="font-semibold text-[#0B1C2D]">
                 2nd Floor Unity Bank Building
               <br /> 69, Mission Road, <br /> Benin City.
               Edo State

                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
