// Import necessary libraries
const express = require("express");
const routes = express.Router();
const axios = require("axios");
require("dotenv").config();

const dashBoard = process.env.API_ENDPOINT;

routes.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const animeDetails = `${dashBoard}/episodes/${id}`;
    // Fetch data from the anime API
    const response = await axios.get(animeDetails);
    // Send the response data back to the frontend
    res.json(response.data);
  } catch (error) {
    // Handle any errors and send a failure message
    console.error("Error fetching anime data:", error);
    res.status(500).json({ message: "Failed to fetch anime data" });
  }
});

module.exports = routes;
