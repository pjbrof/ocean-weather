const fs = require("fs");
const axios = require("axios");
const cron = require("node-cron");
const sharp = require("./sharp");

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

const imageUrl = "https://ndbc.noaa.gov/buoycam.php?station=51002";
const outputPath = "./test/image.jpg";

// cron.schedule("0 * * * *", () => {

// });

downloadImage(imageUrl, outputPath)
  .then(() => {
    console.log("Image downloaded successfully!");
    sharp.splitImages(outputPath);
  })
  .catch((error) => {
    console.error("Error downloading the image:", error);
  });
