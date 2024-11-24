const fs = require("fs");
var Xray = require("x-ray");

var x = Xray();

x("https://www.ndbc.noaa.gov/ship_obs.php?uom=E&time=1", ".wide-content", [
  {
    ship: ["span"],
  },
]).then((res) => {
  const json = [];
  const shipArray = res[0].ship.slice(1);
  shipArray.forEach((ship) => {
    json.push(formatData(ship));
  });

  fs.writeFileSync(`./ship-obs.json`, JSON.stringify(json));
});

const legend = [
  "SHIP",
  "HOUR",
  "LAT",
  "LON",
  "WDIR",
  "WSPD",
  "GST",
  "WVHT",
  "DPD",
  "PRES",
  "PTDY",
  "ATMP",
  "WTMP",
  "DEWP",
  "VIS",
  "TCC",
  "S1HT",
  "S1PD",
  "S1DIR",
  "S2HT",
  "S2PD",
  "S2DIR",
  "Ice",
  "Sea",
];

const exampleShip =
  "SHIP     04  51.9    2.7    -     -     -     -     -  29.22 -0.11  57.7     -  55.8     -    -     -     -      -     -     -      -  ---- -----";

const formatData = (report) => {
  const csv = report.replace(/ +/g, ",");
  const shipArray = csv.split(",");
  const data = {};

  shipArray.forEach((value, valueIndex) => {
    legend.forEach((key, legendIndex) => {
      if (valueIndex === legendIndex) {
        data[key] = value;
      }
    });
  });

  return data;
};
