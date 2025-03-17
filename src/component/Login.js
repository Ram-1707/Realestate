
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Include your custom styles

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    console.log("Submitting form data:", formData); // Log the form data
  
    try {
      const response = await axios.post("http://localhost:7891/Loginform", formData);
      console.log("Login successful:", response.data);
      navigate("/"); // Redirect to dashboard on success
    } catch (error) {
      console.error("Login failed:", error);
  
      // Display a user-friendly error message
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    }
  };

  return (
    <div className="login-page p-5 homebg">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {error && <p className="error">{error}</p>} {/* Display error message if any */}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <div className="signup-footer">
          <p className="signup-redirect">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
