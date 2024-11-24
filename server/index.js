const fs = require("fs");
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const downloadImage = async (imageUrl, outputPath) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "stream" });
    response.data.pipe(fs.createWriteStream(outputPath));

    return new Promise((resolve, reject) => {
      response.data.on("end", () => {
        resolve();
      });

      response.data.on("error", (err) => {
        reject(err);
      });
    });
  } catch (error) {
    throw new Error(`Error downloading the image: ${error}`);
  }
};

// Example usage
const imageUrl = "https://ndbc.noaa.gov/buoycam.php?station=51002";
const outputPath = "./photos/image.jpg";

downloadImage(imageUrl, outputPath)
  .then(() => {
    console.log("Image downloaded successfully!");
  })
  .catch((error) => {
    console.error("Error downloading the image:", error);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
