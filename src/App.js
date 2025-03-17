
// import logo from './logo.svg';
// import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../src/component/Login";
import Navbar from "../src/component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../src/component/Home";
import About from "../src/component/About";
import Land from "../src/component/Land";
// import Blog from "../src/component/Blog";
import Contact from "../src/component/Contact";
import SignUpPage from "../src/component/Signup.js";
import Footer from "./component/Footer.js";
import Details from "./component/details.js";
import Conformation from "./component/Conformation.js";



const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Land" element={<Land />} />
          {/* <Route path="/Blog" element={<Blog />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Conformation" element={<Conformation/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
