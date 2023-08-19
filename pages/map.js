import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ lat, lng }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
    });

    loader.load().then(() => {
      new google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 10,
      });
    });
  }, []);

  return <div ref={mapRef} style={{ height: "400px" }} />;
};

export default GoogleMap;
