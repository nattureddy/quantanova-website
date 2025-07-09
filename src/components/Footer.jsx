import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-black via-[#0f172a] to-[#020617] text-white font-orbitron py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Quantanova 2025</h2>
          <p className="text-sm text-gray-400 mt-1">
            Ignite your innovation • Build your future
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.instagram.com/quantanova.smec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 text-xl transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sanketh-reddy-667b062a4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-xl transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Quantanova. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
