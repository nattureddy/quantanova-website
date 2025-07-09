import React from "react";
import { motion } from "framer-motion";

const OthersSection = () => {
  return (
    <section
      id="others"
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
          What's Included?
        </h2>

        <motion.div
          className="bg-[#0f172a] border border-cyan-800 rounded-2xl p-8 md:p-10 shadow-md space-y-6 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl leading-8">
            We’ve got everything covered to make your hackathon experience awesome! Here’s what every participant gets:
          </p>

          <ul className="list-disc list-inside space-y-4 text-left px-2 md:px-4">
            <li>
              🎁 <span className="text-cyan-300 font-medium">Swag Kit</span> including:
              <ul className="list-disc list-inside ml-6 mt-2 text-sm md:text-base text-gray-400 space-y-1">
                <li>✨ ID Card</li>
                <li>✨ Hand Band</li>
                <li>✨ Stickers</li>
                <li>✨ Cap or T-Shirt</li>
              </ul>
            </li>
            <li>🌐 <span className="text-cyan-300 font-medium">High-speed Internet</span> for all teams.</li>
            <li>🥤 <span className="text-cyan-300 font-medium">Refreshments & Beverages</span> will be provided regularly.</li>
            <li>⏰ <span className="text-cyan-300 font-medium">24-Hour Venue Access</span> to ideate, build, and collaborate.</li>
            <li>🪑 <span className="text-cyan-300 font-medium">Comfortable Seating & Spacious Venue</span> to keep your mind focused.</li>
          </ul>

          <p className="mt-8 text-green-300 text-center text-base md:text-lg">
            💡 All this to ensure you focus on what matters most — <span className="text-cyan-400 font-semibold">Imagine. Innovate. Ignite.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OthersSection;
