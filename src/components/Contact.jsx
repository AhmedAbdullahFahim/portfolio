import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaComments,
  FaRocket,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaHeart,
  FaMobile,
  FaDesktop,
} from "react-icons/fa";
import { useMobile } from "../hooks/useMobile";

const Contact = () => {
  const { isMobile } = useMobile();

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ahmed.abdallah5022@gmail.com",
      href: "mailto:ahmed.abdallah5022@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+201062535799",
      href: "tel:+201062535799",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Cairo, Egypt",
      href: "#",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/AhmedAbdullahFahim",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-abdullah-fahim/",
      color: "hover:text-blue-400",
    },
  ];

  const stats = [
    {
      icon: FaClock,
      value: "< 24h",
      label: "Response Time",
      desc: "Quick replies guaranteed",
    },
    {
      icon: FaCheckCircle,
      value: "100%",
      label: "Project Success",
      desc: "Delivered on time",
    },
    {
      icon: FaStar,
      value: "100%",
      label: "Code Quality",
      desc: "Clean, efficient code",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle form submission here
      console.log("Form submitted:", formData);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-dark-blue-800/50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements - Disabled on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue-300/3 rounded-full blur-3xl" />

          {/* Floating Shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-32 right-32 w-4 h-4 bg-accent-blue-400/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-32 left-32 w-6 h-6 bg-accent-blue-500/20 rounded-full"
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
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-accent-blue-500 to-accent-blue-400 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-accent-blue-500/25"
            >
              <FaComments className="text-white text-2xl" />
            </motion.div>
            <h2
              className="text-4xl md:text-6xl font-black mb-6 leading-tight"
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
              Let's Work Together
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can create
              something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Enhanced Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-br from-dark-blue-700/40 to-dark-blue-600/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-dark-blue-600/30">
                <h3 className="text-xl sm:text-2xl font-bold text-accent-blue-400 mb-4 lg:mb-6 flex items-center gap-3">
                  <FaRocket className="text-accent-blue-500 text-lg sm:text-xl" />
                  Get In Touch
                </h3>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 lg:mb-8">
                  I'm always excited to discuss new opportunities, interesting
                  projects, or potential collaborations. Whether you have a
                  specific project in mind or just want to connect, I'd love to
                  hear from you!
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-dark-blue-800/40 backdrop-blur-sm rounded-xl border border-dark-blue-600/20 hover:border-accent-blue-500/30 transition-all duration-300 group"
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${info.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className={`${info.color} text-lg sm:text-xl`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-gray-400 font-medium">
                          {info.label}
                        </p>
                        <p className="text-sm sm:text-base text-white font-semibold break-all">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Enhanced Social Links */}
                <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-dark-blue-600/30">
                  <p className="text-gray-400 mb-3 sm:mb-4 font-medium text-sm sm:text-base">
                    Connect with me:
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
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
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-dark-blue-800/40 backdrop-blur-sm rounded-xl border border-dark-blue-600/20 hover:border-accent-blue-500/30 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                        title={social.label}
                      >
                        <social.icon size={18} className="sm:text-xl" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-dark-blue-700/50 to-dark-blue-600/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-dark-blue-600/30"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-accent-blue-400 mb-4 lg:mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-accent-blue-500 text-lg sm:text-xl" />
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-blue-800/50 backdrop-blur-sm border border-dark-blue-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-blue-800/50 backdrop-blur-sm border border-dark-blue-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-blue-800/50 backdrop-blur-sm border border-dark-blue-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue-500 focus:ring-2 focus:ring-accent-blue-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project ideas, requirements, or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-blue-500 to-accent-blue-400 hover:from-accent-blue-400 hover:to-accent-blue-300 disabled:from-gray-600 disabled:to-gray-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-accent-blue-500/25 flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm sm:text-lg" />
                      <span className="text-sm sm:text-base">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-green-500/20 mt-12 lg:mt-16"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse" />
              <h4 className="text-xl sm:text-2xl font-bold text-green-400">
                Available for Projects
              </h4>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
                  Currently open to new opportunities and exciting
                  collaborations. Let's create something amazing together!
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <FaClock className="text-green-400 text-base sm:text-lg mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold mb-1 text-sm sm:text-base">
                        Quick Response
                      </h5>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        I typically respond within 24 hours and am ready to
                        start discussing your project immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaRocket className="text-green-400 text-base sm:text-lg mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold mb-1 text-sm sm:text-base">
                        Start Availability
                      </h5>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Available to start new projects immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaHeart className="text-green-400 text-base sm:text-lg mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold mb-1 text-sm sm:text-base">
                        Project Types
                      </h5>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Web applications, mobile apps, e-commerce sites, and
                        custom solutions using React & Next.js.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                  What You Can Expect
                </h5>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 text-xs sm:text-sm mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Clear communication throughout the project
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 text-xs sm:text-sm mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Regular updates and progress reports
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 text-xs sm:text-sm mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Clean, maintainable, and well-documented code
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 text-xs sm:text-sm mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Responsive design and modern UI/UX
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 text-xs sm:text-sm mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Post-launch support and maintenance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-400 text-xs sm:text-sm mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">
                      Timely delivery and professional approach
                    </span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-dark-blue-800/30 backdrop-blur-sm rounded-xl border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                    <span className="text-white font-semibold text-xs sm:text-sm">
                      Current Status
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Accepting new projects • Best response time: Weekdays
                    9AM-6PM (GMT+2)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-dark-blue-700/50 to-dark-blue-600/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-dark-blue-600/30">
              <FaHeart className="text-accent-blue-400 text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
                Let's turn your vision into reality. I'm here to help you create
                something extraordinary that stands out in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.a
                  href="mailto:ahmed.abdallah5022@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent-blue-500 to-accent-blue-400 hover:from-accent-blue-400 hover:to-accent-blue-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-accent-blue-500/25 justify-center"
                >
                  <FaEnvelope className="text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">Email Me</span>
                </motion.a>
                <motion.a
                  href="tel:+201062535799"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 sm:gap-3 bg-dark-blue-800/50 backdrop-blur-sm border border-dark-blue-600/50 hover:border-accent-blue-500/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 justify-center"
                >
                  <FaPhone className="text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">Call Me</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
