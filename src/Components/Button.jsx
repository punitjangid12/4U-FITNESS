

const Button = ({ label, size = "md", onClick, loading }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-12 py-4 text-xl",
  };

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`
        relative overflow-hidden rounded-lg border border-gray-400
        text-gray-200 bg-transparent transition-all duration-500
        group hover:text-white hover:scale-105 hover:border-transparent
        hover:shadow-2xl hover:shadow-red-500/40
        ${sizeClasses[size]}
      `}
      // ✅ Infinite bounce animation
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {/* 🔥 Gradient layers */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-700 to-red-500
        rounded-lg transform scale-x-0 group-hover:scale-x-100
        transition-transform duration-700 origin-left z-0"
      ></span>

      <span
        className="absolute inset-0 bg-gradient-to-l from-red-600 via-red-700 to-red-900
        rounded-lg transform scale-y-0 group-hover:scale-y-100
        transition-transform duration-700 delay-150 origin-top z-0"
      ></span>

      <span
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent
        rounded-lg transform -translate-x-full -translate-y-full
        group-hover:translate-x-0 group-hover:translate-y-0
        transition-transform duration-1000 delay-300 z-0"
      ></span>

      {/* 🧠 Label */}
      <span className="relative z-10 font-semibold drop-shadow-md">
        {label}
      </span>
    </button>
  );
};

export default Button;
