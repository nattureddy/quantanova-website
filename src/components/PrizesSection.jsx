import React from "react";
import { motion } from "framer-motion";

const PrizesSection = () => {
  return (
    <section
      id="prizes"
      className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#020617] px-4 py-20 flex flex-col items-center font-orbitron"
    >
      <motion.div
        className="w-full max-w-6xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12">
          Prizes & Recognition
        </h2>

        {/* Top Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* 1st Prize */}
          <motion.div
            className="bg-[#0f172a] border border-cyan-700 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">1st Prize</h3>
            <p className="text-3xl font-bold text-green-300">₹10,000</p>
            <p className="text-sm text-gray-400 mt-2">+ Trophy & Certificate</p>
          </motion.div>

          {/* 2nd Prize */}
          <motion.div
            className="bg-[#0f172a] border border-purple-700 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">2nd Prize</h3>
            <p className="text-3xl font-bold text-green-300">₹5,000</p>
            <p className="text-sm text-gray-400 mt-2">+ Trophy & Certificate</p>
          </motion.div>

          {/* 3rd Prize */}
          <motion.div
            className="bg-[#0f172a] border border-orange-600 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">3rd Prize</h3>
            <p className="text-3xl font-bold text-green-300">₹3,000</p>
            <p className="text-sm text-gray-400 mt-2">+ Trophy & Certificate</p>
          </motion.div>
        </div>

        {/* Special Awards */}
        <motion.div
          className="mt-14 bg-[#0f172a] border border-indigo-700 rounded-2xl p-6 text-center shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">
            Special Awards: <span className="text-cyan-300">Innovation Sparks</span>
          </h3>
          <p className="text-lg text-green-300 font-bold">₹1,000</p>
          <p className="text-sm text-gray-400 mt-1">Awarded to teams with unique and impactful ideas.</p>
        </motion.div>

        {/* Certificates */}
        <motion.div
          className="mt-12 text-center text-lg text-gray-300 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            🏅 All participants will receive{" "}
            <span className="text-cyan-300 font-medium">Participation Certificates</span>.
          </p>
          <p>
            🏆 Winners receive{" "}
            <span className="text-cyan-300 font-medium">Winner Certificates</span> and{" "}
            <span className="text-purple-300">Trophies</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrizesSection;
