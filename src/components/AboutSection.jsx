import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 font-orbitron overflow-hidden"
    >
      {/* 🔁 Background Video */}
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

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 🌟 Main Card Content */}
      <motion.div
        className="relative z-10 bg-black bg-opacity-30 backdrop-blur-md border border-purple-400 rounded-2xl text-white w-full max-w-5xl px-6 md:px-10 py-14 text-center space-y-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-300"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Quantanova
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-blue-100 text-base md:text-lg leading-relaxed"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Quantanova is a vibrant student hackathon built to spark innovation, problem-solving,
          and real-world impact. With a unique multi-round format, participants will compete and
          collaborate on technical challenges that push their creativity and coding skills.
        </motion.p>

        {/* Format Details */}
        <motion.div
          className="text-left space-y-4 text-pink-200 text-sm md:text-base mt-6"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-cyan-300 font-semibold text-lg">⚙️ Hackathon Format:</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong className="text-cyan-400">Round 1 - Idea Submission:</strong> Submit your innovative solution based on given problem statements.
            </li>
            <li>
              <strong className="text-cyan-400">Round 2 - Prototype Building:</strong> Shortlisted teams work on developing a working prototype.
            </li>
            <li>
              <strong className="text-cyan-400">Round 3 - Final Presentation:</strong> Pitch your solution to the judges in a live demo.
            </li>
          </ul>

          <p className="mt-4 text-blue-100">
            Each round is designed to test different skills — ideation, development, teamwork, and presentation.
            You'll be mentored by experts and judged by professionals in the field.
          </p>

          <p className="mt-2 italic text-purple-300">
            Whether you're a beginner or an expert, Quantanova is the perfect place to{' '}
            <span className="text-cyan-400 font-semibold">Imagine, Innovate, and Ignite!</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
