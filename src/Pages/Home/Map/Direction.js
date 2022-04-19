import React, { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

const Direction = ({ origin, destination }) => {
  //   const origin = "chittagong";
  //   const destination = "dhaka";
  const [response, Setresponse] = useState(null);

  const directionsCallback = (res) => {
    console.log(res);

    if (res !== null) {
      if (res.status === "OK") {
        Setresponse(res);
      } else {
        console.log("response: ", res);
      }
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            width: "75vw",
            height: "50vh",
          }}
          // required
          zoom={14}
          // required
          center={{
            lat: 0,
            lng: -180,
          }}
        >
          {destination !== "" && origin !== "" && (
            <DirectionsService
              // required
              options={{
                destination: destination,
                origin: origin,
                travelMode: "DRIVING",
              }}
              // required
              callback={directionsCallback}
            />
          )}

          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: this.state.response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Direction;