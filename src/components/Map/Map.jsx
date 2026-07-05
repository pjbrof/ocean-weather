import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import PopupDetail from "../PopupDetail/PopupDetail.jsx";
import { buoyIcon, shipIcon } from "../../utils/icon.js";

import "./Map.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";


const Map = () => {
  const buoys = useSelector((state) => state.filter.buoys);
  const ships = useSelector((state) => state.filter.ships);

  return (
    <>
      <MapContainer center={[40, -113]} zoom={4}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/pjbrof/ckzeqwsw9001014mrha37jqib/tiles/256/{z}/{x}/{y}?access_token=${import.meta.env.VITE_MAPBOX_API_KEY}`}
        />
        <MarkerClusterGroup chunkedLoading>
          {buoys?.map((buoy) => {
            return (
              <Marker icon={buoyIcon} key={buoy.STN} position={[buoy.LAT, buoy.LON]}>
                <Popup>
                  <PopupDetail buoy={buoy} />
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
        {/* {ships?.map((ship, index) => {
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
        })} */}
      </MapContainer>
    </>
  );
};

export default Map;
