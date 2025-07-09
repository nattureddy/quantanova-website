import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#020617] flex items-center justify-center px-4"
    >
      <motion.div
        className="bg-[#0f172a] border border-gray-700 rounded-2xl text-white w-[75%] px-10 py-14 text-center space-y-8 font-orbitron"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Quantanova
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Quantanova is a vibrant student hackathon built to spark innovation, problem-solving, and real-world impact. With a unique multi-round format, participants will compete and collaborate on technical challenges that push their creativity and coding skills.
        </motion.p>

        <motion.div
          className="text-left space-y-4 text-gray-400 text-sm md:text-base mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-cyan-300 font-semibold text-lg">⚙️ Hackathon Format:</h3>
          <ul className="list-disc list-inside pl-2 space-y-2">
            <li>
              <strong>Round 1 - Idea Submission:</strong> Submit your innovative solution based on given problem statements.
            </li>
            <li>
              <strong>Round 2 - Prototype Building:</strong> Shortlisted teams work on developing a working prototype.
            </li>
            <li>
              <strong>Round 3 - Final Presentation:</strong> Pitch your solution to the judges in a live demo.
            </li>
          </ul>

          <p className="mt-4">
            Each round is designed to test different skills — ideation, development, teamwork, and presentation. You'll be mentored by experts and judged by professionals in the field.
          </p>

          <p className="mt-2 italic">
            Whether you're a beginner or an expert, Quantanova is the perfect place to{' '}
            <span className="text-cyan-400">Imagine, Innovate, and Ignite!</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
