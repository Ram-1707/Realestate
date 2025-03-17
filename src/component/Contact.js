
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './Contact.css';

const Contact = () => {
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
      const response = await axios.post("http://localhost:7891/contactform", formdata, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
  
      // Clear form fields after successful submission
      setFormdata({
        name: '',
        email: '',
        phonenumber: '',
        message: ''
      });
  
    } catch (error) {
      console.error('Error during form submission:', error.response?.data || error.message);
      alert(`Error submitting form: ${error.response?.data?.message || 'Please try again later'}`);
    }
  };
  
  return (
    <div className='homebg'> 
    <div className='contact-container  mx-auto p-4'>
      
        <div className="mt-2 bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-5 text-gray-800 text-center p-2">Contact Us</h2>
        
          {/* <div className="mt-10 p-8 bg-white rounded-lg shadow-lg ">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Send Us a Message</h3> */}
    
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3 p-2">
              <label className="form-label "><b>Name</b></label>
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
            <div className="mb-3 p-2">
              <label className="form-label"><b>Email Address</b></label>
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
            <div className="mb-3 p-2">
            <label className="form-label"><b>phonenumber</b></label>
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
            <div className="mb-3 p-2">
              <label className="form-label"><b>Message</b></label>
              <textarea
                className="form-control"
                placeholder="Enter your message"
                name="message"
                onChange={handleChange}
                value={formdata.message}
                required
              />
            </div>
            <div className=' send'>
            <button className="bg-blue-500 text-blacl p-2 m-2 m-center rounded-lg shadow-md hover:bg-blue-600 sen ">
              Send
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    // </div>
  );
};

export default Contact;
