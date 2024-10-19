const express = require('express');
const router = express.Router();
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rabiyakhan70594@gmail.com',
      pass: 'Welcome@123@#',
    },
  });
transporter.sendMail({
    from: 'rabiyakhan7@gmail.com',
    to: candidateEmail,
    subject: 'New Job Posting: ' + title,
    text: `Job Title: ${title}\nDescription: ${description}\nExperience Level: ${experienceLevel}\nEnd Date: ${endDate}`,
  }, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
  
// Signup
router.post('/signup', async (req, res) => {
  const { name, mobile, companyName, email, employeeSize, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      mobile,
      companyName,
      email,
      employeeSize,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

router.post('/jobs', async (req, res) => {
    const { title, description, experienceLevel, candidateEmail, endDate } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          title,
          description,
          experienceLevel,
          candidateEmail,
          endDate,
        });
        await newUser.save();
        res.status(201).json({ message: 'Job Posted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error Posting Job' });
      }
    // Add logic to send email using Nodemailer
    // Add job posting logic to save it in the database
  });
// Email verification logic can be added here
// Add more routes as necessary (login, etc.)

module.exports = router;
