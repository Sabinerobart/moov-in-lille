import React, { Component } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import SearchBar from "./SearchBar";
import Markers from "./Markers";
import Control from "react-leaflet-control";
import "../App.scss";

const mapboxTiles =
  "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJlZDc4OTYiLCJhIjoiY2p1YmJ2dnM5MDRkYTN6cW1nZHJoc3pudiJ9.UdKtx13HOR9-Uoej4C5cyw";
const mapboxAttr =
  '&copy; <a href="https://www.mapbox.com/feedback/">Mapbox</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomLevel: 16,
      center: [50.633333, 3.066667]
    };
  }

  setCenter(coords) {
    this.setState({
      center: coords,
      zoomLevel: 18
    });
  }

  handleGeoloc() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoomLevel: 18
      });
    });
  }

  render() {
    const stateClickOnItinerary = this.props.clickItinerary || this.props.clickFavorites ? 'leaflet-container-mid' : 'leaflet-container-full' ;
    return (
      <div>
        <SearchBar
          stations={this.props.stations}
          setCenter={this.setCenter.bind(this)}
        />
        <Map center={this.state.center} zoom={this.state.zoomLevel}>
          <TileLayer attribution={mapboxAttr} url={mapboxTiles} />
          <Control position="topleft">
            <button
              onClick={() => this.handleGeoloc()}
              className="geoloc-btn"
              title="Show me where I am !"
            >
              <i className="fas fa-crosshairs" />
            </button>
          </Control>
          <Markers
            stations={this.props.stations}
            setCenter={this.setCenter.bind(this)}
          />
          <Map center={this.state.center} zoom={this.state.zoomLevel} className={stateClickOnItinerary}>
             <TileLayer attribution={mapboxAttr} url={mapboxTiles} />
              <Control position="topleft">
                <button
                  onClick={() => this.handleGeoloc()}
                  className="geoloc-btn"
                  title="Show me where I am !"
                >
                  <i className="fas fa-crosshairs" />
                </button>
              </Control>
              <Markers 
              stations = {this.props.stations}            
              getCenter={this.getCenter.bind(this)}
              users = {this.props.users} 
              identity = {this.props.identity}
              />
              <Circle
                center={this.state.center}
                fillColor="#b71332"
                color="transparent"
                radius={30}
              />
          </Map>
       </div>
    );
  }
}
