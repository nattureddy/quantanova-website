import React from "react";
import { motion } from "framer-motion";

const PrizesSection = () => {
  return (
    <section
      id="prizes"
      className="relative min-h-screen px-4 py-20 flex flex-col items-center font-orbitron overflow-hidden"
    >
      {/* 🔁 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="images/space-video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 🌟 Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-12">
          Prizes & Recognition
        </h2>

        {/* 🏆 Top Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* 1st Prize */}
          <motion.div
            className="bg-black bg-opacity-30 backdrop-blur-md border border-yellow-500 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">1st Prize</h3>
            <p className="text-3xl font-bold text-green-300">₹10,000</p>
            <p className="text-sm text-gray-300 mt-2">+ Trophy & Certificate</p>
          </motion.div>

          {/* 2nd Prize */}
          <motion.div
            className="bg-black bg-opacity-30 backdrop-blur-md border border-purple-600 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">2nd Prize</h3>
            <p className="text-3xl font-bold text-green-300">₹5,000</p>
            <p className="text-sm text-gray-300 mt-2">+ Trophy & Certificate</p>
          </motion.div>

          {/* 3rd Prize */}
          <motion.div
            className="bg-black bg-opacity-30 backdrop-blur-md border border-orange-500 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-orange-300 mb-2">3rd Prize</h3>
            <p className="text-3xl font-bold text-green-300">₹3,000</p>
            <p className="text-sm text-gray-300 mt-2">+ Trophy & Certificate</p>
          </motion.div>
        </div>

        {/* 💡 Special Awards */}
        <motion.div
          className="mt-14 bg-black bg-opacity-30 backdrop-blur-md border border-indigo-600 rounded-2xl p-6 text-center shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Special Awards: <span className="text-cyan-300">Innovation Sparks</span>
          </h3>
          <p className="text-lg text-green-300 font-bold">₹1,000</p>
          <p className="text-sm text-gray-200 mt-1">Awarded to teams with unique and impactful ideas.</p>
        </motion.div>

        {/* 🎓 Certificates */}
        <motion.div
          className="mt-12 text-center text-lg text-gray-200 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            🏅 All participants receive{" "}
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
