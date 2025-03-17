import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('username'); // Clear username from localStorage
    navigate('/'); // Redirect to login page
  }, [navigate]);

  return null; // No UI needed for logout
};

export default Logout;
