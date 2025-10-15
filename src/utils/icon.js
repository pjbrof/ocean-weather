import L from "leaflet";
import buoyImg from "../img/buoy.svg";
import shipImg from "../img/ship.png";

const buoyIcon = new L.Icon({
  iconUrl: buoyImg,
  shadowUrl: null,
  iconSize: [40, 40],
  shadowSize:   [20, 20], // size of the shadow
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
  shadowAnchor: [10, -10],  // the same for the shadow
  popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
});

const shipIcon = new L.Icon({
  iconUrl: shipImg,
  shadowUrl: null,
  iconSize: [20, 20],
  shadowSize:   [20, 20], // size of the shadow
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
  shadowAnchor: [10, -10],  // the same for the shadow
  popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
});

export { buoyIcon, shipIcon };
