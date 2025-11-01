import React, { useState } from "react";
import Popup from "../Components/Common/Popup";
import Button from "../Components/Button";
export default function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      title: "Monthly Based",
      subtitle: "Its Beginers Choice",
      description: "If You Are A Beginer You Should Enroll this Membership",
      points: ["Charges $12.50", "No Personal Coach", "AC with FREE Water"],
      image: "https://i.pinimg.com/736x/33/19/cd/3319cdf4e06fb50b7271dfa6f3dace3e.jpg",
    },
    {
      title: "3 Months Based",
      subtitle: "Its Intermediate Choice",
      description:
        "So You Are Not Noob In Muscle Bulding You Should Enroll This 3 Months Based Membership because in this you save $6 dollars",
      points: ["Charges $30.50", "No Personal Coach", "AC with FREE Water"],
      image: "https://i.pinimg.com/736x/ae/e0/b8/aee0b856ae256171f9424f9231ba8362.jpg",
      reverse: true,
    },
    {
      title: "6 Months Based",
      subtitle: "Its Intermediate Choice",
      description:
        "If You Are Way Batter Then A Intermediate You Need To Try 6 Months Membership because in this you save $22 dollars",
      points: ["Charges $55", "Personal Coach", "AC with FREE Water"],
      image: "https://i.pinimg.com/736x/58/76/65/58766534a1533dee4bcbf2ceb4454eed.jpg",
    },
    {
      title: "6 Months Based",
      subtitle: "Its Intermediate Choice",
      description:
        "If You Are Way Batter Then A Intermediate You Need To Try 6 Months Membership because in this you save $22 dollars",
      points: ["Charges $55", "Personal Coach", "AC with FREE Water"],
      image: "https://i.pinimg.com/736x/b9/c5/23/b9c52342690fdaae1c9787f918b58edc.jpg",
      reverse: true,

    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lets Talk About Memberships
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover Over Memberships...
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6 p-6">
                <div>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-gray-700 dark:text-gray-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                 <Button  
                  onClick={() => setIsModalOpen(true)}
                  label="Enroll Now"
                  />
                  
              </div>
              <div className="flex-1">
                <div className=" rounded-2xl overflow-hidden shadow-2xl ">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="hover:scale-110 hover:rotate-6 hover:translate-y-2 transition-transform duration-500"
                  />
                </div>
              
                <Popup
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Complete Payment"
                >
                  <p className="text-gray-900 mb-6">
                    Click the button below to proceed with your payment.
                  </p>
                  <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    Pay
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                </Popup>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
