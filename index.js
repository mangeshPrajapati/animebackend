const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
// Import routes from separate files
const homeRoutes = require("./src/routes/homePage");
const animeInfo = require("./src/routes/animeAboutInfo");
const animeEpisodes = require("./src/routes/animeEpisodes");
const animeEpisodeServers = require("./src/routes/animeEpisodeServers");
const animeEpisodeStream = require("./src/routes/animeStreaming");

// Use routes for different paths
app.use("/", homeRoutes);
app.use("/anime", animeInfo);
app.use("/episodes", animeEpisodes);
app.use("/servers", animeEpisodeServers);
app.use("/stream", animeEpisodeStream);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
