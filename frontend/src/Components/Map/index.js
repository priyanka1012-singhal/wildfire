import React, { Component } from "react";
import { Map as LeafletMap, Marker, Popup } from "react-leaflet";
import GoogleLayer from "./GoogleLayer";

const key = "AIzaSyDEG4lyorD61vnJoAHG0FkQERZ-McElZyg";
const satellite = "SATELLITE";

class Map extends Component {
  render() {
    return (
      <LeafletMap
        center={[32, -116]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <GoogleLayer googlekey={key} maptype={satellite} />
        <Marker position={[50, 10]}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
