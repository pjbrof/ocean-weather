import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupDetail from "../PopupDetail/PopupDetail.tsx";
// import { getBuoyData } from "../../actions/dataActions";

// import { hasBuoyCam } from "../../../hasbuoycam";
import buoyData from "../../../data/buoy.json";
import "./Map.css";

const buoys = buoyData;

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
            <Marker key={buoy.STN} position={[buoy.LAT, buoy.LON]}>
              <Popup>
                <PopupDetail buoy={buoy} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
