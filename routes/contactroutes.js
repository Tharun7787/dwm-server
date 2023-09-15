const express = require("express");
const router = express.Router();
const Contact = require("../models/ContackUs"); // Assuming your Mongoose model is defined in a file named "Contact.js"

// POST route to create a new contact
router.post("/contacts", async (req, res) => {
  try {
    const { Name, Email, Phonenumber, Message } = req.body;

    // Create a new contact instance
    const newContact = new Contact({ Name, Email, Phonenumber, Message });

    // Save the contact to the database
    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new contact" });
  }
});

// GET route to retrieve all contacts
router.get("/contacts", async (req, res) => {
  try {
    // Retrieve all contacts from the database
    const contacts = await Contact.find();

    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
});

module.exports = router;
