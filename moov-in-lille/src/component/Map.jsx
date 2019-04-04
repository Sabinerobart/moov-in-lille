import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const osmTiles = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const osmAttr = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
const mapCenter = [50.633333, 3.066667];

const zoomLevel = 14;

export default class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = { currentZoomLevel: zoomLevel };
    }

    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });
    }

    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }

    render() {
        window.console.log('this.state.currentZoomLevel ->', this.state.currentZoomLevel);

        return (
            <div>
                <Map
                    ref={m => { this.leafletMap = m; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                    <TileLayer
                        attribution={osmAttr}
                        url={osmTiles}
                    />
                    <Marker position={mapCenter}>
                        <Popup>Velos disponibles : 11<br />
                            Places disponibles : 3
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

