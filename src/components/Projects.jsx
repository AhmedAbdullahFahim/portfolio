import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaExternalLinkAlt,
  FaCode,
  FaMobile,
  FaGlobe,
  FaRocket,
  FaStar,
  FaPlay,
  FaDesktop,
  FaLaptopCode,
  FaChartLine,
  FaServer,
} from "react-icons/fa";
import { useMobile } from "../hooks/useMobile";

const Projects = () => {
  const { isMobile } = useMobile();
  
  const [ref, inView] = useInView({
    threshold: isMobile ? 0.1 : 0.2,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.15,
        duration: isMobile ? 0.5 : 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Glancers Platform",
      description:
        "A comprehensive application structure for two different types of users, maintaining routed routes for each type with responsive design and Arabic language support.",
      category: "web",
      technologies: [
        "JavaScript",
        "Next.js",
        "Redux Toolkit",
        "React Hook Form",
        "SASS",
        "Tailwind CSS",
        "Lottie",
        "Framer Motion",
      ],
      features: [
        "Responsive design with Arabic language support",
        "Integrated with third-party Google Cloud Storage to build push notifications",
        "Maintained with async and data uploading files",
        "Multi-user role management system",
        "Real-time notifications and updates",
        "Advanced routing system for different user types",
      ],
      links: {
        live: "#",
      },
      status: "featured",
      icon: FaDesktop,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Server Management Platform",
      description:
        "Built using TypeScript, React, and Zustand for React Query. Features admin features enabling admins to manage user types: operators and administrators.",
      category: "web",
      technologies: ["TypeScript", "React", "Zustand", "React Query", "Radix UI"],
      features: [
        "Implemented functionality for operators to manually control or schedule tasks on assigned servers",
        "Developed comprehensive admin features including user management, access control, log monitoring",
        "Real-time server monitoring dashboard",
        "Automated task scheduling system",
        "Advanced permission and role-based access control",
        "Server health monitoring with alerts and notifications",
      ],
      links: {
        live: "#",
      },
      status: "production",
      icon: FaLaptopCode,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Real-Time Logging Platform",
      description:
        "A sophisticated monitoring platform that integrates with WebSocket APIs to display machine metrics in real-time and SSE APIs for live application and request logs.",
      category: "web",
      technologies: [
        "React",
        "TypeScript",
        "React Query",
        "Material UI",
        "WebSocket",
        "SSE",
      ],
      features: [
        "Real-time machine metrics visualization through WebSocket integration",
        "Live application and request logs streaming via Server-Sent Events (SSE)",
        "Interactive dashboards with customizable metric displays",
        "Advanced filtering and search capabilities for log analysis",
        "Performance monitoring with alerts and thresholds",
        "Responsive design with Material UI components",
      ],
      links: {
        live: "#",
      },
      status: "production",
      icon: FaChartLine,
      gradient: "from-emerald-500 to-blue-500",
    },
    {
      id: 4,
      title: "Kazbana Kazabana",
      description:
        "Developed the entire UI of the application and added some filtering animations using Reanimated, adding different sounds to each step.",
      category: "mobile",
      technologies: [
        "JavaScript",
        "React Native",
        "Reanimated",
        "Redux Toolkit",
        "Lottie",
      ],
      features: [
        "Built spin wheel flow with multiple iterations using Reanimated",
        "Structured the app navigation stacks that later achieved smooth navigation",
        "Implemented payment iframe in app to handle payment flow",
        "Interactive animations and sound effects",
        "Optimized performance for smooth gameplay",
        "Custom audio integration for enhanced user experience",
      ],
      links: {
        live: "#",
      },
      status: "featured",
      icon: FaMobile,
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      title: "Nassab and AI Rajhi Family Apps",
      description:
        "Contributed in adding new features UI design and integrated with backend APIs. Refactored existing code for better performance.",
      category: "mobile",
      technologies: [
        "JavaScript",
        "React Native",
        "Redux Toolkit",
        "Expo",
        "EAS",
      ],
      features: [
        "Debugged and resolved issues related to frontend processing",
        "Available on both iOS and Android platforms",
        "Enhanced user experience with new features",
        "Improved app performance and stability",
        "Implemented comprehensive state management",
        "Optimized API integration and data handling",
      ],
      links: {
        live: "#",
      },
      status: "production",
      icon: FaMobile,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: "AMAN Super App",
      description:
        "Contributed in adding new features UI design and integrated with backend APIs. Refactored existing code for better performance.",
      category: "mobile",
      technologies: ["JavaScript", "React Native", "Redux Toolkit"],
      features: [
        "Developed comprehensive UI components following design specifications",
        "Integrated multiple backend APIs for different app functionalities",
        "Implemented Redux Toolkit for efficient state management",
        "Optimized app performance through code refactoring",
        "Enhanced user experience with smooth navigation",
        "Maintained high code quality and documentation standards",
      ],
      links: {
        live: "#",
      },
      status: "production",
      icon: FaServer,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Projects",
      icon: FaRocket,
      color: "text-accent-blue-400",
      count: projects.length,
    },
    {
      id: "web",
      name: "Web Apps",
      icon: FaGlobe,
      color: "text-blue-400",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      name: "Mobile Apps",
      icon: FaMobile,
      color: "text-cyan-400",
      count: projects.filter((p) => p.category === "mobile").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case "featured":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "production":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-dark-blue-900/50 overflow-hidden"
    >
      {/* Floating Background Elements - Disabled on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-2xl"
          />
        </div>
      )}

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
              initial={{ scale: 0, rotate: isMobile ? 0 : -180 }} // No rotation on mobile
              animate={
                inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: isMobile ? 0 : -180 }
              }
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.1 : 0.2 }} // Faster on mobile
              className="w-16 h-16 bg-gradient-to-br from-accent-blue-500 to-accent-blue-400 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-accent-blue-500/25"
            >
              <FaRocket className="text-white text-2xl" />
            </motion.div>
            <h2
              className="text-4xl md:text-6xl font-black mb-6 leading-tight" // Increased line height
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #cbd5e1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
                lineHeight: "1.3", // Explicit line height increase
              }}
            >
              Featured Projects
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              A showcase of my professional work and innovative solutions across
              web and mobile platforms
            </p>
          </motion.div>

          {/* Enhanced Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={isMobile ? {} : { scale: 1.05, y: -2 }} // Disable hover animations on mobile
                whileTap={isMobile ? {} : { scale: 0.95 }} // Disable tap animations on mobile
                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 ${
                  filter === category.id
                    ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`p-2 rounded-xl bg-gradient-to-r ${
                    filter === category.id
                      ? "from-accent-blue-500 to-accent-blue-400"
                      : "from-gray-600 to-gray-500"
                  } transition-all duration-300`}
                >
                  <category.icon size={16} className="text-white" />
                </div>
                <span className="font-semibold">{category.name}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    filter === category.id
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={isMobile ? {} : { y: -10, scale: 1.02 }} // Disable hover animations on mobile
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project Content */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg`}
                    >
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                      <div className="flex items-center gap-1">
                        {project.category === "mobile" ? (
                          <FaMobile size={14} className="text-cyan-400" />
                        ) : (
                          <FaGlobe size={14} className="text-blue-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-blue-300 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <FaStar size={14} className="text-yellow-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-accent-blue-400">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-accent-blue-500/20 to-cyan-500/20 text-accent-blue-300 rounded-full text-sm font-medium border border-accent-blue-500/30 hover:border-cyan-500/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="relative inline-block">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-r from-accent-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"
              />
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  Let's discuss how I can help bring your next project to life
                </p>
                                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => {
                     const contactSection = document.getElementById('contact');
                     if (contactSection) {
                       contactSection.scrollIntoView({
                         behavior: 'smooth',
                         block: 'start'
                       });
                     }
                   }}
                   className="bg-gradient-to-r from-accent-blue-500 to-cyan-500 hover:from-accent-blue-400 hover:to-cyan-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-accent-blue-500/25 cursor-pointer"
                 >
                   Get In Touch
                 </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
