// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   loginStart,
//   loginSuccess,
//   loginFailure,
// } from "../../features/auth/authSlice";
// import { sendOTP, verifyOTP } from "../../features/auth/authService";
// import Input from "../../components/common/Input";
// import OTPInput from "../../components/common/OTPInput";
// import Button from "../../components/common/Button";
// import Loader from "../../components/common/Loader";
// import { FaStore } from "react-icons/fa";

// const StoreVendorLogin = () => {
//   const [phone, setPhone] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!phone || phone.length !== 10) {
//       setError("Please enter a valid 10-digit phone number");
//       return;
//     }

//     setLoading(true);
//     dispatch(loginStart());

//     try {
//       await sendOTP(phone);
//       setOtpSent(true);
//       setLoading(false);
//     } catch (err) {
//       dispatch(loginFailure(err.message));
//       setError("Failed to send OTP. Please try again.");
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async (otpValue) => {
//     setError("");
//     setLoading(true);

//     try {
//       await verifyOTP(phone, otpValue);

//       // Mock user data for store vendor
//       const userData = {
//         auth_id: 1,
//         full_name: "Store Vendor",
//         phone: phone,
//         store_name: "Protein Plus Store",
//         address: "123 Main Street, City",
//       };

//       dispatch(
//         loginSuccess({
//           user: userData,
//           partnerType: "store-vendor",
//         }),
//       );

//       navigate("/dashboard/store");
//     } catch (err) {
//       dispatch(loginFailure(err.message));
//       setError("Invalid OTP. Please try again.");
//       setLoading(false);
//     }
//   };

//   const handleResendOTP = async () => {
//     setError("");
//     setLoading(true);

//     try {
//       await sendOTP(phone);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to resend OTP. Please try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center px-4">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
//         <div className="text-center mb-8">
//           <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//             <FaStore className="text-2xl text-primary" />
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800">
//             Store Vendor Login
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Enter your phone number to continue
//           </p>
//         </div>

//         {!otpSent ? (
//           <form onSubmit={handleSendOTP}>
//             <Input
//               type="tel"
//               placeholder="Enter your 10-digit phone number"
//               value={phone}
//               onChange={(e) =>
//                 setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
//               }
//               error={error}
//               maxLength={10}
//             />

//             <Button
//               type="submit"
//               variant="primary"
//               size="lg"
//               className="w-full mt-6"
//               disabled={loading}
//             >
//               {loading ? <Loader size="sm" /> : "Send OTP"}
//             </Button>
//           </form>
//         ) : (
//           <div>
//             <p className="text-center text-gray-600 mb-4">
//               Enter the 6-digit OTP sent to {phone}
//             </p>

//             <OTPInput
//               onComplete={handleVerifyOTP}
//               className="justify-center mb-6"
//             />

//             {error && <p className="text-danger text-center mb-4">{error}</p>}

//             <div className="flex flex-col space-y-3">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={handleResendOTP}
//                 disabled={loading}
//                 className="text-primary"
//               >
//                 {loading ? <Loader size="sm" /> : "Resend OTP"}
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => {
//                   setOtpSent(false);
//                   setOtp("");
//                   setError("");
//                 }}
//                 className="text-gray-600"
//               >
//                 Change Phone Number
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StoreVendorLogin;

import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../features/auth/authSlice";
import { sendOTP, verifyOTP } from "../../features/auth/authService";
import Input from "../../components/common/Input";
import OTPInput from "../../components/common/OTPInput";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import {
  FaStore,
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationCircle,
  FaShieldAlt,
  FaLock,
  FaUser,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import loginBg from "../../assets/images/login-img.avif";

const StoreVendorLogin = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    if (otpSent && inputRef.current) {
      inputRef.current.focus();
    }
  }, [otpSent]);

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");
    setPhoneError("");

    if (!phone) {
      setPhoneError("Please enter your phone number");
      shakeElement();
      return;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      shakeElement();
      return;
    }

    setLoading(true);
    dispatch(loginStart());

    try {
      await sendOTP(phone);
      setOtpSent(true);
      setResendTimer(30);
      setLoading(false);
      showSuccessAnimation();
    } catch (err) {
      dispatch(loginFailure(err.message));
      setError("Failed to send OTP. Please try again.");
      setLoading(false);
      shakeElement();
    }
  };

  const handleVerifyOTP = async (otpValue) => {
    setError("");
    setLoading(true);

    try {
      await verifyOTP(phone, otpValue);

      // Mock user data for store vendor
      const userData = {
        auth_id: 1,
        full_name: "Store Vendor",
        phone: phone,
        store_name: "Protein Plus Store",
        address: "123 Main Street, City",
        email: "vendor@proteinplus.com",
        role: "store-vendor",
        verified: true,
      };

      dispatch(
        loginSuccess({
          user: userData,
          partnerType: "store-vendor",
        }),
      );

      setIsSuccess(true);
      setTimeout(() => {
        navigate("/dashboard/store");
      }, 1500);
    } catch (err) {
      dispatch(loginFailure(err.message));
      setError("Invalid OTP. Please try again.");
      setLoading(false);
      shakeElement();
    }
  };

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;

    setError("");
    setLoading(true);

    try {
      await sendOTP(phone);
      setResendTimer(30);
      setLoading(false);
      showSuccessAnimation();
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
      setLoading(false);
      shakeElement();
    }
  };

  const handleBack = () => {
    setOtpSent(false);
    setOtp("");
    setError("");
    setPhoneError("");
    setResendTimer(0);
  };

  const shakeElement = () => {
    const element = document.getElementById("login-form");
    element?.classList.add("animate-shake");
    setTimeout(() => {
      element?.classList.remove("animate-shake");
    }, 500);
  };

  const showSuccessAnimation = () => {
    const element = document.getElementById("success-icon");
    element?.classList.add("animate-bounce-in");
  };

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{5})(\d{5})$/);
    if (match) {
      return `${match[1]}-${match[2]}`;
    }
    return cleaned;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden bg-cover bg-center pt-20"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-emerald-900/60 to-black/60"></div>

      {/* Main Container */}
      <div className="max-w-md w-full relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 transform hover:rotate-12 transition-transform duration-300">
                  <FaStore className="text-4xl" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-center mb-2">
                Store Vendor Portal
              </h1>

              <div className="flex items-center justify-center space-x-2 text-sm">
                <FaShieldAlt className="text-yellow-300" />
                <span>Secure Login</span>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div id="login-form" className="p-8">
            {!otpSent ? (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm">
                    <FaLock />
                    <span>OTP Verification</span>
                  </div>
                </div>

                <div
                  className={`space-y-2 transition-all duration-300 ${isFocused ? "transform scale-[1.02]" : ""}`}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    <FaPhoneAlt className="inline mr-2 text-emerald-600" />
                    Phone Number
                  </label>
                  <div className="relative">
                    <Input
                      ref={inputRef}
                      type="tel"
                      placeholder="98765-43210"
                      value={formatPhone(phone)}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                        setPhone(value);
                        setPhoneError("");
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      error={phoneError}
                      maxLength={10}
                      className={`pl-12 pr-4 py-4 text-lg font-semibold border-2 rounded-xl transition-all duration-300 ${
                        phoneError
                          ? "border-red-500 bg-red-50"
                          : isFocused
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      +91
                    </div>
                  </div>
                  {phoneError && (
                    <div className="flex items-center text-red-500 text-sm mt-1 animate-fadeIn">
                      <FaExclamationCircle className="mr-2" />
                      {phoneError}
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleSendOTP}
                  variant="primary"
                  size="lg"
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={loading || phone.length !== 10}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <Loader size="sm" />
                      <span className="ml-2">Sending OTP...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <SiMinutemailer className="mr-2" />
                      Send OTP
                    </div>
                  )}
                </Button>

                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-emerald-500 mr-1" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-emerald-500 mr-1" />
                    <span>Fast</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-emerald-500 mr-1" />
                    <span>Reliable</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handleBack}
                    className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back
                  </button>

                  <div className="flex items-center space-x-2">
                    <div id="success-icon" className="text-emerald-500">
                      <SiMinutemailer className="text-xl" />
                    </div>
                    <span className="text-sm text-gray-600">OTP Sent</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-gray-700 font-medium">
                    Enter verification code
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    sent to +91 {formatPhone(phone)}
                  </p>
                </div>

                <OTPInput
                  onComplete={handleVerifyOTP}
                  className="justify-center mb-6"
                  inputClassName="w-14 h-14 text-xl font-bold border-2 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200"
                />

                {error && (
                  <div className="flex items-center justify-center text-red-500 text-sm mb-4 animate-fadeIn">
                    <FaExclamationCircle className="mr-2" />
                    {error}
                  </div>
                )}

                {isSuccess && (
                  <div className="flex items-center justify-center text-emerald-500 text-sm mb-4 animate-fadeIn">
                    <FaCheckCircle className="mr-2" />
                    Login Successful! Redirecting...
                  </div>
                )}

                <div className="space-y-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleResendOTP}
                    disabled={loading || resendTimer > 0}
                    className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <Loader size="sm" />
                        <span className="ml-2">Resending...</span>
                      </div>
                    ) : resendTimer > 0 ? (
                      `Resend OTP in ${resendTimer}s`
                    ) : (
                      <div className="flex items-center justify-center">
                        <SiMinutemailer className="mr-2" />
                        Resend OTP
                      </div>
                    )}
                  </Button>
                </div>

                <div className="text-center text-xs text-gray-500">
                  <p>Didn't receive the code?</p>
                  <p>Check your spam folder or</p>
                  <button
                    onClick={handleBack}
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    try with different number
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <div className="flex items-center justify-center text-xs text-gray-500">
              <FaLock className="mr-2" />
              <span>Your information is secure and encrypted</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            New to EatProtein?{" "}
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Register here
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounceIn 0.5s;
        }
      `}</style>
    </div>
  );
};

export default StoreVendorLogin;
