import React from 'react'

function Videobox() {
  return (
    <div className=" pt-1 pb-1 ">
      <video
        src="https://strapi-server-bucket.s3.us-east-1.amazonaws.com/o2-hero-section.mp4"
        autoPlay
        loop
        muted
        
        className="w-[100%] shadow-lg"
      />
    </div>
  )
}

export default Videobox