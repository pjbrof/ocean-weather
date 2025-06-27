const sharp = require("sharp");

imageHeight = 270;
const segmentWidth = 480;
// detailsHeight = 30;

// mkdir for output

const splitImages = (imagePath) => {
  for (let i = 0; i <= 5; i += 1) {
    sharp(imagePath)
      .extract({
        left: i * segmentWidth,
        top: 0,
        width: segmentWidth,
        height: imageHeight,
      })
      .toFile(`test/output_${i}.jpeg`);
  }
};

module.exports = {
  splitImages,
};
