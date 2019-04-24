import React, { Component } from 'react';
import {Marker} from 'react-leaflet';
import L from 'leaflet';
import MyPopup from './MyPopup';


const redStripedMarker = new L.Icon({
    iconUrl: require('../pictures/indispo.png'),
    iconRetinaUrl: require('../pictures/indispo.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40] 
})
const redMarker = new L.Icon({
    iconUrl: require('../pictures/0-25.png'),
    iconRetinaUrl: require('../pictures/0-25.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40] 
})
const orangeMarker = new L.Icon({
    iconUrl: require('../pictures/2.png'),
    iconRetinaUrl: require('../pictures/2.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40] 
})
const yellowMarker = new L.Icon({
    iconUrl: require('../pictures/4.png'),
    iconRetinaUrl: require('../pictures/4.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40] 
})
const greenMarker = new L.Icon({
    iconUrl: require('../pictures/75-100.png'),
    iconRetinaUrl: require('../pictures/75-100.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40] 
})
const greyMarker = new L.Icon({
    iconUrl: require('../pictures/hors-service.png'),
    iconRetinaUrl: require('../pictures/hors-service.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40] 
})

const fullBikeMarker = new L.Icon({
    iconUrl: require('../pictures/5.png'),
    iconRetinaUrl: require('../pictures/5.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40] 
})

class Markers extends Component {
    render() {
        return(
            this.props.stations.map((station, key) => {
                const freeBike = station.fields.nbvelosdispo;
                const freeSpot = station.fields.nbplacesdispo;
                const totalSpot = freeBike + freeSpot;
                const percentageFreeBike = (100 * freeBike) / totalSpot;
                switch (true) {
                    case (percentageFreeBike === 0):
                    return(
                        <Marker key={key} position={station.fields.geo} icon={redStripedMarker}>
                            <MyPopup station = {station}/>
                        </Marker>
                    )
                    case (percentageFreeBike >= 1 && percentageFreeBike <= 25):
                        return (
                        <Marker key={key} position={station.fields.geo} icon={redMarker}>
                            <MyPopup station = {station}/>
                        </Marker>
                        )
                    case (percentageFreeBike > 25 && percentageFreeBike <= 50):
                        return(
                        <Marker key={key} position={station.fields.geo} icon={orangeMarker}>
                            <MyPopup station = {station}/>
                        </Marker>
                        )
                    case (percentageFreeBike > 50 && percentageFreeBike <= 75):
                        return(
                        <Marker key={key} position={station.fields.geo} icon={yellowMarker}>
                            <MyPopup station = {station}/>
                        </Marker>
                        )
                    case (percentageFreeBike > 75 && percentageFreeBike <= 100):
                        return(
                        <Marker key={key} position={station.fields.geo} icon={greenMarker}>
                            <MyPopup station = {station}/>
                        </Marker>
                        )
                    case (percentageFreeBike === 100):
                    return(
                        <Marker key={key} position={station.fields.geo} icon={fullBikeMarker}>
                            <MyPopup station = {station}/>
                        </Marker>
                    )
                    default: 
                    return(
                        <Marker key={key} position={station.fields.geo} icon={greyMarker}>
                            <MyPopup station = {station}/>
                        </Marker>
                        )
                        
                }
            })
        )
    };
};

export default Markers;