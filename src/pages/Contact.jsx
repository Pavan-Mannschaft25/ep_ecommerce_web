import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CTAButton from "../components/CTAButton";
import {
  FiMail,
  FiPhone,
  FiClock,
  FiMapPin,
  FiSend,
  FiCheck,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";

// Import hero image
import contactHero from "../assets/images/contact-us.avif";
import DownloadApp from "../components/DownloadApp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit the form to a backend
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  // Why contact us data
  const contactReasons = [
    {
      icon: <FiCheck className="text-xl" />,
      title: "Fitness class enquiries",
      description: "Questions about our classes, schedules, and trainers",
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "Trainer & booking support",
      description: "Help with finding the right trainer and booking sessions",
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "Protein product questions",
      description:
        "Information about our products, nutrition, and recommendations",
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "App & payment assistance",
      description: "Technical support for our app and payment issues",
    },
  ];

  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                CONNECT WITH US
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Talk Fitness & Nutrition
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Have a question about fitness classes, protein products, or the
                Eat Protein app? Our team is always ready to help you. Your
                health journey matters to us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We're Here To Help
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reach out to us through any of these channels and we'll get back
              to you as soon as possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                <FiMail className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">support@eatprotein.app</p>
              <p className="text-gray-500 text-sm">
                We usually respond within 24 hours
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                <FiPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">+91 XXXXX XXXXX</p>
              <p className="text-gray-500 text-sm">
                Available Monday to Saturday
              </p>
            </motion.div>

            {/* Support Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                <FiClock className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Support Hours
              </h3>
              <p className="text-gray-600 mb-2">10:00 AM – 7:00 PM (IST)</p>
              <p className="text-gray-500 text-sm">Sunday: Closed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                SEND US A MESSAGE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We'd Love To Hear From You
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our support team will get back to
                you shortly
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                    <FiCheck className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Full Name <span className="text-emerald-600">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        So we know who we're helping
                      </p>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address{" "}
                        <span className="text-emerald-600">*</span>
                      </label>
                      <p className="text-sm text-gray-500 mb-2">
                        To reply to your query
                      </p>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message <span className="text-emerald-600">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Tell us how we can help you
                    </p>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center"
                  >
                    <FiSend className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              WHY CONTACT US?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We're Here To Make Your Experience Smooth And Stress-Free
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              FOLLOW & STAY CONNECTED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Updated With Fitness Tips, Nutrition Advice, And App Updates
            </h2>
          </motion.div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FiInstagram className="text-2xl text-pink-600" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FiFacebook className="text-2xl text-blue-600" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FiYoutube className="text-2xl text-red-600" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FiLinkedin className="text-2xl text-blue-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready To Start Your Fitness Journey?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Join thousands of people who have transformed their lives with Eat
              Protein. Your journey to a healthier, stronger you starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                text="Download App"
                to="#"
                primary={true}
                className="bg-white text-emerald-600 hover:bg-gray-100"
              />
              <CTAButton
                text="Explore Fitness"
                to="#"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-600"
              />
            </div>
          </motion.div>
        </div>
      </section> */}
      <DownloadApp />
    </div>
  );
};

export default Contact;
