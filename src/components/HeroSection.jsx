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
      className="bg-black bg-opacity-40 backdrop-blur-sm border border-cyan-500 rounded-xl px-4 py-4 min-w-[72px] sm:min-w-[90px] text-center flex flex-col items-center"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">
        {value.toString().padStart(2, "0")}
      </p>
      <p className="text-xs sm:text-sm text-gray-200 mt-1">{label}</p>
    </motion.div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen px-4 pt-28 flex items-center justify-center font-orbitron overflow-hidden"
    >
      {/* 🔁 Space Background Video */}
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

      {/* 🔲 Dark Overlay for visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 🌟 Main Content */}
      <motion.div
        className="relative z-10 bg-black bg-opacity-30 backdrop-blur-md border border-cyan-500 rounded-2xl text-white w-full max-w-5xl px-6 md:px-10 py-12 text-center shadow-lg"
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
          className="mt-4 text-lg md:text-2xl text-purple-300 italic"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Imagine. Innovate. Ignite.
        </motion.p>

        <motion.p
          className="mt-6 text-blue-100 text-sm md:text-base leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Welcome to the ultimate student hackathon where creativity and coding
          collide. Compete, collaborate, and create your legacy with Quantanova!
        </motion.p>

        {/* Countdown Timer */}
        <div className="mt-10">
          <h3 className="text-lg text-pink-400 font-semibold mb-4">
            Event Countdown
          </h3>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap max-w-full">
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
          className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-xl"
        >
          Register Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
