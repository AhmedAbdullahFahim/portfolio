import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaReact,
  FaMobile,
  FaTools,
  FaLaptopCode,
  FaCertificate,
  FaMedal,
  FaRocket,
  FaStar,
  FaBuilding,
  FaUniversity,
} from "react-icons/fa";
import { useMobile } from "../hooks/useMobile";

const Experience = () => {
  const { isMobile } = useMobile();
  const [ref, inView] = useInView({
    threshold: isMobile ? 0.1 : 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: isMobile ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.15,
        duration: isMobile ? 0 : 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      title: "Frontend Developer",
      company: "RDI",
      location: "Giza, Egypt",
      period: "April 2025 - Present",
      type: "Full-time",
      status: "current",
      description:
        "Building dynamic and responsive UIs, delivering polished user experiences aligned with design specifications.",
      achievements: [
        "Integrated with RESTful APIs, ensuring smooth data flow and real-time interactivity across components",
        "Wrote unit tests to maintain code quality and prevent regressions to a stable software codebase",
        "Implemented real-time features using SSE (Server-Sent Events) and WebSocket connections for live data updates",
      ],
      technologies: [
        "React",
        "Typescript",
        "RESTful APIs",
        "Unit Testing",
        "CI/CD",
      ],
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile Developer",
      company: "Ether Technology",
      location: "Giza, Egypt",
      period: "October 2024 - April 2025",
      type: "Full-time",
      status: "completed",
      description:
        "Worked on mobile applications using React Native and Expo, implementing new user flows and resolving bugs.",
      achievements: [
        "Used EAS for over-the-air updates and build distribution, streamlining the deployment process",
        "Deployed apps to both the Google Play Store and App Store, complying with platform requirements",
        "Improved app performance through native module optimization and efficient state management",
      ],
      technologies: ["React Native", "Expo", "EAS", "Mobile Development"],
      icon: FaMobile,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Frontend Developer",
      company: "Uniparticle",
      location: "Cairo, Egypt",
      period: "June 2023 - September 2024",
      type: "Full-time",
      status: "completed",
      description:
        "Developed and maintained detailed design, ensuring high performance and scalability across different platforms.",
      achievements: [
        "Implemented Next.js for server-side rendering and optimized page loading for enhanced user experience",
        "Utilized React Native to build cross-platform apps with native-like experiences, maximizing reach and usability",
        "Collaborated with design team to deliver pixel-perfect UI components, maintaining design consistency",
      ],
      technologies: [
        "Next.js",
        "React",
        "React Native",
        "Tailwind CSS",
        "Server-side Rendering",
        "Firebase",
      ],
      icon: FaRocket,
      color: "from-green-500 to-teal-500",
    },
  ];

  const education = {
    degree: "BS of Computer Science",
    school: "Ain Shams University",
    location: "Cairo, Egypt",
    period: "2017 - 2021",
    gpa: "3.9",
  };

  const stats = [
    {
      icon: FaRocket,
      label: "Projects Delivered",
      value: "15+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaUniversity,
      label: "Team Collaborations",
      value: "3",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: FaMedal,
      label: "Technologies Mastered",
      value: "12+",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24 bg-dark-blue-900/50 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMobile ? null : (
          <>
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl"
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-blue-500 to-accent-blue-400 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg shadow-accent-blue-500/25"
            >
              <FaBriefcase className="text-white text-lg sm:text-2xl" />
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
              Experience & Education
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              A timeline of my professional growth, education, and achievements in software development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-12">
            {/* Work Experience */}
            <div className="lg:col-span-3">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <FaBriefcase size={20} className="text-white sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Work Experience
                </h3>
              </motion.div>

              <div className="relative">
                {/* Timeline line - hidden on mobile, visible on larger screens */}
                <div className="hidden sm:block absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full" />
                <div className="hidden sm:block absolute left-5 lg:left-7 top-0 bottom-0 w-2 sm:w-3 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm" />

                <div className="space-y-6 sm:space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative flex flex-col sm:flex-row gap-4 sm:gap-8"
                    >
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 relative sm:static">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center relative z-10 shadow-2xl mx-auto sm:mx-0`}
                        >
                          <exp.icon size={18} className="text-white sm:w-6 sm:h-6" />
                          {exp.status === "current" && (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"
                            />
                          )}
                        </motion.div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-30`} />
                      </div>

                      {/* Enhanced Content */}
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          y: -5,
                        }}
                        className="flex-1 group relative"
                      >
                        {/* Glass morphism card */}
                        <div className="relative p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl hover:border-white/20 transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                                    {exp.title}
                                  </h4>
                                  {exp.status === "current" && (
                                    <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm font-medium border border-green-500/30 w-fit">
                                      Current
                                    </span>
                                  )}
                                </div>
                                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                                  {exp.company}
                                </p>
                                <p className="text-gray-400 font-medium text-sm sm:text-base">
                                  {exp.type}
                                </p>
                              </div>

                              <div className="text-gray-400 lg:text-right mt-3 lg:mt-0">
                                <div className="flex items-center gap-2 mb-1 sm:mb-2 lg:justify-end">
                                  <FaCalendarAlt
                                    size={14}
                                    className="text-blue-400 flex-shrink-0"
                                  />
                                  <span className="font-medium text-sm sm:text-base">
                                    {exp.period}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 lg:justify-end">
                                  <FaMapMarkerAlt
                                    size={14}
                                    className="text-cyan-400 flex-shrink-0"
                                  />
                                  <span className="text-sm sm:text-base">{exp.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                              {exp.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-4 sm:mb-6">
                              <h5 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                                <FaStar size={14} className="text-yellow-400 flex-shrink-0" />
                                Key Achievements
                              </h5>
                              <ul className="space-y-2 sm:space-y-3">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-300 flex items-start gap-2 sm:gap-3 group/item text-sm sm:text-base"
                                  >
                                    <span className="text-blue-400 group-hover/item:text-cyan-400 transition-colors flex-shrink-0 mt-1">
                                      •
                                    </span>
                                    <span className="leading-relaxed">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                                Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                  <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30 hover:border-cyan-500/50 transition-all duration-300"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Additional Info */}
            <div className="space-y-6 sm:space-y-8">
              {/* Education */}
              <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <FaGraduationCap size={18} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {education.degree}
                    </h4>
                    <p className="text-purple-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      {education.school}
                    </p>
                    <div className="space-y-2 sm:space-y-3 text-sm">
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                        <FaCalendarAlt size={12} className="text-purple-400 flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                        <span className="text-xs sm:text-sm">{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                        <FaMapMarkerAlt size={12} className="text-pink-400 flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                        <span className="text-xs sm:text-sm">{education.location}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-gray-300">GPA: {education.gpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Expertise Areas */}
              <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Expertise Areas
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      name: "Frontend Development",
                      color: "from-blue-500 to-cyan-500",
                      description: "Building responsive, interactive user interfaces with modern frameworks",
                    },
                    {
                      name: "Mobile Development",
                      color: "from-purple-500 to-pink-500",
                      description: "Creating cross-platform mobile applications with React Native",
                    },
                    {
                      name: "UI/UX Implementation",
                      color: "from-green-500 to-teal-500",
                      description: "Translating designs into pixel-perfect, responsive experiences",
                    },
                    {
                      name: "API Integration",
                      color: "from-orange-500 to-red-500",
                      description: "Connecting frontend applications with backend services",
                    },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${skill.color} flex-shrink-0 mt-1`} />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-white font-medium text-sm sm:text-base lg:text-lg">
                            {skill.name}
                          </h4>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
