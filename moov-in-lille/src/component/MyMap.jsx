import React, { Component } from 'react';
import { Map, TileLayer} from 'react-leaflet';
import MapPopup from './MapPopup';


const osmTiles = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const osmAttr = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
const mapCenter = [50.633333, 3.066667];
const zoomLevel = 14;

class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currentZoomLevel: zoomLevel,
            station: []
        };
    }

    async componentDidMount() {
        const url = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=223&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            station: data.records,
            loading: false
        });
       
    }

    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }

    render() {
        return (
            <div>
                {
                    this.state.loading  ? (
                        <div>loading...</div>
                    ) : (
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
                                           <MapPopup station ={this.state.station}/> 

                                </Map>
                            </div>
                    )
                     
                }
            </div>
        );
    }
}

export default MyMap;                   