/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Location() {
  return (
    <div className="bg-black min-h-screen">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
        <div className="min-w-[200px]">
          <h1 className="text-[3rem] text-center text-white xl:text-[4rem] xl:leading-[4rem] font-bold  xl:text-left py-24 xl:py-4 xl:p-4  inline-block ">
            <span className="cursor-pointer transition-transform duration-1000 ease-in-out hover:translate-x-2 text-white  hover:text-red-500  ">
              FIND
            </span>
            <br />
            <span className="cursor-pointer transition-transform duration-1000 ease-in-out hover:translate-x-2 text-white  hover:text-green-500  ">YOUR</span> <br />{" "}
            <span className="cursor-pointer transition-transform duration-1000 ease-in-out hover:translate-x-2 text-white  hover:text-yellow-500  ">NEAREST </span>
            <br />
            <span className="cursor-pointer transition-transform duration-1000 ease-in-out hover:translate-x-2 text-white  hover:text-purple-500  ">GYM</span>
          </h1>
        </div>

        <div className="bg-slate-200 rounded-3xl h-[600px]">
          <iframe
            className="h-full w-full rounded-3xl p-1 bg-stone-600"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28462.262814316353!2d75.73757527311385!3d26.910385849835077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db52be379bd1b%3A0x26d677d98d9cd045!2sAnytime%20Fitness!5e0!3m2!1sen!2sin!4v1761722631002!5m2!1sen!2sin"
          ></iframe>
         
        </div>
      </div>
    </div>
  );
}

export default Location;
