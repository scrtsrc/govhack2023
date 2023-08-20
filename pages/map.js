import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import facData from "../data/cop.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faWheelchair } from "@fortawesome/free-solid-svg-icons"; // Example FontAwesome icon

const GoogleMap = ({ events,hoveredEventIndex }) => {
  const mapRef = useRef(null);
  const defaultIcon = {
    //path: google.maps.SymbolPath.TRIANGLE,
    scale: 8,
    fillColor: "#494F55",
    fillOpacity: 1,
    strokeWeight: 0,
  };
  const markers = []; // Store marker instances

  const facIcon = {
    // Using FontAwesome icon for the custom marker
    path: faWheelchair.icon[4], // FontAwesome icons are defined as arrays, 4th index contains the path
    scale: 0.05, // You might need to adjust the scale
    fillColor: "yellow",
    fillOpacity: 1,
    strokeWeight: 0,
  };
  const updateMarkers = () => {

    markers.forEach((marker, index) => {
    
      console.log("pos", marker.position)
      marker.setIcon(index === hoveredEventIndex ? hoveredIcon : defaultIcon);
    });
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    const loadMap = async () => {
      await loader.load();
      let loc = {
        lat: -31.950527,
        lng: 115.860457,
      };
 
      const map = new google.maps.Map(mapRef.current, {
        center: loc,
        zoom: 11,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });
      events.forEach((e) => {
        const marker = new google.maps.Marker({
          position: e.loc,
          map: map,
          label: {
            color: "#ffffff",
          },
          icon: defaultIcon,
        });

      });


      facData.forEach((f) => {
        const marker = new google.maps.Marker({
          position: f.loc,
          map: map,
          label: {
            color: "#ffffff",
            text: f.fac
          },
          icon: facIcon,
        });

    });

      return () => {
        markers.forEach((marker) => {
          marker.setMap(null); // Clean up markers when component unmounts
        });
      };
    };

    loadMap();
  }, []);
  
  useEffect(() => {
  
    updateMarkers(); // Update markers when hoveredEventIndex changes
  }, [hoveredEventIndex]);
  return (
    <div
      ref={mapRef}
      style={{ height: "400px", width: "70%", float: "left" }}
    />
  );
};

export default GoogleMap;
