import React from "react";
import { motion } from "framer-motion";

const TracksSection = () => {
  return (
    <section
      id="tracks"
      className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#020617] px-4 py-20 flex flex-col items-center font-orbitron"
    >
      <motion.div
        className="w-[75%] text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
          Innovation Tracks
        </h2>

        <motion.div
          className="bg-[#0f172a] border border-gray-700 rounded-2xl p-8 md:p-10 text-center shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-8 mb-4">
            Participants will receive <span className="text-purple-400 font-semibold">real-world problem statements</span> during the event day.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-8 mb-6">
            Here are some exciting domains where your innovation can shine:
          </p>

          <ul className="text-left text-gray-400 list-disc list-inside leading-8 px-2 md:px-6 mb-4">
            <li>
              <span className="text-cyan-300 font-medium">AI/ML & Automation</span> – Smart systems, prediction models, or intelligent bots.
            </li>
            <li>
              <span className="text-cyan-300 font-medium">Sustainability & Smart Living</span> – Green tech, smart cities, energy efficiency ideas.
            </li>
            <li>
              <span className="text-cyan-300 font-medium">Healthcare & Wellness</span> – Tech for health, fitness tracking, or diagnostic tools.
            </li>
            <li>
              <span className="text-cyan-300 font-medium">Education & Learning</span> – EdTech platforms and immersive learning tools.
            </li>
            <li>
              <span className="text-cyan-300 font-medium">Open Innovation</span> – Surprise challenges and cross-domain creativity.
            </li>
          </ul>

          <p className="mt-6 text-md md:text-lg text-green-300 font-semibold">
            💡 Use your imagination and problem-solving skills to build something impactful!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TracksSection;
