import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Intro"); // <-- Track active menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else if (window.scrollY < 80) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Intro", "About", "Skills", "Contact"];

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between p-4 bg-black text-white transition-all duration-700 ease-in-out 
         ${isScrolled ? "w-full m-none rounded-none" : "lg:mt-5 lg:mx-10 rounded-lg"
        }`}
    >
      <div className="font-bold cursor-pointer text-lg">Lokesh Kumar</div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 font-medium cursor-pointer">
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
              onSetActive={() => setActiveItem(item)} // updates activeItem on scroll
               className={`transition cursor-pointer select-none ${activeItem === item
              ? "text-blue-400 border-b-2 border-blue-400"
              : "hover:text-gray-400"
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="lg:hidden relative">
        <button
          className="p-2 focus:outline-none"
          onClick={() => setDropdownOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span
            className={`inline-block transition-transform duration-500 ${dropdownOpen ? "rotate-90" : "rotate-0"
              }`}
          >
            {dropdownOpen ? (
              <i className="fa-solid fa-xmark text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-xl"></i>
            )}
          </span>
        </button>

        {/* Mobile Dropdown with animation */}
        <div
          className={`absolute right-0 mt-2 w-32 z-50 transition-all duration-300 origin-top ${dropdownOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
            }`}
          style={{ transformOrigin: "top" }}
        >
         <ul className="bg-black bg-opacity-95 rounded shadow-lg flex flex-col justify-around p-3">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActiveItem(item);
                  setDropdownOpen(false); // close dropdown on click
                }}
              >
               <Link
              to={item.toLowerCase()} // match section id
              smooth={true}
              duration={500}
              offset={-70} // adjust for navbar height
              spy={true} // track scroll position
              onSetActive={() => setActiveItem(item)} // updates activeItem on scroll
              className={`transition cursor-pointer ${activeItem === item
              ? "text-orange-400"
              : "hover:text-gray-400"
              }`}
            >
              {item}
            </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
