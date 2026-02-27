// import React from "react";
// import qrCode from "../assets/images/qr-code.png";
// import googlePlay from "../assets/images/google-app.avif";
// import appStore from "../assets/images/app-st.avif";
// import eatProteinImg from "../assets/images/eat_logo.jpg";

// function DownloadApp() {
//   return (
//     <section
//       id="download"
//       className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden text-white px-4 sm:px-10 md:px-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 shadow-lg"
//     >
//       {/* Background pattern overlay */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         ></div>
//       </div>

//       {/* === Text Section === */}
//       <div className="text-center md:text-left max-w-lg relative z-10">
//         {/* Logo */}
//         <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
//           <img
//             src={eatProteinImg}
//             alt="Eat Protein Logo"
//             className="h-12 sm:h-14 md:h-16 w-auto rounded-xl border-4 border-[#FFFFFF]"
//           />
//         </div>

//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
//           Get Our App Now!
//         </h2>

//         {/* Description */}
//         <p className="text-base sm:text-lg mb-6 text-gray-200">
//           Order your favorite protein foods, meals, and drinks on the go.{" "}
//           <br className="hidden sm:block" />
//           Scan the QR code or download from your favorite store.
//         </p>

//         {/* === Store Buttons === */}
//         <div className="flex justify-center md:justify-start gap-4 flex-wrap">
//           <a
//             href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={googlePlay}
//               alt="Get it on Google Play"
//               className="h-10 sm:h-12 hover:scale-105 transition-transform duration-300"
//             />
//           </a>
//           <a
//             href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={appStore}
//               alt="Download on App Store"
//               className="h-10 sm:h-12 hover:scale-105 transition-transform duration-300"
//             />
//           </a>
//         </div>
//       </div>

//       {/* === QR Code Section === */}
//       <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center w-[220px] sm:w-[250px] relative z-10">
//         <img
//           src={qrCode}
//           alt="QR Code"
//           className="w-36 h-36 sm:w-40 sm:h-40 object-cover mb-3"
//         />
//         <p className="text-[#258440] font-semibold text-center">
//           Scan to download
//         </p>
//       </div>
//     </section>
//   );
// }

// export default DownloadApp;

import React, { useState } from "react";
import qrCode from "../assets/images/qr-code.png";
import googlePlay from "../assets/images/google-app.avif";
import appStore from "../assets/images/app-st.avif";
import eatProteinImg from "../assets/images/eat_logo.jpg";

function DownloadApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  return (
    <section
      id="download"
      className="py-10 sm:py-14 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden text-white"
    >
      {/* Background pattern overlay */}
      {/* <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* === Text Section === */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-6">
              <img
                src={eatProteinImg}
                alt="Eat Protein Logo"
                className="h-14 sm:h-16 w-auto rounded-xl border-4 border-white shadow-lg"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Get Our App Now!
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl mb-8 text-gray-100 max-w-md mx-auto lg:mx-0">
              Order your favorite protein foods, meals, and drinks on the go.
              Exclusive app-only offers and rewards await!
            </p>

            {/* === Feature Tabs === */}
            <div className="mb-8">
              <div className="flex justify-center lg:justify-start mb-4 border-b border-white/20">
                <button
                  className={`pb-2 px-1 mr-6 font-medium transition-all ${activeTab === "features" ? "text-white border-b-2 border-white" : "text-gray-300"}`}
                  onClick={() => setActiveTab("features")}
                >
                  Features
                </button>
                <button
                  className={`pb-2 px-1 font-medium transition-all ${activeTab === "rewards" ? "text-white border-b-2 border-white" : "text-gray-300"}`}
                  onClick={() => setActiveTab("rewards")}
                >
                  Rewards
                </button>
              </div>

              <div className="mt-4">
                {activeTab === "features" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-100">
                        Track your nutrition goals
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-100">
                        Exclusive app-only menu items
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-100">
                        Skip the line with mobile ordering
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "rewards" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-gray-100">
                        Earn points with every order
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-gray-100">
                        Free birthday rewards
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="text-gray-100">
                        Member-only special offers
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* === Store Buttons === */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="h-12 sm:h-14"
                />
              </a>
              <a
                href="https://apps.apple.com/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={appStore}
                  alt="Download on App Store"
                  className="h-12 sm:h-14"
                />
              </a>
            </div>
          </div>

          {/* === Phone Mockup with QR Code === */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-8 rounded-3xl h-[500px] w-[250px] sm:h-[600px] sm:w-[300px] shadow-2xl">
                <div className="rounded-2xl overflow-hidden w-full h-full bg-white">
                  {/* Phone Status Bar */}
                  <div className="bg-gray-800 h-6 w-full flex items-center justify-center">
                    <div className="w-16 h-4 bg-gray-900 rounded-full"></div>
                  </div>

                  {/* Phone Content */}
                  <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-emerald-50 to-teal-50 p-4">
                    <img
                      src={eatProteinImg}
                      alt="App Logo"
                      className="w-24 h-24 rounded-2xl shadow-lg mb-4"
                    />
                    <h3 className="text-gray-800 font-bold text-xl mb-2">
                      Eat Protein
                    </h3>
                    <p className="text-gray-600 text-sm text-center mb-4">
                      Your nutrition companion
                    </p>

                    {/* QR Code in Phone */}
                    <div className="bg-white p-4 rounded-xl shadow-lg mb-4">
                      <img
                        src={qrCode}
                        alt="QR Code"
                        className="w-32 h-32 object-cover"
                      />
                    </div>

                    <p className="text-gray-700 font-medium text-sm">
                      Scan to download
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating QR Code for Desktop */}
              <div
                className={`absolute -right-20 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-2xl shadow-2xl transition-all duration-500 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"} hidden xl:block`}
              >
                <img
                  src={qrCode}
                  alt="QR Code"
                  className="w-32 h-32 object-cover mb-2"
                />
                <p className="text-emerald-600 font-semibold text-center text-sm">
                  Scan to download
                </p>
              </div>

              {/* Animated Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-white/80 text-sm mb-4">
            Join over 50,000+ happy customers
          </p>
          <div className="flex justify-center items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white ml-2">4.8 out of 5</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
