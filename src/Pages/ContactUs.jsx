import React from 'react'
import Button from '../Components/Button'
function ContactUs() {
  return (
    <div className='min-h-screen flex items-center flex-col bg-black justify-center '>
            
      <h2 className="text-6xl font-extrabold mb-4 text-white font-orbitron">
          Contact Us
        </h2>
    
                 <div className="bg- p-8 rounded-lg shadow-md w-full max-w-md ">
       
        <form  className="space-y-4">
             <div>
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              value=""
             
              className="w-full px-4 py-2 border bg-transparent  rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-none" 
              placeholder="Enter your Name"
              required
            />
          </div>
          
          <div>
            <label className="block  text-gray-400 mb-1">Enter Your Email</label>
            <input
              type="email"
              value=''
              
              className="w-full px-4 py-2 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-none "
              placeholder="Enter your Email"
              required
            />
          </div>
         <Button  label ="Submit"/>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">  
        </p>
      </div>
      
            </div>
   
  )
}

export default ContactUs