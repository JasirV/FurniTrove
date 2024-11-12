'use client'
import { useState, ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';

export default function OTPPage() {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1);
    setOtp(updatedOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const previousInput = document.getElementById(`otp-${index - 1}`);
      if (previousInput) (previousInput as HTMLInputElement).focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").slice(0, 4);
    if (/^\d+$/.test(pastedData)) {
      setOtp(pastedData.split(""));
      pastedData.split("").forEach((digit, index) => {
        const inputElement = document.getElementById(`otp-${index}`);
        if (inputElement) (inputElement as HTMLInputElement).value = digit;
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full md:w-1/2 lg:w-1/2 p-6  rounded-md border border-textcss shadow-md">
      <h2 className="text-xl text-textcss font-semibold text-center mb-10 mt-5">Enter OTP</h2>
      <div className="flex space-x-2 justify-center ">
        {otp.map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 p-2 border text-black border-gray-300 rounded-md text-center text-2xl lg:text-7xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <div className='flex justify-center mt-10 mb-5'>
      <button
        onClick={() => alert(`OTP entered: ${otp.join('')}`)}
        className="mt-4  bg-[#94A8BF] w-9/12 p-3 rounded-full text-white font-medium hover:bg-[#505f70] transition-colors duration-200 z-40 relative py-2 "
        >
        Validate OTP
      </button>
          </div>
    </div>
  </div>
);
}