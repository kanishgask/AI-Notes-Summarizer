const express = require("express");
const axios = require("axios");

const router = express.Router();

// Call Python AI service
router.post("/summarize", async (req, res) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/summarize", {
      text: req.body.text,
    });

    res.json({ summary: response.data.summary });
  } catch (error) {
    res.status(500).json({ error: "Error summarizing text" });
  }
});

module.exports = router;
