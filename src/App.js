
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Pages/Login';
import Home from './Pages/Home';
import Services from './Pages/Services'
import Location from './Pages/Location'
// import About from './Pages/
import Signup from './Pages/Signup';
import React from 'react';
import { ToastProvider } from './Components/Common/common_tost/Toast';
import Blog from './Pages/Blog';


// import Blog from './Pages/Blog';
function App() {

  return (  
     
    // <div>
    //   <Popup />
    // </div>
  <ToastProvider>
    
    <Router>
      
      <Routes> 
      <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<Blog />} />
      </Routes>
    </Router>

  </ToastProvider>
  );
} 

export default App;
     