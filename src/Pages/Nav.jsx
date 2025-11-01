import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/25 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* ---------- Logo ---------- */}
        <div className="flex-shrink-0">
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
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              <Link to="/location">Location</Link>
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* ---------- Right: Login Button (Desktop) ---------- */}
        <div className="hidden lg:flex items-center gap-4">
          <Button label="Sign up" size="sm"  path="/Signup" />
          
        </div>

        {/* ---------- Hamburger Menu (Mobile) ---------- */}
        <button
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Unique hamburger with 3 animated lines */}
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* ---------- Mobile Sliding Menu ---------- */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-md transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl font-semibold">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/location">Location</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
          <Button label="Sign up" size="md"  path="/Signup"/>
        </div>
      </div>
    </header>
  );
}
