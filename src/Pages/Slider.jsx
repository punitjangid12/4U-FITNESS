
import React, {useState, useEffect} from "react";
  const sliderData = [
   "https://i.pinimg.com/1200x/ee/7d/75/ee7d759e871fa468a35912420da6cd4b.jpg",
   "https://i.pinimg.com/1200x/b0/91/3c/b0913c8ea93ac21f984334fae30fa6b3.jpg",
   "https://i.pinimg.com/1200x/0f/8c/f2/0f8cf21973edd6cf054e64eb2c7796f3.jpg",
   "https://i.pinimg.com/1200x/3a/67/58/3a6758c8c0013a0d520767fc185e8265.jpg",
   "https://i.pinimg.com/736x/8b/95/49/8b954982f5f718fcd52b2eb2aa2f9254.jpg",
   "https://i.pinimg.com/1200x/76/c7/6a/76c76a7a19d36104ad013fe959f5f8ef.jpg",

     
     
  ]
function Slider() {
   
//  state to track which image is cureently visible
const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


   // 👉 useEffect runs once when component mounts (because of [])
    useEffect(()=>{
    //    Interval  who runs in every 3s 
    const interval = setInterval(()=>{
        setCurrentIndex((prevIndex)=>
            prevIndex === sliderData.length-1 ? 0 : prevIndex + 1 
    );
    }, 3000);

    return () =>clearInterval(interval);

    },  []);

   const  previous = () =>{
        setCurrentIndex(currentIndex=== 0 ? sliderData.length -1 : currentIndex -1);

   }  
   const  next = () =>{
        setCurrentIndex(currentIndex=== sliderData.length -1 ? 0  : currentIndex +1);

   }  

   return (
    
         <div className="w-full mx-auto relative m-1">
      {/* 👉 Main image display area */}
      <img
         src={sliderData[currentIndex]} // 👉 Current image from state
        alt="slider" // 👉 Alt text for accessibility
        className="w-full  object-cover " // 👉 Tailwind styling for width, height, rounded corners
      />

      {/* 👉 Previous button (left arrow) */}
      <button
        onClick={previous} // 👉 Calls function to move backward
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        ◀
      </button>

      {/* 👉 Next button (right arrow) */}
      <button
        onClick={next} // 👉 Calls function to move forward
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        ▶
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 px-6 py-3 bg-black bg-opacity-30 backdrop-blur-md rounded-full border border-white border-opacity-10 ">
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => (index)}
                disabled={isTransitioning}
                className={`relative transition-all duration-500 rounded-full disabled:cursor-not-allowed group ${
                  index === currentIndex
                    ? 'w-10 md:w-12 h-2 md:h-2.5'
                    : 'w-2 md:w-2.5 h-2 md:h-2.5 hover:w-6 hover:scale-110'
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-red-400 via-red-600 to-zinc-800 shadow-lg shadow-blue-500/50'
                      : 'bg-white bg-opacity-30 group-hover:bg-opacity-50 group-hover:shadow-md group-hover:shadow-white/30'
                  }`}
                ></div>
              </button>
            ))}
          </div>
   </div>
  )
};

export default Slider;

