import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const target = new Date("2025-07-19T10:00:00");
    const now = new Date();
    const difference = target - now;

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownItem = (label, value) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#111827] border border-gray-700 rounded-xl px-6 py-4 w-24 md:w-28 text-center"
    >
      <p className="text-3xl md:text-4xl font-bold text-cyan-400">
        {value.toString().padStart(2, "0")}
      </p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
  );

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#020617] px-4 pt-28 flex items-center justify-center font-orbitron"
    >
      <motion.div
        className="bg-[#0f172a] border border-gray-700 rounded-2xl text-white w-full max-w-5xl px-6 md:px-10 py-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-cyan-400 tracking-wide"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Quantanova
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-200 italic"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Imagine. Innovate. Ignite.
        </motion.p>

        <motion.p
          className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Welcome to the ultimate student hackathon where creativity and coding
          collide. Compete, collaborate, and create your legacy with Quantanova!
        </motion.p>

        {/* Countdown Timer */}
        <div className="mt-10">
          <h3 className="text-lg text-cyan-300 font-semibold mb-4">
            Event Countdown
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {countdownItem("DAYS", timeLeft.days)}
            {countdownItem("HOURS", timeLeft.hours)}
            {countdownItem("MINUTES", timeLeft.minutes)}
            {countdownItem("SECONDS", timeLeft.seconds)}
          </div>
        </div>

        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeBhmnyh0tj72JCFGaHbEBa2XwS53pdYNM7ptmIGHhJCTztFQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
        >
          Register Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
