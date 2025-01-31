const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        email: "diegokingsley14@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/UgohDiegoKC/HNG-Backend-Stage0.git"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
