// var Xray = require("x-ray");
// var x = Xray();

// x("https://www.ndbc.noaa.gov/ship_obs.php?uom=E&time=1", ".wide-content", [
//   {
//     ship: ["span"],
//   },
// ]).then(function (res) {
//   console.log(res[0].ship[1]);
//   //res[0].ship[1]
// });

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

const csv = exampleShip.replace(/ +/g, ",");

const shipArray = csv.split(",");

const shipObj = shipArray.map((value, valueIndex) => {
  legend.forEach((key, legendIndex) => {
    if (valueIndex === legendIndex) {
      return key: value
    } 
  });
});

console.log(shipObj);
