// Line 1 - Headers
// Line 2 - Units
export const parseBuoyData = (data) => {
  const result = [];
  const lines = data.split("\n");

  lines.forEach((line) => {
    result.push(
      line
        .replace(/\s{2,}/g, " ")
        .replace("#", "")
        .split(" ")
    );
  });

  const headerMap = result[0];
  const unitMap = result[1];

  const jsonResults = [];

  result.forEach((buoy) => {
    const tempObj = {};
    headerMap.forEach((key, index) => {
      tempObj[key] = buoy[index];
    });
    jsonResults.push(tempObj);
  });

  return jsonResults;
};
