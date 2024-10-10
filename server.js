const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/DbConnection");
const contactRoutes = require("./routes/contactRoute");

// Middlewares //
connectDb();
app.use(cors());
app.use(express.json());

// Routes //
app.use("/api/v1", contactRoutes);

// listen to server port
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
