import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import MapboxLayer from "./MapboxLayer";
import Markers from "./Markers";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZnJlZDc4OTYiLCJhIjoiY2p1YmJ2dnM5MDRkYTN6cW1nZHJoc3pudiJ9.UdKtx13HOR9-Uoej4C5cyw";
const osmTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
const osmAttr =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const mapCenter = [50.633333, 3.066667];

const zoomLevel = 14;

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = { currentZoomLevel: zoomLevel };
  }

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on("zoomend", () => {
      const updatedZoomLevel = leafletMap.getZoom();
      this.handleZoomLevelChange(updatedZoomLevel);
    });
  }

  handleZoomLevelChange(newZoomLevel) {
    this.setState({ currentZoomLevel: newZoomLevel });
  }

  render() {
    return (
      <div>
        <Map
          ref={m => {
            this.leafletMap = m;
          }}
          center={mapCenter}
          zoom={zoomLevel}
        >
          <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            style="mapbox://styles/fred7896/cjubc0ed70c8z1fphm80anfgp"
          />
          <TileLayer attribution={osmAttr} url={osmTiles} />
          <Markers stations = {this.props.stations}/>
        </Map>
      </div>
    );
  }
}