import React from 'react';
import { Link } from "react-scroll";

const Footer = () => {

  const menuItems = ["Intro", "About", "Skills", "Contact"];

  return (
    <footer className="bg-black text-white py-8">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* First column (hidden on mobile, visible on md and above) */}
        <div className="hidden md:flex justify-center">
         <div>
          <h1 className='text-2xl md:text-3xl font-bold'>Quick Link</h1>
           <ul className="flex flex-col gap-2.5 text-xl text-[#979c95ee]">
                  {menuItems.map((item) => (
                    <li
                      key={item}
                    
                    >
                      <Link
                        to={item.toLowerCase()} // match section id
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust for navbar height
                        spy={true} // track scroll position
                        className="cursor-pointer hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
         </div>
        </div>


        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2">
          {/* Social Links */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Follow Me</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-lg text-[#979c95ee] hover:text-white transition">
                <a
                  href="https://www.linkedin.com/in/lokesh-kumar-63a5b7290"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin mr-2"></i> LinkedIn
                </a>
              </li>
              <li className="text-lg text-[#979c95ee] hover:text-white transition">
                <a
                  href="https://github.com/lokeshkum1r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github mr-2"></i> GitHub
                </a>
              </li>
              <li className="text-lg text-[#979c95ee] hover:text-white transition">
                <a
                  href="https://leetcode.com/u/lokeshK12/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-regular fa-file-code mr-2"></i> LeetCode
                </a>
              </li>
              <li className="text-lg text-[#979c95ee] hover:text-white transition">
                <a
                  href="https://www.instagram.com/lokeshsingh2493?igsh=MTZpYzY5aGFvNHM5bA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram mr-2"></i> Instagram
                </a>
              </li>
              <li className="text-lg text-[#979c95ee] hover:text-white transition duration-600">
                <button
                  onClick={(e) => {
                    const answer = confirm("Do you want to Hire me?");
                    if (answer) {
                      window.open(
                        "https://wa.me/919530203623",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    } else {
                      const liElement = e.target.closest("li");
                      if (liElement) {
                        liElement.style.opacity = "0";
                        liElement.style.pointerEvents = "none";
                      }
                    }
                  }}
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i> WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact Me</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:Lokesh20127050@gmail.com"
                  className="text-lg text-[#979c95ee] hover:text-white"
                >
                  Lokesh20127050@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917231990433"
                  className="text-lg text-[#979c95ee] hover:text-white"
                >
                  +91 7231990433
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Lokesh Kumar. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
