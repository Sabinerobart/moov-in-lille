import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MapboxLayer from "./MapboxLayer";
import RangeSlider from "./RangeSlider";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZnJlZDc4OTYiLCJhIjoiY2p1YmJ2dnM5MDRkYTN6cW1nZHJoc3pudiJ9.UdKtx13HOR9-Uoej4C5cyw";
const osmTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
const osmAttr =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      center: [50.633333, 3.066667],
      zoomLevel: 15
    };
  }

  render() {
    return (
      <div>
        <Map
          center={this.state.center}
          zoom={this.state.zoomLevel}
        >
          <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
             style="mapbox://styles/fred7896/cjubc0ed70c8z1fphm80anfgp" 
             />
          <TileLayer attribution={osmAttr} url={osmTiles} />
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
