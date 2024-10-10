const contactModel = require("../models/contactModel");

// contact controllers //

const contactController = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    if (!firstName || !lastName || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const saveMessage = await contactModel.create({
      firstName,
      lastName,
      email,
      message,
    });
    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// exports

module.exports = {
  contactController,
};
