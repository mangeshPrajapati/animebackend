// Import necessary libraries
const express = require("express");
const routes = express.Router();
const axios = require("axios");
require("dotenv").config();

const dashBoard = process.env.API_ENDPOINT;

routes.post("/", async (req, res) => {
  try {
    // const id = req.params.id;
    const episodeId = req.body.episodeId;
    const server = req.body.server;
    const category = req.body.category;
    const animeDetails = `${dashBoard}/episode-srcs?id=${episodeId}&server=${server}&category=${category}`;
    // Fetch data from the anime API
    const response = await axios.get(animeDetails);
    // Send the response data back to the frontend
    console.log("streaming site hit");
    res.json(response.data);
  } catch (error) {
    // Handle any errors and send a failure message
    // console.error("Error fetching anime data:", error);
    res.status(500).json({ message: "Failed to fetch anime data" });
  }
});

module.exports = routes;
