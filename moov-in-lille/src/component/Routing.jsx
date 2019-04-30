import React, { Component } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import { Popup } from "react-leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZnJlZDc4OTYiLCJhIjoiY2p1YmJ2dnM5MDRkYTN6cW1nZHJoc3pudiJ9.UdKtx13HOR9-Uoej4C5cyw";
const MAPBOX_SERVICE_URL =
  "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}";

const myStartOrEndIcon = new L.Icon({
  iconUrl: require("../pictures/flag.png"),
  iconRetinaUrl: require("../pictures/flag.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});

const myViaIcon = new L.Icon({
  iconUrl: require("../pictures/flag.png"),
  iconRetinaUrl: require("../pictures/flag.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [40, 40]
});

class Routing extends Component {
  static propTypes = {
    map: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      routingPopUp: null
    };
    this.initializeRouting = this.initializeRouting.bind(this);
    this.destroyRouting = this.destroyRouting.bind(this);
    this.createPopupsHandler = this.createPopupsHandler.bind(this);
    this.setRoutingPopUp = this.setRoutingPopUp.bind(this);
  }

  componentDidUpdate() {
    this.initializeRouting();
  }

  componentWillUnmount() {
    this.destroyRouting();
  }

  initializeRouting() {
    if (this.props.map && !this.routing) {
      const plan = new L.Routing.Plan([], {
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        createMarker: (i, wp, nWps) => {
          if (i === 0 || i === nWps - 1) {
            return L.marker(wp.latLng, {
              draggable: true,
              icon: myStartOrEndIcon
            });
          } else {
            return L.marker(wp.latLng, { draggable: true, icon: myViaIcon });
          }
        }
      });

      this.routing = L.Routing.control({
        plan,
        serviceUrl: MAPBOX_SERVICE_URL,
        router: L.Routing.mapbox(MAPBOX_TOKEN, { language: "fr" }),
        position: "topright",
        lineOptions: {
          styles: [{ color: "rgb(179, 26, 26)", opacity: 1, weight: 5 }]
        }
      });

      this.props.map.leafletElement.addControl(this.routing);
      L.DomEvent.on(
        this.props.map.leafletElement,
        "click",
        this.createPopupsHandler
      );
    }
  }

  destroyRouting() {
    if (this.props.map) {
      this.props.map.leafletElement.removeControl(this.routing);
      L.DomEvent.off(
        this.props.map.leafletElement,
        "click",
        this.createPopupsHandler
      );
    }
  }

  createPopupsHandler(e) {
    const position = e.latlng;
    const startBtnOnClick = () => {
      this.routing.spliceWaypoints(0, 1, position);
      this.setRoutingPopUp(null);
    };
    const endBtnOnClick = () => {
      this.routing.spliceWaypoints(
        this.routing.getWaypoints().length - 1,
        1,
        position
      );
      this.setRoutingPopUp(null);
    };
    const startBtn = <button onClick={startBtnOnClick}>Départ</button>;
    const endBtn = <button onClick={endBtnOnClick}>Arrivée</button>;
    const children = (
      <div className="text-center">
        <h5>Choisissez votre itinéraire</h5>
        <div className="itinerary-popup">
          {startBtn}
          {endBtn}
        </div>
      </div>
    );
    const onClose = this.setRoutingPopUp;
    this.setRoutingPopUp({ children, position, onClose });
  }

  setRoutingPopUp(routingPopUp) {
    this.setState({ routingPopUp });
  }

  render() {
    const { routingPopUp } = this.state;
    if (routingPopUp) return <Popup {...this.state.routingPopUp} />;

    return null;
  }
}

export default Routing;
