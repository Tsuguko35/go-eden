import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import Leaflet marker icon images
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix the issue with missing marker icons
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

function MapComponent({ zipCode, submit, setSubmit }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  let mapWidth = "400px";

  useEffect(() => {
    if (mapInstanceRef.current) return; // Prevent re-initialization

    const map = L.map(mapContainerRef.current).setView(
      [37.7749, -122.4194],
      13
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    mapInstanceRef.current = map;
  }, []);

  const geocodeZip = async (zip) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&postalcode=${zip}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        const map = mapInstanceRef.current;
        map.setView([lat, lon], 13);
        L.marker([lat, lon], { icon: defaultIcon }).addTo(map);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error during geocoding:", error);
      alert("Geocoding failed. Please try again later.");
    }

    setSubmit(false);
  };

  useEffect(() => {
    if (submit) {
      geocodeZip(zipCode);
    }
  }, [submit]);

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{
          height: "100%",
          width: "100%",
          minHeight: mapWidth,
          position: "relative",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
}

export default MapComponent;
