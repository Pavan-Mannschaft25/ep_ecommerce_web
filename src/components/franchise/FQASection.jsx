// import React from "react";
// import { FiChevronDown } from "react-icons/fi";

// const FAQSection = ({ isDarkMode }) => {
//   const [expandedFaq, setExpandedFaq] = React.useState(null);

//   const faqs = [
//     {
//       question: "What is the minimum investment required?",
//       answer:
//         "The minimum investment starts from ₹15 Lakhs for our pharmacy franchise model. This includes setup costs, equipment, initial inventory, and working capital. We also offer financing assistance through our banking partners.",
//       popular: true,
//     },
//     {
//       question: "How long does it take to break even?",
//       answer:
//         "On average, our franchise partners break even within 12-18 months. The exact timeline depends on the module, location, and market conditions. Some of our partners have achieved break-even in as little as 8 months.",
//       popular: false,
//     },
//     {
//       question: "What kind of support do you provide?",
//       answer:
//         "We provide comprehensive end-to-end support including: site selection assistance, complete setup guidance, staff training programs, marketing support, operational guidance, software systems, and ongoing business consulting. Our support team is available 24/7.",
//       popular: true,
//     },
//     {
//       question: "Do I need prior experience in healthcare?",
//       answer:
//         "No prior healthcare experience is required. We provide complete training and have a proven system that works for entrepreneurs from all backgrounds. What matters most is your passion for business and commitment to success.",
//       popular: false,
//     },
//     {
//       question: "What is the success rate of your franchises?",
//       answer:
//         "We have a 95% success rate across all our franchise modules. This is significantly higher than the industry average of 60%. Our proven business model, strong brand, and comprehensive support system contribute to this high success rate.",
//       popular: true,
//     },
//     {
//       question: "Can I own multiple franchises?",
//       answer:
//         "Yes, absolutely! Many of our successful partners own multiple locations. After your first franchise proves successful, we offer special incentives and priority support for expanding to additional locations.",
//       popular: false,
//     },
//   ];

//   return (
//     <section
//       id="faq"
//       className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2
//             className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
//           >
//             Frequently Asked Questions
//           </h2>
//           <p
//             className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
//           >
//             Everything you need to know about our franchises
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl mb-4 shadow-md`}
//             >
//               <button
//                 onClick={() =>
//                   setExpandedFaq(expandedFaq === index ? null : index)
//                 }
//                 className={`w-full px-6 py-4 text-left flex items-center justify-between ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors rounded-xl`}
//               >
//                 <div className="flex items-center space-x-3">
//                   {faq.popular && (
//                     <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
//                       Popular
//                     </span>
//                   )}
//                   <span
//                     className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}
//                   >
//                     {faq.question}
//                   </span>
//                 </div>
//                 <FiChevronDown
//                   className={`transform transition-transform ${expandedFaq === index ? "rotate-180" : ""} ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
//                   size={20}
//                 />
//               </button>
//               {expandedFaq === index && (
//                 <div
//                   className={`px-6 pb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
//                 >
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState, useMemo } from "react";
import {
  FiChevronDown,
  FiSearch,
  FiHelpCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiSend,
} from "react-icons/fi";

const FAQSection = ({ isDarkMode }) => {
  const [expandedFaq, setExpandedFaq] = React.useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    question: "",
  });

  const faqs = [
    {
      question: "What is the minimum investment required?",
      answer:
        "The minimum investment starts from ₹15 Lakhs for our pharmacy franchise model. This includes setup costs, equipment, initial inventory, and working capital. We also offer financing assistance through our banking partners.",
      popular: true,
      category: "investment",
    },
    {
      question: "How long does it take to break even?",
      answer:
        "On average, our franchise partners break even within 12-18 months. The exact timeline depends on the module, location, and market conditions. Some of our partners have achieved break-even in as little as 8 months.",
      popular: false,
      category: "investment",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide comprehensive end-to-end support including: site selection assistance, complete setup guidance, staff training programs, marketing support, operational guidance, software systems, and ongoing business consulting. Our support team is available 24/7.",
      popular: true,
      category: "support",
    },
    {
      question: "Do I need prior experience in healthcare?",
      answer:
        "No prior healthcare experience is required. We provide complete training and have a proven system that works for entrepreneurs from all backgrounds. What matters most is your passion for business and commitment to success.",
      popular: false,
      category: "requirements",
    },
    {
      question: "What is the success rate of your franchises?",
      answer:
        "We have a 95% success rate across all our franchise modules. This is significantly higher than the industry average of 60%. Our proven business model, strong brand, and comprehensive support system contribute to this high success rate.",
      popular: true,
      category: "performance",
    },
    {
      question: "Can I own multiple franchises?",
      answer:
        "Yes, absolutely! Many of our successful partners own multiple locations. After your first franchise proves successful, we offer special incentives and priority support for expanding to additional locations.",
      popular: false,
      category: "expansion",
    },
  ];

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "investment", name: "Investment" },
    { id: "support", name: "Support" },
    { id: "requirements", name: "Requirements" },
    { id: "performance", name: "Performance" },
    { id: "expansion", name: "Expansion" },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleFeedback = (index, isHelpful) => {
    setHelpfulFeedback((prev) => ({
      ...prev,
      [index]: isHelpful,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for your question! We'll get back to you soon.");
    setContactForm({ name: "", email: "", question: "" });
    setShowContactForm(false);
  };

  return (
    <section
      id="faq"
      className={`py-20 ${isDarkMode ? "bg-gradient-to-b from-gray-900 to-gray-800" : "bg-gradient-to-b from-gray-50 to-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Everything you need to know about our franchises. Can't find what
            you're looking for? We're here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          {/* <div
            className={`mb-8 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg p-6`}
          >
            <div className="relative">
              <FiSearch
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                size={20}
              />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white placeholder-gray-400" : "bg-gray-100 text-gray-800 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
              />
            </div>
          </div> */}

          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-emerald-600 text-white shadow-md"
                    : isDarkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div> */}

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl`}
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className={`w-full px-6 py-5 text-left flex items-center justify-between ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"} transition-colors`}
                  >
                    <div className="flex items-center space-x-3">
                      {faq.popular && (
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium flex items-center">
                          <FiHelpCircle className="mr-1" size={12} />
                          Popular
                        </span>
                      )}
                      <span
                        className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <FiChevronDown
                      className={`transform transition-transform duration-300 ${expandedFaq === index ? "rotate-180" : ""} ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${expandedFaq === index ? "max-h-96" : "max-h-0"}`}
                  >
                    <div
                      className={`px-6 pb-5 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {faq.answer}
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <span className="text-sm">Was this helpful?</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleFeedback(index, true)}
                            className={`p-2 rounded-lg transition-colors ${
                              helpfulFeedback[index] === true
                                ? "bg-emerald-100 text-emerald-600"
                                : isDarkMode
                                  ? "hover:bg-gray-700 text-gray-400"
                                  : "hover:bg-gray-100 text-gray-500"
                            }`}
                          >
                            <FiThumbsUp size={16} />
                          </button>
                          <button
                            onClick={() => handleFeedback(index, false)}
                            className={`p-2 rounded-lg transition-colors ${
                              helpfulFeedback[index] === false
                                ? "bg-red-100 text-red-600"
                                : isDarkMode
                                  ? "hover:bg-gray-700 text-gray-400"
                                  : "hover:bg-gray-100 text-gray-500"
                            }`}
                          >
                            <FiThumbsDown size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                <FiHelpCircle className="mx-auto mb-4" size={48} />
                <p>
                  No questions found matching your search. Try different
                  keywords or browse categories.
                </p>
              </div>
            )}
          </div>

          {/* Contact Form Section */}
          <div
            className={`mt-12 ${isDarkMode ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg p-8`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
            >
              Still have questions?
            </h3>
            <p
              className={`mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>

            {showContactForm ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className={`w-full px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    required
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className={`w-full px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    required
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Question
                  </label>
                  <textarea
                    value={contactForm.question}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        question: e.target.value,
                      })
                    }
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    required
                  ></textarea>
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
                  >
                    <FiSend className="mr-2" size={16} />
                    Send Question
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className={`px-6 py-2 rounded-lg transition-colors ${isDarkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center mx-auto"
              >
                <FiHelpCircle className="mr-2" size={18} />
                Ask a Question
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
