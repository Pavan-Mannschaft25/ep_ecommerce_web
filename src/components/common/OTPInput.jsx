import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/helpers";

const OTPInput = ({ length = 6, onComplete, className = "" }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if current input is filled
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all inputs are filled
    if (newOtp.every((val) => val !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Only process if pasted data is all numbers and correct length
    if (/^\d+$/.test(pastedData) && pastedData.length === length) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      onComplete(newOtp.join(""));
    }
  };

  return (
    <div className={cn("flex space-x-2", className)}>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength="1"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      ))}
    </div>
  );
};

export default OTPInput;
