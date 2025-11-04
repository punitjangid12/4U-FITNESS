import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu on navigation
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/25 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* ---------- Logo ---------- */}
        <div 
          className="flex-shrink-0 cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          <h1 className="text-3xl font-extrabold text-white transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
            4U{" "}
            <span className="bg-gradient-to-r from-red-500 to-gray-800 bg-clip-text text-transparent">
              FITNESS
            </span>
          </h1>
        </div>

        {/* ---------- Center Menu (Desktop) ---------- */}
        <nav className="hidden lg:flex justify-center flex-1">
          <ul className="flex gap-10 text-white font-semibold">
            <li className="hover:text-red-500 transition-colors duration-300">
               <a href="#slider">Home</a>
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              <a href="#features">Membership</a>
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
                <a href="#location">Location</a>
            </li>
              <li className="hover:text-red-500 transition-colors duration-300">
                <a href="#contactus">Contact</a>
            </li>
               
          </ul>
        </nav>

        {/* ---------- Right: Signup Button (Desktop) ---------- */}
        <div className="hidden lg:flex items-center gap-4">
          <Button label="Sign up" size="sm" path="/Signup" />
        </div>

        {/* ---------- Hamburger Menu (Mobile) ---------- */}
        <button
          className="lg:hidden relative z-50 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* ---------- Mobile Sliding Menu ---------- */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/40 backdrop-blur-md transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl font-semibold">
           <a href="#slider" className="hover:text-red-500 transition-colors duration-300 hover:bg-black">Home</a>
           <a href="#services" className="hover:text-red-500 transition-colors duration-300 hover:bg-black">Services</a>
            <a href="#features" className="hover:text-red-500 transition-colors duration-300 hover:bg-black">Membership</a>
            <a href="#location" className="hover:text-red-500 transition-colors duration-300 hover:bg-black">Location</a>
             <a href="#contactus" className="hover:text-red-500 transition-colors duration-300 hover:bg-black">Contact</a>
          <Button label="Sign up" size="md" path="/Signup" />
        </div>
      </div>
    </div>
  );
}
