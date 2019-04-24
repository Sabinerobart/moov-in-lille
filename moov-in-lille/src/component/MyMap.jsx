import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import Markers from "./Markers";

const mapboxTiles =
  "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJlZDc4OTYiLCJhIjoiY2p1YmJ2dnM5MDRkYTN6cW1nZHJoc3pudiJ9.UdKtx13HOR9-Uoej4C5cyw";
const mapboxAttr =
  '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [50.633333, 3.066667],
      zoomLevel: 16
    };
  }

  render() {
    return (
      <div>
        <Map center={this.state.center} zoom={this.state.zoomLevel}>
          <TileLayer attribution={mapboxAttr} url={mapboxTiles} />
            <Markers stations = {this.props.stations}/>
        </Map>
      </div>
    );
  }
}