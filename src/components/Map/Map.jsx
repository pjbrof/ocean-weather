import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupDetail from "../PopupDetail/PopupDetail.jsx";
// import { getBuoyData } from "../../actions/dataActions";
import { buoyIcon, shipIcon } from "../../utils/icon.js";

// import { hasBuoyCam } from "../../../hasbuoycam";
import buoyData from "../../../data/buoy.json";
import shipData from "../../../data/ship-obs.json";
import "./Map.css";

const buoys = buoyData;
const ships = shipData;

const accessToken =
  "pk.eyJ1IjoicGpicm9mIiwiYSI6ImNqMjNvZDBraTAwMjMzMm81MWcxMjA4cjIifQ.-XXQyKK7bZW7Lg4dLJ3Suw";
// const buoyCAM = false;

// const filterUndefined = (buoy) => {
//   if (buoy.LAT === undefined) {
//     return false;
//   }
//   return true;
// };

// const filterBuoyCAM = (buoy) => {
//   return hasBuoyCam.some((cam) => {
//     return buoy.STN === cam;
//   });
// };

// const applyFilters = (filters = { undef: true, cam: true }, item) => {
//   if (filters.undef) {
//     return filterUndefined(item);
//   }
// };

const Map = () => {
  // useEffect(() => {
  //   getBuoyData();
  // }, []);

  return (
    <>
      <MapContainer center={[40, -113]} zoom={4}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/pjbrof/ckzeqwsw9001014mrha37jqib/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`}
        />
        {buoys.map((buoy) => {
          return (
            <Marker icon={buoyIcon} key={buoy.STN} position={[buoy.LAT, buoy.LON]}>
              <Popup>
                <PopupDetail buoy={buoy} />
              </Popup>
            </Marker>
          );
        })}
        {ships.map((ship, index) => {
          return (
            <Marker
              icon={shipIcon}
              key={index}
              position={[ship.LAT, ship.LON]}
            >
              <Popup>
                <div>Wind Speed: {ship.WSPD}</div>
                <div>Wind Direction: {ship.WDIR}</div>
                <div>Pressure mmHg: {ship.PRES}</div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
