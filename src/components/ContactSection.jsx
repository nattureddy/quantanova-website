import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 py-20 flex flex-col items-center font-orbitron overflow-hidden"
    >
      {/* Space background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/space-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Get in Touch
        </h2>

        <div className="rounded-2xl p-8 shadow-2xl backdrop-blur-md bg-black bg-opacity-30 border border-cyan-800 text-gray-300 space-y-6">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <MdPhone className="text-cyan-400 text-xl" />
              <span className="text-lg">
                9347316441 - <span className="text-white font-medium">Sanketh</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-cyan-400 text-xl" />
              <span className="text-lg">
                9876543210 - <span className="text-white font-medium">Harsha</span>
              </span>
            </div>

            <div className="flex items-center gap-3 sm:col-span-2">
              <MdEmail className="text-cyan-400 text-xl" />
              <span className="text-lg">sankethreddyanupala@gmail.com</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <a
              href="https://www.instagram.com/quantanova.smec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sanketh-reddy-667b062a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-2xl transition"
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
