import React, { useState } from 'react';
import axios from 'axios';

const JobPosting = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    experienceLevel: '',
    candidateEmail: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Post job data to your backend
    try {
      const response = await axios.post('http://localhost:5000/api/jobs', jobData);
      alert(response.data.message);
      // Navigate to a success page if necessary
    } catch (error) {
      console.error(error);
      alert('Error posting job');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Job Description" onChange={handleChange} required />
      <input type="text" name="experienceLevel" placeholder="Experience Level" onChange={handleChange} required />
      <input type="email" name="candidateEmail" placeholder="Candidate Email" onChange={handleChange} required />
      <input type="date" name="endDate" onChange={handleChange} required />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobPosting;
