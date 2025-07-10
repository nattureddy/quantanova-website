import React from "react";
import { motion } from "framer-motion";

const domains = [
  {
    title: "AI/ML & Automation",
    description:
      "Smart systems, prediction models, intelligent bots, and cutting-edge automation innovations.",
    color: "text-cyan-300",
    link: "https://example.com/aiml", // Replace with actual links
  },
  {
    title: "Sustainability & Smart Living",
    description:
      "Ideas that promote green technology, smart cities, and sustainable lifestyles.",
    color: "text-green-300",
    link: "https://example.com/sustainability",
  },
  {
    title: "Healthcare & Wellness",
    description:
      "Health tech, fitness tracking, diagnostics, and innovations in medical support.",
    color: "text-pink-300",
    link: "https://example.com/healthcare",
  },
  {
    title: "Education & Learning",
    description:
      "Revolutionize learning through EdTech platforms, gamified learning, and immersive tools.",
    color: "text-yellow-300",
    link: "https://example.com/education",
  },
  {
    title: "Open Innovation",
    description:
      "Cross-domain challenges and freeform problem-solving for bold creative thinkers.",
    color: "text-purple-300",
    link: "https://example.com/openinnovation",
  },
];

const TracksSection = () => {
  return (
    <section
      id="tracks"
      className="relative min-h-screen px-4 py-20 flex flex-col items-center font-orbitron overflow-hidden"
    >
      {/* Background video */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12">
          Innovation Tracks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-30 backdrop-blur-md border border-cyan-600 p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-xl font-semibold mb-3 ${domain.color}`}>
                {domain.title}
              </h3>
              <p className="text-gray-300 flex-grow">{domain.description}</p>
              <a
                href={domain.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-green-300 font-semibold">
          💡 Use your imagination and problem-solving skills to build something impactful!
        </p>
      </motion.div>
    </section>
  );
};

export default TracksSection;
