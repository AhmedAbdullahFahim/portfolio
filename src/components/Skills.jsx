import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaMagic,
  FaMobile,
  FaReact,
  FaRocket,
  FaTools,
  FaSync,
  FaCubes,
} from "react-icons/fa";
import {
  SiExpo,
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState("all");

  // Scroll behavior disabled - maintain current scroll position when filtering
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const skillsSection = document.getElementById("skills");
  //     if (skillsSection) {
  //       const rect = skillsSection.getBoundingClientRect();
  //       const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
  //       
  //       if (!isVisible) {
  //         skillsSection.scrollIntoView({ 
  //           behavior: "smooth", 
  //           block: "start" 
  //         });
  //       }
  //     }
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, [activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 1.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    {
      name: "React",
      level: 95,
      category: "frontend",
      icon: FaReact,
      color: "text-blue-400",
      description: "Building dynamic user interfaces",
    },
    {
      name: "JavaScript",
      level: 95,
      category: "language",
      icon: FaJs,
      color: "text-yellow-400",
      description: "Core programming language",
    },
    {
      name: "TypeScript",
      level: 90,
      category: "language",
      icon: SiTypescript,
      color: "text-blue-500",
      description: "Type-safe JavaScript development",
    },
    {
      name: "Next.js",
      level: 90,
      category: "frontend",
      icon: SiNextdotjs,
      color: "text-white",
      description: "Full-stack React framework",
    },
    {
      name: "React Native",
      level: 85,
      category: "mobile",
      icon: FaMobile,
      color: "text-cyan-400",
      description: "Cross-platform mobile development",
    },
    {
      name: "Expo",
      level: 80,
      category: "mobile",
      icon: SiExpo,
      color: "text-white",
      description: "Mobile app development platform",
    },
    {
      name: "Reanimated",
      level: 82,
      category: "mobile",
      icon: FaMagic,
      color: "text-purple-400",
      description: "React Native animation library",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      category: "styling",
      icon: SiTailwindcss,
      color: "text-teal-400",
      description: "Utility-first CSS framework",
    },
    {
      name: "HTML/CSS",
      level: 95,
      category: "styling",
      icon: FaHtml5,
      color: "text-orange-500",
      description: "Semantic markup and styling",
    },
    {
      name: "Git",
      level: 85,
      category: "tools",
      icon: FaGitAlt,
      color: "text-orange-600",
      description: "Version control and collaboration",
    },
    {
      name: "REST APIs",
      level: 95,
      category: "backend",
      icon: FaDatabase,
      color: "text-green-400",
      description: "API integration and data fetching",
    },
    {
      name: "Redux/Toolkit",
      level: 85,
      category: "frontend",
      icon: SiRedux,
      color: "text-purple-500",
      description: "State management for React applications",
    },
    {
      name: "React Query",
      level: 88,
      category: "frontend",
      icon: FaSync,
      color: "text-indigo-400",
      description: "Data fetching and synchronization library",
    },
    {
      name: "Radix UI",
      level: 82,
      category: "frontend",
      icon: FaCubes,
      color: "text-emerald-400",
      description: "Headless UI components for building design systems",
    },
    {
      name: "Firebase",
      level: 80,
      category: "backend",
      icon: SiFirebase,
      color: "text-orange-400",
      description: "Backend-as-a-service platform",
    },
    {
      name: "SSE",
      level: 80,
      category: "backend",
      icon: FaRocket,
      color: "text-blue-500",
      description: "Server-Sent Events for real-time updates",
    },
    {
      name: "WebSocket",
      level: 80,
      category: "backend",
      icon: FaDatabase,
      color: "text-cyan-500",
      description: "Real-time bidirectional communication",
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Skills",
      icon: FaCode,
      color: "text-accent-blue-400",
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: FaLaptopCode,
      color: "text-blue-400",
    },
    { id: "mobile", name: "Mobile", icon: FaMobile, color: "text-cyan-400" },
    {
      id: "language",
      name: "Languages",
      icon: FaCode,
      color: "text-yellow-400",
    },
    { id: "styling", name: "Styling", icon: FaCss3Alt, color: "text-pink-400" },
    {
      id: "backend",
      name: "Backend",
      icon: FaDatabase,
      color: "text-green-400",
    },
    { id: "tools", name: "Tools", icon: FaTools, color: "text-gray-400" },
  ];

  const expertiseAreas = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive, interactive user interfaces with modern React ecosystem",
      icon: FaReact,
      color: "text-blue-400",
      skills: ["React", "Next.js", "JavaScript", "TypeScript"],
      level: 95,
    },
    {
      title: "Mobile Development",
      description:
        "Building cross-platform mobile applications with React Native and Expo",
      icon: FaMobile,
      color: "text-cyan-400",
      skills: ["React Native", "Expo", "Reanimated"],
      level: 90,
    },
    {
      title: "UI/UX Implementation",
      description:
        "Translating designs into pixel-perfect, responsive web experiences",
      icon: FaCss3Alt,
      color: "text-pink-400",
      skills: ["Tailwind CSS", "HTML/CSS", "Responsive Design"],
      level: 90,
    },
    {
      title: "API Integration",
      description:
        "Connecting frontend applications with backend services and APIs",
      icon: FaDatabase,
      color: "text-green-400",
      skills: ["REST APIs", "Firebase", "Data Fetching"],
      level: 88,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-blue-300/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-accent-blue-500 to-accent-blue-400 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-accent-blue-500/25"
            >
              <FaRocket className="text-white text-2xl" />
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
              Technical Skills
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I use to bring innovative ideas to life
            </p>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-dark-blue-600/30 hover:border-accent-blue-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-blue-500/20 to-accent-blue-400/10 rounded-2xl flex items-center justify-center group-hover:from-accent-blue-500/30 group-hover:to-accent-blue-400/20 transition-all duration-300">
                  <area.icon className={`${area.color} text-2xl`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                <div className="flex justify-center mb-4">
                  <div className="w-full bg-dark-blue-800/80 border border-dark-blue-600/50 rounded-full">
                    <motion.div
                      className="bg-gradient-to-r from-accent-blue-500 to-accent-blue-400 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${area.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-accent-blue-500/20 text-accent-blue-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-accent-blue-500 text-white shadow-lg shadow-accent-blue-500/25"
                    : "bg-dark-blue-800/50 text-gray-400 hover:text-white hover:bg-dark-blue-700/50 border border-dark-blue-600/30"
                }`}
              >
                <category.icon
                  className={`text-sm ${
                    activeCategory === category.id
                      ? "text-white"
                      : category.color
                  }`}
                />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-dark-blue-600/30 hover:border-accent-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-dark-blue-800/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className={`${skill.color} text-2xl`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent-blue-400 font-bold text-xl">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-dark-blue-700/90 border border-dark-blue-600/60 rounded-full shadow-inner">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-accent-blue-500 to-accent-blue-400 rounded-full relative shadow-sm"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-dark-blue-700/30 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-dark-blue-600/30"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                <FaTools className="text-accent-blue-500" />
                Development Tools & Environment
              </h3>
              <p className="text-gray-400">
                Essential tools that power my development workflow
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "VS Code", icon: FaCode, color: "text-blue-400" },
                { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
                { name: "Postman", icon: SiPostman, color: "text-orange-500" },
                { name: "Figma", icon: SiFigma, color: "text-purple-400" },
                { name: "Vercel", icon: SiVercel, color: "text-white" },
                {
                  name: "Firebase",
                  icon: SiFirebase,
                  color: "text-orange-400",
                },
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-4 bg-dark-blue-800/30 rounded-xl border border-dark-blue-600/30 hover:border-accent-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mb-3 bg-dark-blue-800/50 rounded-lg flex items-center justify-center group-hover:bg-accent-blue-500/20 transition-colors duration-300">
                    <tool.icon className={`${tool.color} text-2xl`} />
                  </div>
                  <span className="text-white font-medium text-sm">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
