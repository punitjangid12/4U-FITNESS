import React from "react";
import { useNavigate } from "react-router-dom";
const Button = ({ label, size = "md", onClick, path, loading }) => {
 
  const navigate = useNavigate();
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-4 text-xl",
    xl: "px-12 py-5 text-2xl"
  };
  

  const handleClick =(e)=>{
    if (onClick && typeof onClick === "function") {
       onClick(e);
    }
    else if (path) {
      navigate(path);
    }
    
  };

  return (
    <button
      onClick={handleClick}
      className={` rounded-lg overflow-hidden group bg-transparent border border-gray-400 transition-all duration-500 hover:text-white hover:scale-105 hover:border-transparent hover:shadow-2xl hover:shadow-cyan-500/50 ${sizeClasses[size]} text-gray-200`}
      disabled ={loading}
    >
      {/* Background animation layers */}
      <span className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-600 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-top"></span>
      <span className="absolute inset-0 bg-gradient-to-l from-red-400 via-red-500 to-red-900 rounded-lg transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-150 origin-bottom"></span>
      <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-lg transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 delay-300"></span>

      {/* Label */}
      <span className=" z-10 group-hover:drop-shadow-lg transition-all duration-300">
        {label}
      </span>
    </button>
  );
};

export default Button;
