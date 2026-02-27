// components/Footer.jsx
import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
// import logo from "../assets/images/eat_logo.jpg";
import logo from "../assets/images/eat_protien_img1.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-8 sm:pt-12 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Background Pattern with brand colors */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://img.freepik.com/premium-vector/dark-blue-banner-backdrop-background_28629-2867.jpg?w=740")`,
          }}
        ></div>
      </div>

      {/* Brand color gradient overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-600 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-600 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo section with responsive sizing */}
            <div className="relative mb-4 sm:mb-6">
              {/* <div className="absolute inset-0 bg-green-500 rounded-lg blur-md opacity-30 w-32 sm:w-40 md:w-45"></div> */}
              <img
                src={logo}
                alt="logo"
                width={140}
                height={100}
                className="rounded-lg shadow-lg bg-white relative z-10 h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Your complete fitness and wellness solution.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-300">
              <li>
                <a
                  href="/"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/fitness"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Fitness
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/app-preview"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  App Preview
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-white">
              Support
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-300">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-white">
              Follow Us
            </h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="group relative" aria-label="Facebook">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800 p-2 sm:p-3 rounded-full group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110 border border-gray-700">
                  <FiFacebook
                    size={16}
                    className="sm:hidden text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                  <FiFacebook
                    size={20}
                    className="hidden sm:block text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </a>

              <a href="#" className="group relative" aria-label="Twitter">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800 p-2 sm:p-3 rounded-full group-hover:bg-blue-400 transition-all duration-300 transform group-hover:scale-110 border border-gray-700">
                  <FiTwitter
                    size={16}
                    className="sm:hidden text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                  <FiTwitter
                    size={20}
                    className="hidden sm:block text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </a>

              <a href="#" className="group relative" aria-label="Instagram">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800 p-2 sm:p-3 rounded-full group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 transform group-hover:scale-110 border border-gray-700">
                  <FiInstagram
                    size={16}
                    className="sm:hidden text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                  <FiInstagram
                    size={20}
                    className="hidden sm:block text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </a>

              <a href="#" className="group relative" aria-label="YouTube">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800 p-2 sm:p-3 rounded-full group-hover:bg-red-600 transition-all duration-300 transform group-hover:scale-110 border border-gray-700">
                  <FiYoutube
                    size={16}
                    className="sm:hidden text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                  <FiYoutube
                    size={20}
                    className="hidden sm:block text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </a>
            </div>

            {/* <div className="mt-4 sm:mt-6">
              <h4 className="text-lg font-semibold mb-3 sm:mb-4 text-white">
                Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-400 flex-grow border border-gray-700 focus:border-green-400 text-sm sm:text-base"
                />
                <button
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  style={{
                    background: "linear-gradient(to right, #258440, #1E803A)",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-8 text-center text-gray-300">
          <p className="text-sm sm:text-base">
            &copy; {currentYear} FitShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
