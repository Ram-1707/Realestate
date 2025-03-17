

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './conformation.css';


const Conformation = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    phonenumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:7891/conformationform", formdata, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
  
      // Clear form fields after successful submission
      setFormdata({
        name: '',
        email: '',
        phonenumber: ''
       
      });
  
    } catch (error) {
      console.error('Error during form submission:', error.response?.data || error.message);
      alert(`Error submitting form: ${error.response?.data?.message || 'Please try again later'}`);
    }
  };
  
  return (
    <div className='homebg'>
    <div className='conformation-container mx-auto p-5'>
      <div className="mt-10 p-8 bg-gray-100 rounded-lg shadow-lg ">
       
        
        <div className="mt-4 bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800  text-center p-2">CONTACT WITH A SELLER...</h3>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3 p-3">
              <label className="form-label ">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                value={formdata.name}
                required
              />
            </div>
            <div className="mb-3 p-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
                value={formdata.email}
                required
              />
            </div>
            <div className="mb-3 p-3">
            <label className="form-label">phonenumber</label>
            <input
                  type="tel"
                  className="form-control"
                placeholder="Enter your phone number"
                name="phonenumber"
                 onChange={handleChange}
                 value={formdata.phonenumber}
                 required
                />
            </div>
          
            <div className=' send'>
            <button className="bg-blue-500 text-blacl p-2 m-2 m-center rounded-lg shadow-md hover:bg-blue-600 sen ">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Conformation;
