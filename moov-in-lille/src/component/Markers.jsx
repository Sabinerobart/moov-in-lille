import React, { Component } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import MyPopup from "./MyPopup";

const redStripedMarker = new L.Icon({
  iconUrl: require("../pictures/full-place.png"),
  iconRetinaUrl: require("../pictures/full-place.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});
const redMarker = new L.Icon({
  iconUrl: require("../pictures/1-25-2.png"),
  iconRetinaUrl: require("../pictures/1-25-2.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});
const orangeMarker = new L.Icon({
  iconUrl: require("../pictures/25-50-2.png"),
  iconRetinaUrl: require("../pictures/25-50-2.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});
const yellowMarker = new L.Icon({
  iconUrl: require("../pictures/50-75-2.png"),
  iconRetinaUrl: require("../pictures/50-75-2.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});
const greenMarker = new L.Icon({
  iconUrl: require("../pictures/75-99-2.png"),
  iconRetinaUrl: require("../pictures/75-99-2.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});
const greyMarker = new L.Icon({
  iconUrl: require("../pictures/indispo.png"),
  iconRetinaUrl: require("../pictures/indispo.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});

const fullBikeMarker = new L.Icon({
  iconUrl: require("../pictures/fullbike2.png"),
  iconRetinaUrl: require("../pictures/fullbike2.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});

class Markers extends Component {
  setCenter(coord) {
    this.props.setCenter(coord);
  }

  render() {
    return this.props.stations.map((station, key) => {
      const freeBike = station.fields.nbvelosdispo;
      const freeSpot = station.fields.nbplacesdispo;
      const totalSpot = freeBike + freeSpot;
      const percentageFreeBike = (100 * freeBike) / totalSpot;
      switch (true) {
        case percentageFreeBike === 0:
          return (
            <Marker
              key={key}
              position={station.fields.geo}
              icon={redStripedMarker}
              onClick={() => this.setCenter(station.fields.geo)}
            >
              <MyPopup station={station} identity={this.props.identity} />
            </Marker>
          );
        case percentageFreeBike >= 1 && percentageFreeBike <= 25:
          return (
            <Marker
              key={key}
              position={station.fields.geo}
              icon={redMarker}
              onClick={() => this.setCenter(station.fields.geo)}
            >
              <MyPopup station={station} identity={this.props.identity} />
            </Marker>
          );
        case percentageFreeBike > 25 && percentageFreeBike <= 50:
          return (
            <Marker
              key={key}
              position={station.fields.geo}
              icon={orangeMarker}
              onClick={() => this.setCenter(station.fields.geo)}
            >
              <MyPopup station={station} identity={this.props.identity} />
            </Marker>
          );
        case percentageFreeBike > 50 && percentageFreeBike <= 75:
          return (
            <Marker
              key={key}
              position={station.fields.geo}
              icon={yellowMarker}
              onClick={() => this.setCenter(station.fields.geo)}
            >
              <MyPopup station={station} identity={this.props.identity} />
            </Marker>
          );
        case percentageFreeBike > 75 && percentageFreeBike <= 100:
          return (
            <Marker
              key={key}
              position={station.fields.geo}
              icon={greenMarker}
              onClick={() => this.setCenter(station.fields.geo)}
            >
              <MyPopup station={station} identity={this.props.identity} />
            </Marker>
          );
        case percentageFreeBike === 100:
          return (
            <Marker
              key={key}
              position={station.fields.geo}
              icon={fullBikeMarker}
              onClick={() => this.setCenter(station.fields.geo)}
            >
              <MyPopup station={station} identity={this.props.identity} />
            </Marker>
          );
        default:
          return (
            <Marker
              key={key}
              position={station.fields.geo}
              icon={greyMarker}
              onClick={() => this.setCenter(station.fields.geo)}
            >
              <MyPopup station={station} identity={this.props.identity} />
            </Marker>
          );
      }
    });
  }
}

export default Markers;
