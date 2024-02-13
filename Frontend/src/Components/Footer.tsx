import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-800 p-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl text-white font-bold tracking-tighter">
          ZaidPlaces.com
        </span>
        <span className="text-white font-bold tracking-tighter flex gap-4">
          <p className="cursor-pointe">Privacy Policy</p>
          <p className="cursor-pointer">Terms</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
