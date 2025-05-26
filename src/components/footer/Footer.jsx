import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="container mx-auto py-6 px-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
