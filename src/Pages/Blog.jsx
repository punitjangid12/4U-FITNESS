import React from 'react'

function Blog() {
  return (
    <div className="bg-black text-white min-h-screen p-6 ">
      {/* Heading */}
      <h2 className="text-2xl font-bebas tracking-widest sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl  transition-transform duration-300  text-center mb-10">
        Why You Need Exercises?
      </h2>
        {/* first */}
      <div 
      
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-6 mb-10">
      
        <div className="w-full h-[250px] overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="Workout"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-3">🧠 1. For Your Mind</h3>
          <p className="text-gray-300 leading-relaxed ">
            <strong className=' text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Reduces stress & anxiety:</strong> Exercise releases endorphins — the “feel good” hormones.
            <br />
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Boosts focus & confidence:</strong> You think clearer and feel stronger mentally.
            <br />
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Improves discipline:</strong> Training your body trains your mind too.
          </p>
        </div>
      </div>
     <p className='bg-white h-[2px] w-full'></p>
       {/* Second */}
      <div

       initial={{ opacity: 0, Y: 100 }}
      whileInView={{ opacity: 1, Y: 1 }}
      transition={{ duration: 3 }}
       className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-6 mb-10 mt-3">
        <div>
          <h3 className="text-2xl font-bold mb-3">❤️ 2. For Your Body</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'> Builds strength & muscle:</strong> Helps you move better and look athletic.
            <br />
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Improves heart health:</strong> Reduces the risk of diseases.
            <br />
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Burns fat & boosts metabolism:</strong>Keeps your body in shape.
            <br />
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Enhances posture & flexibility:</strong> Less pain, more energy.
          </p>
        </div>
         <div className="w-full h-[250px] overflow-hidden rounded-xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
            alt="Workout"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
       <p className='bg-white h-[2px] w-full'></p>
      {/* Third */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-6 mb-10 mt-3">
      
        <div className="w-full h-[250px] overflow-hidden rounded-xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1687202582480-025b6d54f93d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
            alt="Workout"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">⚡ 3. For Your Life</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>More energy every day:</strong> You feel alive and active.
            <br />
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Better sleep:</strong> Your body recovers faster and rests deeper.
            <br />
            <strong className='text-xl font-extrabold transition-transform duration-300 hover:translate-x-2 text-red-500 hover:text-white hover:underline hover:decoration-white'>Longevity:</strong> You don’t just live longer — you live stronger.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
