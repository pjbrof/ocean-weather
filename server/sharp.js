const sharp = require("sharp");

imageHeight = 270;
const segmentWidth = 480;
// detailsHeight = 30;

// mkdir for output

for (let i = 0; i <= 5; i += 1) {
  sharp("./pic1.jpg")
    .extract({
      left: i * segmentWidth,
      top: 0,
      width: segmentWidth,
      height: imageHeight,
    })
    .toFile(`test/output_${i}.jpeg`);
}
