import React from "react";
import { motion } from "framer-motion";

const dayWiseSchedule = {
  "DAY 1": [
    { time: "9:00 AM – 10:00 AM", activity: "Inauguration and Registration" },
    { time: "10:00 AM – 1:30 PM", activity: "Code Contest Level 1: Byte Size Battles" },
    { time: "1:30 PM – 2:30 PM", activity: "Lunch" },
    { time: "2:30 PM – 3:30 PM", activity: "Code Contest Level 2" },
    { time: "3:30 PM – 5:00 PM", activity: "Code Contest Level 3" },
    { time: "5:00 PM – 5:30 PM", activity: "DJ" },
    { time: "5:30 PM – 6:00 PM", activity: "Results Announcement" },
    { time: "6:00 PM – 6:30 PM", activity: "Project Allocation" },
    { time: "6:30 PM – 8:30 PM", activity: "Problem Solving & Logical Thinking" },
    { time: "8:30 PM – 9:30 PM", activity: "Running Dinner" },
    { time: "9:30 PM – 10:30 PM", activity: "Presentations" },
    { time: "10:30 PM – 12:00 AM", activity: "Working Time" },
  ],
  "DAY 2": [
    { time: "12:00 AM – 12:45 AM", activity: "Campfire" },
    { time: "12:45 AM – 3:30 AM", activity: "Working Time" },
    { time: "3:30 AM – 4:00 AM", activity: "Break + DJ" },
    { time: "4:00 AM – 6:00 AM", activity: "Work Submission" },
    { time: "6:00 AM – 7:00 AM", activity: "Fresh Up + Nap" },
    { time: "7:00 AM – 9:00 AM", activity: "Final Presentations + Breakfast" },
    { time: "9:00 AM – 10:00 AM", activity: "Closing Ceremony" },
  ],
};

const TimelineSection = () => {
  return (
    <section
      id="timeline"
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

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* 💫 Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-pink-400 text-center mb-12">
          Event Schedule
        </h2>

        <div className="space-y-12">
          {Object.entries(dayWiseSchedule).map(([day, events], idx) => (
            <motion.div
              key={idx}
              className="bg-black bg-opacity-30 backdrop-blur-md border border-purple-500 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6 text-center">
                {day}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col bg-[#1e293b] bg-opacity-40 backdrop-blur-sm rounded-lg p-4 border border-gray-600 hover:border-cyan-400 transition duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-300 font-semibold">{event.time}</span>
                    <span className="text-gray-200 mt-1">{event.activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
