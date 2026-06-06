const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3003;
const allowed = [ "http://localhost:5173", "https://pro-tasker-app-1.onrender.com"]

const connectDB = require('./config/db.js');

const userRouter = require("./routes/userRoutes.js");
const projectRouter = require("./routes/projectRoutes.js");
const taskRouter = require("./routes/taskRoutes.js");

// DB CONNECTION
connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: allowed,
    credentials: true
}))

// ROUTES
app.get("/test", (req, res) => {
    res.send("Test route");
});

app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/projects", taskRouter);

// PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});