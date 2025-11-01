
import React, {useState, useEffect} from "react";
  const sliderData = [
   "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxneW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
   "https://images.unsplash.com/photo-1734668486909-4637ecd66408?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMDE2JTNBOXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
   "https://plus.unsplash.com/premium_photo-1664299685813-eafae169c04a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzcyUyMDE2JTNBOXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
   "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
   "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
   "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",

     
     
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

