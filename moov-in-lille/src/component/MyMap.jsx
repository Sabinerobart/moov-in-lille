import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import MyPopup from "./MyPopup";
import SearchBar from "./SearchBar";

const mapboxTiles =
  "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJlZDc4OTYiLCJhIjoiY2p1YmJ2dnM5MDRkYTN6cW1nZHJoc3pudiJ9.UdKtx13HOR9-Uoej4C5cyw";
const mapboxAttr =
  '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [50.633333, 3.066667],
      zoomLevel: 15
    };
  }

  getCenter(coords) {
    this.setState({
      center : coords
     });
 }

  render() {
    return (
      <div>
        <SearchBar stations={this.props.stations} getCenter={this.getCenter.bind(this)}/>
        <Map center={this.state.center} zoom={this.state.zoomLevel}>
          <TileLayer attribution={mapboxAttr} url={mapboxTiles} />
          {this.props.stations.map((station, i) => {
            return (
              <Marker position={station.fields.geo} key={i}>
                <MyPopup station={station} />
              </Marker>
            );
          })}
        </Map>
      </div>
    );
  }
}
