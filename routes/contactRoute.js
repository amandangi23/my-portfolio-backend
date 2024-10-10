const express = require("express");
const router = express.Router();
const { contactController } = require("../controllers/contactController");

// routes //
router.post("/contact", contactController);

// export //
module.exports = router;
