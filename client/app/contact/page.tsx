'use client'

import React, { useEffect } from 'react';
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const Contact: React.FC = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
         <div className="sticky top-0 z-10 w-full">
        <NavBar />
      </div>
      <div className="text-center my-5">
        <h1 className="text-2xl font-bold text-textcss">Contact Us</h1>
        <p className="text-lg text-textcss">Any question or remarks? Just write us a message!</p>
      </div>

      <div 
        data-aos="zoom-in"
        className="mani-container max-w-4xl mx-auto flex flex-wrap bg-black/10 backdrop-blur-md rounded-xl shadow-md p-5"
      >
        {/* Left Container */}
        <div className="bg-primary text-white rounded-xl p-5 flex flex-col justify-around w-full sm:w-[450px] h-[570px] mb-5 sm:mb-0">
          <div>
            <h3 className="text-xl text-black font-semibold">Contact Information</h3>
            <p className="text-black">Say something to start a live chat!</p>
          </div>

          <div>
            <div className="text-black flex items-center mt-3">
              <FaPhoneAlt className="mr-2" />
              <p>9567704027</p>
            </div>
            <div className="flex text-black items-center mt-3">
              <FaEnvelope className="mr-2" />
              <p>jasirjas9605@gmail.com</p>
            </div>
            <div className="flex text-black items-center mt-3">
              <FaMapMarkerAlt className="mr-2" />
              <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
            </div>
          </div>

          <div className="flex justify-end mt-5 text-black space-x-4 text-lg">
            <FaInstagram />
            <IoLogoWhatsapp />
            <IoLogoYoutube />
          </div>
        </div>

        {/* Right Container */}
        <div className="flex-1 mx-5 space-y-5 text-white">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-light">First Name</label>
            <input
              type="text"
              id="firstName"
              className="w-full border-b border-white bg-transparent p-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm font-light">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full border-b border-white bg-transparent p-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-light">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-white bg-transparent p-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm font-light">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full border-b border-white bg-transparent p-1 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-light">Message</label>
            <textarea
              id="message"
              className="w-full border-b border-white bg-transparent p-1 focus:outline-none mt-2"
              rows={4}
            />
          </div>
          <div className="flex justify-end">
            <button className="px-5 py-2 rounded-md bg-[#94A8BF] text-white hover:bg-[#505f70] duration-200 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className='mt-5'>
      <Footer />
      </div>
    </div>
  );
};

export default Contact;
