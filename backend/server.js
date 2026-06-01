const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3003;

app.get("/test", (req, res) => {
    res.send("Test route");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});