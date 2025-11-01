import Button from "../Components/Button";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../Components/Common/common_tost/Toast";

function Signup() {
  const navigate = useNavigate();
  const { addToast } = Toast();

  // State initialization
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load stored data from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  // Update localStorage on input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    localStorage.setItem("password", e.target.value);
  };

  // Login / Signup handler
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (
      name === storedName &&
      email === storedEmail &&
      password === storedPassword
    ) {
      addToast("Login successful!", "success");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      addToast("Invalid Inputs!", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-black w-full justify-center">
      <div className="to-gray-900 border border-red-500 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-6xl font-semibold font-mono text-white mb-6 text-center hover:text-red-500 cursor-pointer">
          Sign Up
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-2xl text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full text-white px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-2xl text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full text-white px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1 text-2xl">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 text-white py-2 border rounded-lg focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-400 hover:border-black"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button label="Login" onClick={handleLogin} type="button" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
