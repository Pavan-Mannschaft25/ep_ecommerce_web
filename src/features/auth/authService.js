// // // // Mock OTP verification service
// // // export const sendOTP = async (phone) => {
// // //   // Simulate API call
// // //   return new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve({ success: true, message: "OTP sent successfully" });
// // //     }, 1000);
// // //   });
// // // };

// // // export const verifyOTP = async (phone, otp) => {
// // //   // Simulate API call
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       if (otp === "123456") {
// // //         resolve({ success: true, message: "OTP verified successfully" });
// // //       } else {
// // //         reject({ success: false, message: "Invalid OTP" });
// // //       }
// // //     }, 1000);
// // //   });
// // // };

// // // // // src/features/auth/authService.js

// // // // import {
// // // //   sendFirebaseOTP,
// // // //   verifyFirebaseOTP,
// // // //   authenticateWithBackend,
// // // //   setupRecaptcha,
// // // // } from "./firebaseService"; // <-- THIS IMPORT MUST BE EXACT

// // // // // This function now orchestrates sending the OTP
// // // // export const sendOTP = async (phone, recaptchaContainerId) => {
// // // //   try {
// // // //     const recaptchaVerifier = setupRecaptcha(recaptchaContainerId);
// // // //     await sendFirebaseOTP(phone, recaptchaVerifier);
// // // //     return { success: true };
// // // //   } catch (error) {
// // // //     throw new Error(error.message || "Failed to send OTP");
// // // //   }
// // // // };

// // // // // This function now orchestrates verifying the OTP and authenticating with the backend
// // // // export const verifyOTP = async (phone, otp) => {
// // // //   try {
// // // //     // 1. First verify with Firebase to get the ID token
// // // //     const { idToken } = await verifyFirebaseOTP(otp);

// // // //     // 2. Then authenticate with your backend using the ID token
// // // //     const data = await authenticateWithBackend(idToken);

// // // //     return {
// // // //       success: true,
// // // //       token: data.token,
// // // //       partner: data.partner,
// // // //     };
// // // //   } catch (error) {
// // // //     throw new Error(error.message || "Invalid OTP");
// // // //   }
// // // // };

// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { auth } from "../../firebase/firebase";

// // let confirmationResult = null;

// // /* 🔐 Initialize reCAPTCHA */
// // export const initRecaptcha = () => {
// //   if (!window.recaptchaVerifier) {
// //     window.recaptchaVerifier = new RecaptchaVerifier(
// //       auth,
// //       "recaptcha-container",
// //       {
// //         size: "normal",
// //       },
// //     );
// //   }
// // };

// // /* 📩 Send OTP */
// // export const sendOTP = async (phone) => {
// //   initRecaptcha();

// //   const fullPhone = `+91${phone}`;

// //   confirmationResult = await signInWithPhoneNumber(
// //     auth,
// //     fullPhone,
// //     window.recaptchaVerifier,
// //   );

// //   return true;
// // };

// // /* ✅ Verify OTP */
// // export const verifyOTP = async (otp) => {
// //   if (!confirmationResult) {
// //     throw new Error("OTP not requested");
// //   }

// //   const result = await confirmationResult.confirm(otp);

// //   const token = await result.user.getIdToken(true);

// //   return {
// //     user: result.user,
// //     token,
// //   };
// // };

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../../firebase/firebase";

// let confirmationResult = null;

// export const initRecaptcha = () => {
//   if (window.recaptchaVerifier) {
//     return;
//   }

//   window.recaptchaVerifier = new RecaptchaVerifier(
//     auth,
//     "recaptcha-container",
//     {
//       size: "normal",
//       callback: () => {
//         console.log("reCAPTCHA verified");
//       },
//     },
//   );

//   window.recaptchaVerifier.render();
// };

// export const clearRecaptcha = () => {
//   if (window.recaptchaVerifier) {
//     window.recaptchaVerifier.clear();
//     window.recaptchaVerifier = null;
//   }
// };

// export const sendOTP = async (phone) => {
//   clearRecaptcha(); // 🔥 IMPORTANT
//   initRecaptcha();

//   const fullPhone = `+91${phone}`;

//   confirmationResult = await signInWithPhoneNumber(
//     auth,
//     fullPhone,
//     window.recaptchaVerifier,
//   );

//   return true;
// };

// export const verifyOTP = async (otp) => {
//   if (!confirmationResult) {
//     throw new Error("OTP not sent");
//   }

//   const result = await confirmationResult.confirm(otp);
//   const token = await result.user.getIdToken(true);

//   return { user: result.user, token };
// };

// Mock OTP verification service
export const sendOTP = async (phone) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "OTP sent successfully" });
    }, 1000);
  });
};

export const verifyOTP = async (phone, otp) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === "123456") {
        resolve({ success: true, message: "OTP verified successfully" });
      } else {
        reject({ success: false, message: "Invalid OTP" });
      }
    }, 1000);
  });
};
