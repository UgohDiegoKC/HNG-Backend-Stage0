// server.js (using Express.js)

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Replace with your actual email and GitHub URL
const email = 'diegokingsley14@gmail.com';
const githubUrl = 'https://github.com/UgohDiegoKC/HNG-Backend-Stage0.git';

app.use(cors()); // Enable CORS for all origins

app.get('/', (req, res) => {
  const currentDatetime = new Date().toISOString();

  const response = {
    email: email,
    current_datetime: currentDatetime,
    github_url: githubUrl,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
