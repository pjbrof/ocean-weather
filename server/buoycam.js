import fs from 'fs';
import axios from 'axios';
import { splitImages } from './sharp.js';

const imageUrl = "https://ndbc.noaa.gov/buoycam.php?station=51002";
const outputPath = "./test/images/image.jpg";

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

// downloadImage(imageUrl, outputPath)
//   .then(() => {
//     console.log("Image downloaded successfully!");
//     sharp.splitImages(outputPath);
//   })
//   .catch((error) => {
//     console.error("Error downloading the image:", error);
//   });