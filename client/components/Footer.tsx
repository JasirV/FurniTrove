import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-secondary flex flex-col items-center justify-center gap-5 p-5">
      <div className="w-full flex flex-col md:flex-row justify-center gap-10 md:gap-36">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="font-sans text-2xl text-textcss font-bold">Other info</h1>
          <h1 className="text-textcss">Terms & Conditions</h1>
          <h1 className="text-textcss">Privacy Policy</h1>
          <h1 className="text-textcss">License</h1>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="font-sans text-2xl text-textcss font-bold">Media</h1>
          <h1 className="text-textcss">Links</h1>
          <h1 className="text-textcss">Photo Gallery</h1>
          <h1 className="text-textcss">Latest News</h1>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="font-sans text-2xl text-textcss font-bold">Company</h1>
          <h1 className="text-textcss">About Us</h1>
          <h1 className="text-textcss">Careers</h1>
          <h1 className="text-textcss">Survey</h1>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="font-sans text-2xl text-textcss font-bold">Be Social</h1>
          <h1 className="text-textcss">Facebook</h1>
          <h1 className="text-textcss">Twitter</h1>
          <h1 className="text-textcss">Instagram</h1>
        </div>
      </div>
      <h1 className="mt-5 text-textcss mb-5 text-center">© 2024 All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
