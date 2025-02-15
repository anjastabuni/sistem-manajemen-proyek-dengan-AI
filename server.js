require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRouter = require("./routes/projectsRouter");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRouter);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => {
  res.send("Sistem Manajemen Proyek dengan AI ");
});

// jalankan server
app.listen(port, () => console.log(`Server running on port ${port}`));
