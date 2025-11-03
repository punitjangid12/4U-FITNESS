import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import { Toast } from "../Components/Common/common_tost/Toast";

function ContactUs() {
  const { addToast } = Toast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleNameInput = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/;

    // ✅ Validation conditions
    if (name.trim().length < 3) {
      addToast("Name must be at least 3 characters long!", "error");
      return;
    }

    if (!nameRegex.test(name)) {
      addToast("Name cannot contain numbers or special characters!", "error");
      return;
    }

    if (!email.includes("@") || !email.endsWith("gmail.com")) {
      addToast("Email must include '@' and end with 'gmail.com'!", "error");
      return;
    }

    // ✅ All conditions passed
    addToast("We will contact you back soon!", "success");
  };

  return (
    <div className="min-h-screen flex items-center flex-col bg-black justify-center">
      <h2 className="text-6xl font-extrabold mb-4 text-white font-orbitron">
        Contact Us
      </h2>

      <div className="p-8 rounded-lg shadow-md w-full max-w-md bg-transparent">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameInput}
              className="w-full px-4 py-2 border bg-transparent text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailInput}
              className="w-full px-4 py-2 border bg-transparent text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your Email"
              required
            />
          </div>

          <Button label="Submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
