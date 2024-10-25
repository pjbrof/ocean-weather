const axios = require("axios");

export default async function handler(request, response) {
  try {
    const data = await getBuoyData();
    return response.status(200).json({ data });
  } catch (e) {
    return response.status(400);
  }
}

async function getBuoyData() {
  return await axios
    .get("https://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt")
    .then(function (response) {
      return parseBuoyData(response.data.toString());
    })
    .catch(function (err) {
      console.log("There was an error with the request: ", err);
    });
}

// module.exports = {
//   getBuoyData,
// };
