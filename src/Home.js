import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "Your-Key",
    
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat:  -6.200000, lng: 106.816666 }), []);
 
  const [marker, setmarker]= useState([])
  useEffect(()=>{
    setmarker([{lat:-6.2102555, lng:106.8019393}])
  },[])
  return (
    marker?.length?<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      {marker?.map((asa, indexs)=>{
        return  <Marker key={indexs} position={asa} />
      })}
      
    </GoogleMap>:<div>Loading....</div>
  );
}