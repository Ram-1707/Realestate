
import React, { useState } from "react";
import './signup.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import Input from "@mui/material/Input";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {  useNavigate } from "react-router";
// import Login from "./Login";





const SignUpPage= () => {

  const [formdata, setFormdata] = useState({
        username: "",
        email: "",
        password: ""
      });
      const Navigate = useNavigate();
      const [showPassword, setShowPassword] = useState(false);
    
      const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:7891/signupform", formdata)
          
              .then(response => {
                alert('Form submitted successfully!');
                
                  Navigate ('/Login');
           
                setFormdata({
                
                  email: '',
                  username: '',
                  password:''
                });
              })
              .catch(error => {
                console.error('Error during form submission:', error);  // Log full error
                const errorMessage = error.response?.data?.error || error.message || 'Something went wrong!';
                alert('Error submitting form: ' + errorMessage);
              });
        }
      
  return (
       <>
       <div className="homebg">
    <div className="one container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: 500, height: 500 }}>
          <h3 className="text-center">Sign-up</h3>
          <form onSubmit={handleSubmit}>
      

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                value={formdata.email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">user Name</label>
              <input
                type="text"
                className="form-control"
                  placeholder="username"
                name="username"
                onChange={handleChange}
                value={formdata.username}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                  placeholder="password"
                onChange={handleChange}
                value={formdata.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-2">
              Submit
            </button>
            
                        
        
            <div className="signup-footer">
           <p className="login-redirect">
             Already have an account? <a href="/login" className="login-link">Log in</a>
           </p>
       </div>
            
             
             
            
            
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SignUpPage;