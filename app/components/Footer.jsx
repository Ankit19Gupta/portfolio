import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-2">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo : assets.logo_dark}
          alt="logo"
          className="w-36 mx-auto"
        />
        <div className="w-max flex items-center gap-1 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="logo"
            className="w-6"
          />
          ankitmodi87450@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Ankit Modi. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Ankit87450" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ankit-modi-517aa4217/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
