import React from 'react'


function Profile() {
  return (
    <>
     <div className='bg-black h-screen p-8'>
         <div className='bg-sky-300 grid grid-cols-2'>
                <div>
                    <div><div className="flex justify-center items-center min-h-screen bg-black
     text-white">


      <div className="bg-white/30 backdrop-blur-md  p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150?img=12" // Replace with your profile pic
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-red-500 mb-4"
          />
          <h2 className="text-2xl font-bold">Punit Jangid</h2>
          <p className="text-gray-400">Fitness Creator | 365-Day Journey</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 text-center my-6">
          <div>
            <p className="text-xl font-semibold text-blue-400">55kg</p>
            <p className="text-gray-400 text-sm">Weight</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-blue-400">5'6"</p>
            <p className="text-gray-400 text-sm">Height</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-blue-400">21</p>
            <p className="text-gray-400 text-sm">Age</p>
          </div>
        </div>

        {/* Progress */}
        <div className="my-6">
          <h3 className="text-lg font-semibold mb-2">Muscle Gain Progress</h3>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-700"
              style={{ width: "65%" }} // Adjust progress %
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-1">65% Completed</p>
        </div>

        {/* Goals / Info */}
        <div className="border-t border-gray-700 pt-4 text-sm text-gray-300">
          <p>
            🎯 <span className="text-blue-400">Goal:</span> Build lean muscle and strength.
          </p>
          <p>
            🍽️ <span className="text-blue-400">Diet:</span> Vegetarian (2700 kcal/day)
          </p>
          <p>
            🏋️ <span className="text-blue-400">Training:</span> 6 days/week
          </p>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition-all">
            Edit Profile
          </button>
        </div>
      </div>
    </div></div>
                </div>
                <div>b</div>
         </div>
     </div>
    </>
  )
}

export default Profile