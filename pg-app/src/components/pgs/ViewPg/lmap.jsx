import React, { useEffect ,useState} from "react";
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

let map;
let lati=0,longi=0;


let marker;
function newMarker(lat,long)
{
    console.log([lati,longi,lat,long]);
    if(lati!=0 && longi!=0 &&lat&&long&&map)
    {
      L.polyline([[lati,longi],[lat,long]]).addTo(map);
    }
    lati=lat;
    longi=long;
    if(marker)
    {
      map.removeLayer(marker)
    }
    marker=L.marker([lati,longi]).addTo(map);
    map.setView([lati,longi]);
    // if(i==arr.length-1)
    // {
    //   i=0;
    // }
    // else
    // {
    //   i=i+1;
    // }
}
function LeafletMap(props) {
  // [coords,setCoords]=useState([0,0]);

  useEffect(() => {
    var container = L.DomUtil.get("map");

    if (container != null) {
    container._leaflet_id = null;
    }
    // setCoords([props.lat,props.long]);
    
    mapp();
    
      
    
    

    return()=>{
      // clearInterval(myInterval);
    map.eachLayer(function (layer) {
    map.removeLayer(layer);
    });
    }


  }, []);
  useEffect(()=>{
    newMarker(props.lat,props.long);
  },[props.lat,props.long]);

  // const mapp = () => {

  //   // The <div id="map"> must be added to the dom before calling L.map('map')
  //   map = new L.map('map',{dragging:true});
    
  //   map.eachLayer(function (layer) {
  //     map.removeLayer(layer);
  //     });
  //   map.setView([51.5,-0.09],16);
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //       attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);
    
  //   // myInterval=setInterval(newMarker,3000);
  // };

  
  const mapp = () => {
    // The <div id="map"> must be added to the dom before calling L.map('map')
    map = new L.map("map", { dragging: true });

    map.eachLayer(function (layer) {
      map.removeLayer(layer);
    });
 
    map.setView([51.5, -0.09], 15);
    // L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}.png", {
    //   attribution:
    //     '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);


    L.tileLayer.wms("https://bhuvan-vec1.nrsc.gov.in/bhuvan/gwc/service/wms/?",{
      layers: 'india3',
      format: 'image/jpeg',
      transparent : true,
      version: '1.1.0',
      attribution: 'Bhuvan/ISRO'
    }).addTo(map);

    // myInterval=setInterval(newMarker,3000);
  };

  return <div id="map" ></div>;
}




export default LeafletMap;
