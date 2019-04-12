import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import RangeSlider from "./RangeSlider";

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
