import React, { use, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Circle, LayersControl, MapContainer, Marker, Polyline, Popup, TileLayer, useMap, useMapEvent, Rectangle, Polygon, LayerGroup } from 'react-leaflet'
import L, { GridLayer, LatLng, LatLngExpression, Layer, polyline } from 'leaflet';
import { Hotline } from 'react-leaflet-hotline';
import 'leaflet.motion/dist/leaflet.motion.min.js';
import FlightParams from './FlightParams';
import Modal from './Modal';
import CoordsComponent from './CoordsComponent';
import PopulationDensityComponent from './PopulationDensityComponent';

let path = [
  {lat: 54.372158, lng: 18.638306, value: 0},
  {lat: 54.371684, lng: 18.630924, value: 10},
  {lat: 54.370902, lng: 18.629669, value: 2},
  {lat: 54.370252, lng: 18.625581, value: 5},
  {lat: 54.371327, lng: 18.623607, value: 4},
  {lat: 54.370252, lng: 18.621676, value: 6},
  {lat: 54.370127, lng: 18.619080, value: 3},
  {lat: 54.370496, lng: 18.612363, value: 4},
  {lat: 54.370087, lng: 18.610802, value: 6},
  {lat: 54.369871, lng: 18.608732, value: 7},
  {lat: 54.369359, lng: 18.608673, value: 7},
  {lat: 54.369265, lng: 18.606967, value: 6}
];





interface MovingDroneProps {
  droneIcon: L.DivIcon;
  setStageFunction?: (stage: number) => void;
  actualSignalFunction?: (signal: number) => void;
}

interface MovingDroneState {
  instance: any;
  sectionNum: number;
}

function MovingDrone({ droneIcon, setStageFunction, actualSignalFunction }: MovingDroneProps) {
  const [state, setState] = useState<MovingDroneState>();
  const [section, setSection] = useState(0);
  const map = useMap();
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!state) {
      // @ts-ignore
      let motionSequence = [];
      let paths = [];
      let prevPoint = path[0];

      path.forEach((point, index) => {
        if (index !== 0) {
          
          motionSequence.push(
            // @ts-ignore
            L.motion.polyline([prevPoint, point], {
              color: 'transparent',
              weight: index-1,
              opacity: 0.5
            },{
              //duration: 3000,
              speed:100,
              auto: false,
              // @ts-ignore
              easing: index===1?L.Motion.Ease.easeInCubic:L.Motion.Ease.linear
            },
            {
              showMarker: false,
              removeOnEnd: index !== path.length - 1,
              icon: droneIcon
            }
          )
          )
          prevPoint = point;
        }
      });

      
      //@ts-ignore
      const polylineInstance = L.motion.seq(motionSequence);
    setState({
      instance: polylineInstance,
      sectionNum: 0
    });
    polylineInstance.addTo(map);
    polylineInstance.on('motion-started', () => {
      console.log('Start');
      setIsStarted(true);
      setIsPaused(false);
    });
    polylineInstance.on('motion-ended', () => {
      console.log('End');
      setStageFunction?.(3);
      setIsStarted(false);
      setIsPaused(false);
    });
    polylineInstance.on('motion-paused', () => {
      console.log('Pause');
      
    });
    polylineInstance.on('motion-resumed', () => {
      console.log('Resume');
      setIsPaused(false);
    });
    polylineInstance.on('motion-section', (e:any) => {
      //console.log(e.layer.options.weight);
      actualSignalFunction?.(path[e.layer.options.weight].value);
    });
    //polylineInstance.motionStart();
    console.log(polylineInstance);
    //polylineInstance.motionPause();
  }}, []);
  

  function start() {
    if (state?.instance) {
      //setSection(0);
      actualSignalFunction?.(path[0].value);
      // @ts-ignore
      state.instance.motionStop();
      
      // @ts-ignore
      state.instance.motionStart();
      setIsStarted(true);
      // @ts-ignore
      setTimeout(() => state.instance.motionPause(), 200);

      setStageFunction?.(0);

      // @ts-ignore
      setTimeout(() => {/*state.instance.motionStop();*/ state.instance.motionResume(); state.instance.motionStart(); setStageFunction(1)}, 3000);
    }
  }

  function stop() {
    if (state?.instance) {
      // @ts-ignore
      state.instance.motionStop();
      // @ts-ignore
      state.instance.motionStart();

      setStageFunction?.(3);

      // @ts-ignore
      setTimeout(() => state.instance.motionPause(), 200);
      setIsStarted(false);
    }
  }

  function resume() {
    if (state?.instance) {
      console.log('Resume');
      // @ts-ignore
      state.instance.motionResume();

      setStageFunction?.(1);
    }
  }

  function pause() {
    if (state?.instance) {
      // @ts-ignore
      state.instance.motionPause();
      setIsPaused(true);
      setStageFunction?.(2);
    }
  }

  return (
    <div style={{ position: 'absolute', bottom: 0, left: '40%', padding: '10px', zIndex: 1000 }}>
      <button onClick={start} className={isStarted?'active':'press-me'} disabled={isStarted}>Start</button>
      <button onClick={stop} disabled={!isStarted} className={!isStarted?'active':''}>Stop</button>
      <button onClick={resume} disabled={(!isStarted)||!isPaused} className={((!isStarted)||!isPaused)?'active':''}>Resume</button>
      <button onClick={pause} disabled={!isStarted||isPaused} className={!isStarted||isPaused?'active':''}>Pause</button>
    </div>
  );
}

function App() {

  const droneIcon = L.divIcon({
    html:"<img src='drone.png' motion-base='-48' style='width: 30px; height: 30px;'/>",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    pane: 'markerPane',
    className: 'drone-icon'
  });

  const [stage, setStage] = useState(3);//0 - start, 1 - in progress, 2 - paused, 3 - end
  const [actualSignal, setActualSignal] = useState(0);
  const video = useRef<HTMLVideoElement>(null);

  

  const setStageState = (stage: number) => {
    setStage(stage);
    if(stage === 0){
      video.current!.currentTime = 0;
      video.current!.play();
      console.log('video play');
    }
    if(stage === 1){
      video.current!.play();
      console.log('video play (resume)');
    }
    if(stage === 2){
      video.current!.pause();
      console.log('video pause');
    }
    if(stage === 3){
      video.current!.pause();
      //video.current!.currentTime = 0;
      console.log('video pause (end)');
    }
  }

  const [flightData, setFlightData] = useState({
    altitude: 0,
    speed: 0,
    temperature: 0,
    radiation: 0,
    voltage: 0,
    amperage: 0,
    param8: 0,
    signal: 0
  });

  useEffect(() => {
      const interval = setInterval(() => {
        if(stage === 0){
          setFlightData(prevFlightData => ({
            ...prevFlightData,
            altitude: prevFlightData.altitude < 90 ? Math.min(prevFlightData.altitude + (Math.floor(Math.random() * 80)), 100) : prevFlightData.altitude,
            speed: (Math.floor(Math.random() * 3)),
            temperature: (Math.floor(Math.random() * 3))+10,
            radiation: (Math.floor(Math.random() * 10)),
            amperage: prevFlightData.amperage < 18 ? Math.min(prevFlightData.amperage + (Math.floor(Math.random() * 8)), 19) : prevFlightData.amperage,
            voltage: (Math.floor(Math.random() * 2))+1190,
            signal: (0-actualSignal)*8,
            param8: prevFlightData.param8+1
          }));
        }
        if(stage === 1){
          setFlightData(prevFlightData => ({
            ...prevFlightData,
            altitude: 90 + (Math.floor(Math.random() * 10)),
            speed: 90+(Math.floor(Math.random() * 10)),
            temperature: (Math.floor(Math.random() * 8))+3,
            radiation: (Math.floor(Math.random() * 10)),
            amperage: 19 + (Math.floor(Math.random() * 3)),
            voltage: (Math.floor(Math.random() * 10))+1195,
            signal: (0-actualSignal)*8,
            param8: prevFlightData.param8+1
          }));
        }
        if(stage === 3){
          setFlightData(prevFlightData => ({
            ...prevFlightData,
            altitude: prevFlightData.altitude > 0 ? Math.max(prevFlightData.altitude - (Math.floor(Math.random() * 40)), 0) : prevFlightData.altitude,
            speed: prevFlightData.altitude > 0 ? (Math.floor(Math.random() * 3)) : 0,
            temperature: (Math.floor(Math.random() * 3))+10,
            radiation: (Math.floor(Math.random() * 10)),
            amperage: prevFlightData.amperage > 0 ? Math.max(prevFlightData.amperage - (Math.floor(Math.random() * 40)), 0) : prevFlightData.amperage,
            voltage: (Math.floor(Math.random() * 8))+1180,
            signal: (0-actualSignal)*8,
            param8: 0
          }));
        }
      }, 1000);

      return () => clearInterval(interval);
  });

 
  return (
    <div className="App">
      <Modal />
      <header className="App-header">
        <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'black', zIndex: 1000, height: '50vh', width: '30vw' }}>
          <video ref={video} width="100%" height="100%">
            <source id="drone_flight" src='drone_flight.mp4' type='video/mp4'></source>
          </video>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'black', zIndex: 1000, height: '50vh', width: '30vw' }}>
          <FlightParams altitude={flightData.altitude} speed={flightData.speed} temperature={flightData.temperature} radiation={flightData.radiation} voltage={flightData.voltage} amperage={flightData.amperage} param8={flightData.param8} signal={flightData.signal} updateData={stage !== 2} />
        </div>
        <MapContainer center={[54.371028, 18.633306]} zoom={14.5} scrollWheelZoom={true} style={{ position: "absolute", left:'30vw', height: '100vh', width: '70vw' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Hotline data={path}
        getLat={({ point }) => point.lat}
        getLng={({ point }) => point.lng}
        getVal={({ point }) => point.value}
        options={{
          palette:
          [
            { r: 0, g: 0, b: 230, t: 1 },
            { r: 0, g: 255, b: 200, t: 0.5 },
            { r: 0, g: 0, b: 0, t: 0 },
          ]
          ,
          min: 0,
          max: 10
        }}
        />

        {/* <Circle center={[54.372158, 18.638306]} radius={400} fillColor='blue'></Circle> */}
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Population Density">
            <LayerGroup>
            <PopulationDensityComponent />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
        <CoordsComponent />
        <MovingDrone droneIcon={droneIcon} setStageFunction={setStageState} actualSignalFunction={setActualSignal}/>
        </MapContainer>
        
      </header>
    </div>
  );
}

export default App;
