export default async function handler(request, response) {
  try {
    const data = await getBuoyData();
    return response.status(200).json({ data });
  } catch (e) {
    return response.status(400);
  }
}

async function getBuoyData() {
  try {
    const response = await fetch(
      "https://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt"
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const dataStr = await response.data.toString();
    parseBuoyData(dataStr);
  } catch (error) {
    console.error(error.message);
  }
}

// module.exports = {
//   getBuoyData,
// };
