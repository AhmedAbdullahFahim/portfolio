import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaRocket,
  FaArrowUp,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/AhmedAbdullahFahim",
      label: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-700/20",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ahmed-abdullah-fahim/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },
    {
      icon: FaEnvelope,
      href: "mailto:ahmed.abdallah5022@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/20",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ahmed.abdallah5022@gmail.com",
      href: "mailto:ahmed.abdallah5022@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+201062535799",
      href: "tel:+201062535799",
      color: "text-green-400",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Cairo, Egypt",
      href: "#",
      color: "text-purple-400",
    },
  ];

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

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-blue-900/50 backdrop-blur-sm border-t border-dark-blue-700/50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-accent-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue-300/3 rounded-full blur-3xl" />

        {/* Floating Code Elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-40 text-accent-blue-400/10 text-6xl"
        >
          <FaCode />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-40 text-accent-blue-500/10 text-4xl"
        >
          <FaRocket />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Enhanced Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-dark-blue-600/30 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-blue-500 to-accent-blue-400 rounded-xl flex items-center justify-center">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent-blue-400">
                    Ahmed Fahim
                  </h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Frontend Developer specialized in React, Next.js and React
                  Native. Passionate about creating beautiful and functional
                  digital experiences that make a difference.
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <FaStar className="text-yellow-400" />
                  <span className="text-gray-300 text-sm">
                    Available for new projects
                  </span>
                </div>

                {/* Enhanced Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-12 h-12 bg-dark-blue-800/40 backdrop-blur-sm rounded-xl border border-dark-blue-600/30 hover:border-accent-blue-500/30 flex items-center justify-center text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300 group`}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Quick Links */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-dark-blue-600/30 h-full">
                <h4 className="text-xl font-bold text-accent-blue-400 mb-6 flex items-center gap-2">
                  <FaRocket className="text-accent-blue-500" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-accent-blue-400 transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-accent-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-dark-blue-600/30 h-full">
                <h4 className="text-xl font-bold text-accent-blue-400 mb-6 flex items-center gap-2">
                  <FaEnvelope className="text-accent-blue-500" />
                  Get In Touch
                </h4>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
                    >
                      <div
                        className={`w-8 h-8 ${info.color} bg-opacity-20 rounded-lg flex items-center justify-center`}
                      >
                        <info.icon className={`${info.color} text-sm`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Copyright Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-dark-blue-700/50 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <p className="text-gray-400 flex items-center gap-2">
                  © {currentYear} Ahmed Fahim. Made with
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaHeart className="text-red-500" />
                  </motion.span>
                  and lots of tea ☕
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-sm">
                  Built with React & Tailwind CSS
                </span>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-accent-blue-500/20 hover:bg-accent-blue-500/30 rounded-full flex items-center justify-center text-accent-blue-400 hover:text-accent-blue-300 transition-all duration-300"
                  title="Back to top"
                >
                  <FaArrowUp size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
