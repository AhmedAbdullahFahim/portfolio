import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaCode,
  FaRocket,
  FaTrophy,
  FaLightbulb,
  FaReact,
  FaNodeJs,
  FaMobile,
  FaDatabase,
  FaFutbol,
  FaGamepad,
  FaTableTennis,
  FaTree,
  FaCss3Alt,
  FaCertificate,
  FaAward,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
} from "react-icons/si";
import { useMobile } from "../hooks/useMobile";

const About = () => {
  const { isMobile } = useMobile();

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState("overview");

  // Mobile-optimized animation variants - minimal on mobile
  const containerVariants = {
    hidden: { opacity: isMobile ? 1 : 0 }, // No opacity animation on mobile
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1, // No stagger on mobile
        duration: isMobile ? 0 : 0.8, // No duration on mobile
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }, // No movement on mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0 : 0.6, // No animation on mobile
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: isMobile ? 1 : 0, scale: 1 }, // No scale animation on mobile
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0 : 0.6, // No animation on mobile
        ease: "easeOut",
      },
    },
  };

  const achievements = [
    {
      icon: FaRocket,
      number: "2+",
      label: "Years Experience",
      desc: "Building modern web applications",
    },
    {
      icon: FaTrophy,
      number: "15+",
      label: "Projects Delivered",
      desc: "From concept to production",
    },
    {
      icon: FaCode,
      number: "8+",
      label: "Technologies",
      desc: "Frontend & mobile expertise",
    },
    {
      icon: FaHeart,
      number: "100%",
      label: "Client Satisfaction",
      desc: "Delivering beyond expectations",
    },
    {
      icon: FaLightbulb,
      number: "∞",
      label: "Learning Mode",
      desc: "Always exploring new tech",
    },
  ];

  const techStack = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-500",
    },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React Native", icon: FaMobile, color: "text-cyan-400" },
    { name: "Expo", icon: SiExpo, color: "text-white" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-teal-400",
    },
  ];

  const personalInfo = [
    { icon: FaUser, label: "Name", value: "Ahmed Abdullah Fahim" },
    { icon: FaCalendarAlt, label: "Age", value: "25 Years" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Cairo, Egypt" },
    { icon: FaCode, label: "Role", value: "Frontend Developer" },
  ];

  const interests = [
    { icon: FaCode, name: "Coding", desc: "Building amazing apps" },
    { icon: FaFutbol, name: "Football", desc: "Playing & watching" },
    { icon: FaTableTennis, name: "Padel", desc: "Racket sports enthusiast" },
    { icon: FaGamepad, name: "Gaming", desc: "Strategy & action games" },
    {
      icon: FaLightbulb,
      name: "Tech Innovation",
      desc: "Latest trends & tools",
    },
    {
      icon: FaTree,
      name: "Touching Grass",
      desc: "Getting fresh air & outdoor time",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "tech", label: "Tech Stack" },
    { id: "interests", label: "Interests" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-dark-blue-800/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue-300/3 rounded-full blur-3xl" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-blue-500 to-accent-blue-400 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg shadow-blue-500/25"
            >
              <FaUser className="text-white text-lg sm:text-2xl" />
            </motion.div>
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #cbd5e1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
                lineHeight: "1.3",
              }}
            >
              About Me
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences with modern
              technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-12 sm:mb-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8">
              {/* Tab Navigation */}
              <motion.div
                variants={itemVariants}
                className="flex items-center bg-dark-blue-800/50 backdrop-blur-sm rounded-2xl p-1.5 sm:p-2 mb-6 sm:mb-8 border border-dark-blue-600/30 space-x-1"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      activeTab === tab.id
                        ? "text-white bg-accent-blue-500 shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-dark-blue-700/50"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-accent-blue-500 rounded-xl -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                ))}
              </motion.div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-[300px] sm:min-h-[400px]"
              >
                {activeTab === "overview" && (
                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-gradient-to-br from-dark-blue-700/30 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-dark-blue-600/30">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-blue-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                        <FaRocket className="text-accent-blue-500 text-lg sm:text-xl" />
                        Frontend Developer & Problem Solver
                      </h3>

                      <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        <p>
                          Hey there! I'm Ahmed, a passionate frontend developer
                          with over{" "}
                          <span className="text-accent-blue-400 font-semibold">
                            2 years of experience
                          </span>{" "}
                          creating beautiful and functional web applications. My
                          journey in tech started with curiosity about how
                          websites work, and it has evolved into a deep love for
                          creating seamless user experiences.
                        </p>

                        <p>
                          I specialize in{" "}
                          <span className="text-accent-blue-400 font-semibold">
                            React, Next.js, and React Native
                          </span>
                          , bringing ideas to life through clean, efficient
                          code. I'm constantly learning new technologies and
                          staying up-to-date with the latest industry trends to
                          deliver cutting-edge solutions.
                        </p>

                        <p>
                          What drives me is the perfect blend of{" "}
                          <span className="text-accent-blue-400 font-semibold">
                            creativity and logic
                          </span>{" "}
                          that programming offers. Every project is a new puzzle
                          to solve, and I love the challenge of turning complex
                          problems into elegant, user-friendly solutions.
                        </p>
                      </div>
                    </div>

                    {/* Personal Information Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {personalInfo.map((info, index) => (
                        <motion.div
                          key={info.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-dark-blue-700/30 backdrop-blur-sm rounded-xl border border-dark-blue-600/30 hover:border-accent-blue-500/30 transition-all duration-300"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon
                              className="text-accent-blue-400"
                              size={16}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs sm:text-sm text-gray-400 font-medium">
                              {info.label}
                            </p>
                            <p className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                              {info.value}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "tech" && (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {techStack.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-dark-blue-600/30 hover:border-accent-blue-500/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-blue-800/50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <tech.icon className={`${tech.color} text-lg sm:text-2xl`} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-white font-bold text-base sm:text-lg">
                                {tech.name}
                              </h4>
                              <p className="text-gray-400 text-xs sm:text-sm">
                                Professional experience with this technology
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "interests" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-dark-blue-600/30 hover:border-accent-blue-500/30 transition-all duration-300 text-center group"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent-blue-500/20 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-accent-blue-500/30 transition-colors duration-300">
                          <interest.icon className="text-accent-blue-400 text-lg sm:text-2xl" />
                        </div>
                        <h4 className="text-white font-bold text-base sm:text-lg mb-2">
                          {interest.name}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{interest.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Achievements */}
            <div className="lg:col-span-4">
              <motion.div variants={itemVariants} className="lg:sticky lg:top-24">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <FaTrophy className="text-accent-blue-500 text-lg sm:text-xl" />
                  Key Highlights
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="bg-gradient-to-br from-dark-blue-700/50 to-dark-blue-600/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-dark-blue-600/30 hover:border-accent-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="text-accent-blue-400 text-lg sm:text-xl" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xl sm:text-2xl font-bold text-accent-blue-400">
                            {achievement.number}
                          </h4>
                          <p className="text-white font-semibold text-sm sm:text-base">
                            {achievement.label}
                          </p>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            {achievement.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-dark-blue-700/50 to-dark-blue-600/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-dark-blue-600/30">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Let's collaborate and bring your ideas to life with cutting-edge
                technology.
              </p>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(100, 116, 139, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent-blue-500 to-accent-blue-400 hover:from-accent-blue-400 hover:to-accent-blue-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaRocket className="animate-bounce text-sm sm:text-base" />
                <span className="text-sm sm:text-base">Let's Work Together</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
