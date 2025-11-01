// // Its NORMAL POPUP ---------

// import React, { useState } from "react";

// function Popup() {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div
//         className="relative"
//         onMouseEnter={() => setShowPopup(true)}
//         onMouseLeave={() => setShowPopup(false)}
//       >
//         <p className="text-xl font-semibold text-gray-800 cursor-pointer">
//           Hover over me
//         </p>

//         {showPopup && (
//           <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-3 w-48 transition duration-300">
//             👋 Dynamic popup using state!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Popup;

// import React, {useState} from "react";

// function Popup() {
//     const [isOpen, setIsOpen] =useState(false);
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div
//               className="relative"
//               onMouseEnter={()=>setIsOpen(true)}
//               onMouseLeave={()=>setIsOpen(false)}

//               >

//              {/* Text That Toggles DropDown */}
//             <p className="text-xl font-semibold text-gray-800 cursor-pointer">Hover Me</p>

//             {/* /DropDown List */}
//            {isOpen && (
//              <div className="absolute mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
//                 <ul className="text-gray-700">
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact </li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Aout </li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Services</li>
//                     <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Products</li>
//                </ul>ck
//            </div>
//            )}
//         </div>

//     </div>
//   )
// }

// export default Popup

// import React, { useState } from "react";
// function Popup() {

//   const [isOpen, setIsOpen] = useState(false);
//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);
//   return (
//     <div>
//       {/* Trigger Button */}
//       <button
//         onClick={openModal}
//         className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//       >
//         Open Pay Modal
//       </button>

//       {/* Overlay + Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Blurred Background */}
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
//             onClick={closeModal}
//           ></div>

//           {/* Modal Box */}
//           <div className="bg-white rounded-2xl shadow-2xl z-50 p-8 max-w-sm w-full transform transition-transform duration-300 scale-100 animate-fadeIn">
//             <h2 className="text-xl font-semibold mb-4">Complete Payment</h2>
//             <p className="text-gray-600 mb-6">
//               Click the button below to proceed with your payment.
//             </p>
//             <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
//               Pay
//             </button>
//             <button
//               onClick={closeModal}
//               className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Popup

import React from "react";
// import { ToastProvider } from "./common_tost/Toast";

export default function Popup({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "w-80 p-6",
    md: "w-96 p-8",
    lg: "w-[600px] p-10",
    xl: "w-[800px] p-12",
  };

  return (
   
      <div className="fixed inset-0  flex items-center justify-center">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose} // close on outside click
        ></div>

        {/* Modal Box */}
        <div
          className={`relative bg-white rounded-3xl shadow-2xl transform transition-transform duration-500 scale-200 ${sizeClasses[size]}`}
        >
          {title && <h2 className="text-2xl font-bold  mb-4">{title}</h2>}
          {children}
        </div>
      </div>
    
  );
}
