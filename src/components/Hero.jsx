import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaRocket,
  FaStar,
} from "react-icons/fa";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/AhmedAbdullahFahim",
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ahmed-abdullah-fahim/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaEnvelope,
      href: "mailto:ahmed.abdallah5022@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
    },
    {
      icon: FaPhone,
      href: "tel:+201062535799",
      label: "Phone",
      color: "hover:text-yellow-400",
    },
  ];

  const skills = ["TypeScript", "React", "Next.js", "React Native", "Expo"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-dark-blue-900"></div>

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(100, 116, 139, 0.3) 0%, transparent 70%)`,
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent-blue-400/10 to-accent-blue-300/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent-blue-500/10 to-accent-blue-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        {/* Code symbols */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-accent-blue-400/20 text-2xl font-mono"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {["</", "/>", "{}", "[]", "()", "=>", "&&", "||"][i]}
          </motion.div>
        ))}

        {/* Floating particles with varied sizes */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "w-1 h-1 bg-accent-blue-400"
                : i % 3 === 1
                ? "w-2 h-2 bg-accent-blue-300"
                : "w-0.5 h-0.5 bg-accent-blue-500"
            } opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-accent-blue-500/10 backdrop-blur-sm border border-accent-blue-400/20 text-accent-blue-400 px-4 py-2 rounded-full text-sm font-medium"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            Available for new opportunities
          </motion.div>
        </motion.div>

        {/* Enhanced Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-accent-blue-400 text-xl font-semibold tracking-wide">
            Hello, I'm
          </span>
        </motion.div>

        {/* Enhanced Name with Multiple Effects */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-4 relative"
                         style={{
               background:
                 "linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #e2e8f0 70%, #cbd5e1 100%)",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
               backgroundClip: "text",
               textShadow: "0 0 60px rgba(255, 255, 255, 0.8), 0 0 30px rgba(100, 116, 139, 0.3)",
             }}
          >
            Ahmed Fahim
          </motion.h1>

          {/* Underline decoration */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: inView ? "100%" : 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1 bg-gradient-to-r from-accent-blue-500 via-accent-blue-400 to-accent-blue-300 mx-auto max-w-md rounded-full"
          />
        </motion.div>

        {/* Enhanced Role with Typing Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Frontend Developer
            </motion.span>
          </div>

          {/* Rotating Skills */}
          <motion.div
            className="text-lg md:text-xl text-accent-blue-400 font-medium"
            variants={itemVariants}
          >
            <span>Specialized in </span>
            <motion.span
              key="skills"
              className="inline-block border-b-2 border-accent-blue-400/50"
            >
              React, Next.js & React Native
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Passionate frontend developer with{" "}
          <span className="text-accent-blue-400 font-semibold">2+ years</span>{" "}
          of experience crafting beautiful, responsive web applications and
          mobile apps. I transform ideas into
          <span className="text-accent-blue-400 font-semibold">
            {" "}
            elegant digital experiences
          </span>{" "}
          that users love.
        </motion.p>

        {/* Skill Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-accent-blue-500/10 backdrop-blur-sm border border-accent-blue-400/20 text-accent-blue-400 rounded-full text-sm font-medium cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(100, 116, 139, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-accent-blue-500 to-accent-blue-400 hover:from-accent-blue-400 hover:to-accent-blue-300 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl overflow-hidden"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaRocket className="group-hover:animate-bounce" />
              View My Work
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1gSNH32CG4RtAlDzoe4NNPmXYoFwtJpnp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border-2 border-accent-blue-400 text-accent-blue-400 hover:bg-accent-blue-500 hover:text-white hover:border-accent-blue-500 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaStar className="group-hover:animate-spin" />
              Download CV
            </span>
          </motion.a>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8 mb-20"
        >
          <span className="text-gray-400 text-sm font-medium">
            Connect with me
          </span>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.3,
                  y: -8,
                  rotate: [0, -10, 10, 0],
                }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-dark-blue-800/50 backdrop-blur-sm border border-dark-blue-600/30 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-blue-500/25`}
                title={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="flex flex-col items-center cursor-pointer group"
            onClick={() =>
              document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-accent-blue-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll to explore
            </span>
            <motion.div
              className="w-6 h-10 border-2 border-accent-blue-400 rounded-full flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-accent-blue-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
