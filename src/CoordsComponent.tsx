import { useState } from "react";
import { useMapEvent } from "react-leaflet";

function CoordsComponent() {
	const [coords, setCoords] = useState({ lat: 0, lng: 0 });
	const map = useMapEvent('mousemove', (e) => {
	  setCoords(e.latlng);
	  //let droneIcon = document.querySelector("img[src='drone.png']");
	  //droneIcon?.setAttribute('style', droneIcon?.getAttribute('style') + `transform: rotate(${Math.random() * 360}deg);`);
	  //console.log(coords);
	});
  
	const saveToClipboard = useMapEvent('click', (e) => {
	  navigator.clipboard.writeText(`{lat: ${coords.lat.toFixed(6)}, lng: ${coords.lng.toFixed(6)}, value: 1}`);
	  //path = [...path, {lat: coords.lat, lng: coords.lng, value: 1}];
	});
  
	return (
	  <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '10px', backgroundColor: 'black', zIndex: 1000 }}>
		<p style={{fontSize: '11px'}}>Latitude: {coords.lat.toFixed(6)}</p>
		<p style={{fontSize: '11px'}}>Longitude: {coords.lng.toFixed(6)}</p>
	  </div>
	);
  }

export default CoordsComponent;