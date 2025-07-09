import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#020617] px-4 py-20 flex flex-col items-center font-orbitron"
    >
      <motion.div
        className="w-full max-w-4xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Get in Touch
        </h2>

        <div className="rounded-2xl p-8 shadow-xl backdrop-blur-md bg-white/10 border border-white/20 text-gray-300 space-y-6">
          {/* Contact Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdPhone className="text-cyan-400 text-xl" />
                <span className="text-lg">
                  9347316441 - <span className="text-white font-medium">Sanketh</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-cyan-400 text-xl" />
                <span className="text-lg">sankethreddyanupala@gmail.com</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdPhone className="text-cyan-400 text-xl" />
                <span className="text-lg">
                  9876543210 - <span className="text-white font-medium">Harsha</span>
                </span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <a
              href="https://www.instagram.com/quantanova.smec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sanketh-reddy-667b062a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="text-center text-sm text-green-300 mt-4">
            For any queries, feel free to contact us anytime!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
