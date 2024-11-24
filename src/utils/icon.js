import L from "leaflet";
import iconImage from "../img/marker-pin-person.png";

const iconPerson = new L.Icon({
  iconUrl: iconImage,
  iconRetinaUrl: iconImage,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 20),
});

export { iconPerson };
