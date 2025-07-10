import React from "react";
import { motion } from "framer-motion";

const OthersSection = () => {
  return (
    <section
      id="others"
      className="relative min-h-screen px-4 py-20 flex flex-col items-center font-orbitron overflow-hidden"
    >
      {/* Background space video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/space-video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
          What's Included?
        </h2>

        <motion.div
          className="bg-black bg-opacity-30 backdrop-blur-md border border-cyan-800 rounded-2xl p-6 md:p-10 shadow-xl space-y-6 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl leading-8 text-blue-100">
            We’ve got everything covered to make your hackathon experience unforgettable!
            Here's what every participant receives:
          </p>

          <ul className="list-disc list-inside space-y-6 text-left px-2 md:px-4 text-sm md:text-base text-gray-200">
            <li>
              🎁 <span className="text-purple-300 font-semibold">Swag Kit</span> including:
              <motion.ul
                className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm md:text-base text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <li>✨ ID Card</li>
                <li>✨ Hand Band</li>
                <li>✨ Stickers</li>
                <li>✨ Cap or T-Shirt</li>
              </motion.ul>
            </li>
            <li>🌐 <span className="text-cyan-300 font-medium">High-speed Internet</span> for all teams.</li>
            <li>🥤 <span className="text-green-300 font-medium">Refreshments & Beverages</span> provided regularly.</li>
            <li>⏰ <span className="text-yellow-300 font-medium">24-Hour Venue Access</span> for collaboration & focus.</li>
            <li>🪑 <span className="text-pink-300 font-medium">Comfortable Seating & Spacious Venue</span> for optimal workflow.</li>
          </ul>

          <p className="mt-8 text-center text-lg text-green-300 font-semibold">
            💡 All of this to ensure you focus on what truly matters —{" "}
            <span className="text-cyan-400 font-bold">Imagine. Innovate. Ignite.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OthersSection;
