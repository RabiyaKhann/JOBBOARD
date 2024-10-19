import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    companyName: '',
    email: '',
    employeeSize: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', formData);
      alert(response.data.message);
      // Navigate to verification page if necessary
    } catch (error) {
      console.error(error);
      alert('Error signing up');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
      <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Company Email" onChange={handleChange} required />
      <input type="number" name="employeeSize" placeholder="Employee Size" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
