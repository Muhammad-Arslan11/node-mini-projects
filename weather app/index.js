const express = require("express");
const axios = require("axios");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve the public folder as static files
app.use(express.static("public"));

// Render the index template with default values for weather and error
app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

// Handle the /weather route
app.get("/weather", async (req, res) => {
  // Get the city from the query parameters
  const city = req.query.city;
  console.log(`Fetching weather for city: ${city}`);

  const apiKey = "a8d6247699mshc892605af61a4b8p19fe0ajsn644159fc2362";

  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
    }
  };

  let weather = null;
  let error = null;

  try {
   
    const response = await axios.request(options);
      // Check if the API response contains a valid city
      if (!response.data || response.data.error) {
        error = "City not found. Please enter a valid city name!";
      } else {
    weather = response.data;}
    
    console.log(weather);
  } catch (err) {
    console.error("API Error:", err.message);
    error = "Error, Please try again";
  }


  // Render the index template with the weather data and error message
  res.render("index", { weather, error });
});

// Start the server and listen on port 3000 or the value of the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
