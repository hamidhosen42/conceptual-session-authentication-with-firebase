import React, { useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Direction from "./Direction";

const Map = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const containerStyle = {
    width: "75vw",
    height: "50vh",
  };

  const center = {
    lat: 22.33402501820867,
    lng: 91.8301002288364,
  };

  const displayDirection = (event) => {
    event.preventDefault();

    const start = event.target.origin.value;
    const end = event.target.destination.value;

    setOrigin(start);
    setDestination(end);
  };

  return (
    <div>
      <PageTitle title="Map" />
      <h2 className="text-center">Google Map</h2>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <div>
        <h2 className="text-center mt-5">Direction</h2>
        <div className="text-center mx-auto mb-5">
          <form onSubmit={displayDirection}>
            <input type="text" name="origin" required />
            <br />
            <input type="text" name="destination" required />
            <br />
            <input type="submit" value="Show Direction" />
          </form>
        </div>
        <Direction origin={origin} destination={destination} />
      </div>
    </div>
  );
};

export default Map;