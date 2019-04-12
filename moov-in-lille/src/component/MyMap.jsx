import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

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
          <Marker position={mapCenter}>
            <Popup>
              <div className="row popup-container">
                <div className="col-6 text-center vertical-separation">
                  <img
                    src={require("../pictures/bike-icon.png")}
                    alt="bike"
                    width="33px"
                    className="py-1"
                  />
                  <p className="text-center count-text">11</p>
                </div>
                <div className="col-6 text-center">
                  <img
                    src={require("../pictures/blue-parking.png")}
                    alt="available spots"
                    width="40px"
                  />
                  <p className="text-center count-text">3</p>
                </div>
                <div className="col-9 my-2">
                  Rue Edouard Delesalle
                  <br />
                  59000 Lille
                </div>
                <div className="col-3 my-2 py-2">
                  <i class="fas fa-heart" />
                </div>
                <a
                  href="https://opendata.lillemetropole.fr/explore/dataset/vlille-realtime/information/?flg=fr"
                  className="mx-3"
                >
                  Avis
                </a>
              </div>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
