import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MapboxLayer from "./MapboxLayer";
import RangeSlider from "./RangeSlider";
import Control from "react-leaflet-control";
import "../App.scss";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZnJlZDc4OTYiLCJhIjoiY2p1YmJ2dnM5MDRkYTN6cW1nZHJoc3pudiJ9.UdKtx13HOR9-Uoej4C5cyw";
const osmTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
const osmAttr =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

const zoomLevel = 14;

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentZoomLevel: zoomLevel,
      location: {
        lat: 50.633333,
        lng: 3.066667
      }
    };
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

  handleGeoloc() {
    navigator.geolocation.getCurrentPosition(position => {
      // console.log(position);
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Map
          ref={m => {
            this.leafletMap = m;
          }}
          center={this.state.location}
          zoom={zoomLevel}
        >
          <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            style="mapbox://styles/fred7896/cjubc0ed70c8z1fphm80anfgp"
          />
          <TileLayer attribution={osmAttr} url={osmTiles} />
          <Control position="topleft">
            <button
              onClick={() => this.handleGeoloc()}
              className="geoloc-btn"
              title="Show me where I am !"
            >
              <i className="fas fa-crosshairs" />
            </button>
          </Control>

          {this.props.stations.map((station, i) => {
            return (
              <Marker position={station.fields.geo} key={i}>
                <Popup>
                  <div className="row popup-container justify-content-center">
                    <div className="col-12 text-center">
                      <h5>
                        {station.fields.nom.charAt(0).toUpperCase() +
                          station.fields.nom.slice(1).toLowerCase()}
                      </h5>
                    </div>
                    <div className="col-12 text-center">
                      <img
                        src={require("../pictures/bike-icon.png")}
                        alt="bike"
                        width="33px"
                        className="py-1"
                      />
                    </div>
                    <div className="col-12">
                      <p className="text-center count-text">
                        {station.fields.nbvelosdispo}
                      </p>
                      <p className="text-center">velos disponibles</p>
                    </div>
                    <RangeSlider stationSlider={station} />
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </Map>
      </div>
    );
  }
}
