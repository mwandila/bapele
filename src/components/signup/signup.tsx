import React, { useState } from 'react';
import Image from 'next/image';

const SignUpComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handlePhoneNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setOtp(e.target.value);
  };

  const sendOtp = () => {
    // API call to send OTP to the phone number
    console.log('OTP sent to', phoneNumber);
    setIsOtpSent(true);
  };

  const verifyOtp = () => {
    // API call to verify the OTP
    console.log('OTP verified:', otp);
    // If OTP is correct, proceed with sign up
    if (otp === '1234') {
      console.log('Sign up successful');
    } else {
      console.log('Invalid OTP');
    }
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="w-1/2">
        <Image
          src="/images/signup-image.jpg"
          alt="Sign up image"
          width={400}
          height={400}
        />
      </div>
      <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone Number"
            />
          </div>
          {isOtpSent ? (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="number"
                value={otp}
                onChange={handleOtpChange}
                placeholder="OTP"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={sendOtp}
            >
              Send OTP
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
