import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#957FBE80] text-white font-bold py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;