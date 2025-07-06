import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaMobile,
  FaRocket,
  FaStar,
  FaAward,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      icon: FaChartLine,
      label: "Years Experience",
      value: "2+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaRocket,
      label: "Projects Delivered",
      value: "15+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaUsers,
      label: "Team Collaborations",
      value: "3",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: FaAward,
      label: "Technologies Mastered",
      value: "12+",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-dark-blue-900/50 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
                    {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-accent-blue-500 to-accent-blue-400 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-accent-blue-500/25"
            >
              <FaBriefcase className="text-white text-2xl" />
            </motion.div>
            <h2
              className="text-4xl md:text-6xl font-black mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #cbd5e1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
              }}
            >
              Experience & Education
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A timeline of my professional growth, education, and achievements in software development
            </p>
          </motion.div>

          {/* Stats Cards */}
          {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}
                  >
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Work Experience */}
            <div className="lg:col-span-3">
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 mb-12"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <FaBriefcase size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Work Experience
                </h3>
              </motion.div>

                             <div className="relative">
                 {/* Simple Timeline line */}
                 <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full" />
                 <div className="absolute left-7 top-0 bottom-0 w-3 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm" />

                                 <div className="space-y-12">
                   {experiences.map((exp, index) => (
                     <motion.div
                       key={index}
                       variants={itemVariants}
                       className="relative flex gap-8"
                     >
                                             {/* Timeline dot */}
                       <div className="flex-shrink-0 relative">
                         <motion.div
                           whileHover={{ scale: 1.2 }}
                           className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center relative z-10 shadow-2xl`}
                         >
                           <exp.icon size={24} className="text-white" />
                           {exp.status === "current" && (
                             <motion.div
                               animate={{ scale: [1, 1.2, 1] }}
                               transition={{ duration: 2, repeat: Infinity }}
                               className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
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
                        <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-2xl font-bold text-white">
                                    {exp.title}
                                  </h4>
                                  {exp.status === "current" && (
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                                      Current
                                    </span>
                                  )}
                                </div>
                                <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                                  {exp.company}
                                </p>
                                <p className="text-gray-400 font-medium">
                                  {exp.type}
                                </p>
                              </div>

                              <div className="text-gray-400 lg:text-right mt-4 lg:mt-0">
                                <div className="flex items-center gap-2 mb-2 lg:justify-end">
                                  <FaCalendarAlt
                                    size={16}
                                    className="text-blue-400"
                                  />
                                  <span className="font-medium">
                                    {exp.period}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 lg:justify-end">
                                  <FaMapMarkerAlt
                                    size={16}
                                    className="text-cyan-400"
                                  />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                              {exp.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-6">
                              <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <FaStar size={16} className="text-yellow-400" />
                                Key Achievements
                              </h5>
                              <ul className="space-y-3">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-300 flex items-start gap-3 group/item"
                                  >
                                    <span className="text-blue-400 group-hover/item:text-cyan-400 transition-colors">
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
                              <h5 className="text-white font-semibold mb-3">
                                Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                  <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-cyan-500/50 transition-all duration-300"
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
            <div className="space-y-8">
              {/* Education */}
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <FaGraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {education.degree}
                    </h4>
                    <p className="text-purple-400 font-semibold mb-4">
                      {education.school}
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-gray-400">
                        <FaCalendarAlt size={14} className="text-purple-400" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <FaMapMarkerAlt size={14} className="text-pink-400" />
                        <span>{education.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3.5 h-3.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span>GPA: {education.gpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Skills Progress */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Expertise Areas
                </h3>

                <div className="space-y-4">
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
                      className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <div>
                          <h4 className="text-white font-medium text-lg">
                            {skill.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
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
