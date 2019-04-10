import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

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
            station: null,
        };
    }

    //----componentDidMount == when rendered at least once------//
    async componentDidMount() {
        const url = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=223&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            stations: data.records,
            loading: false,
            //markerPosition: [data.records[0].fields.geo[0], data.records[0].fields.geo[1]]
        });
        /*
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });
        */
    }

    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }
    /*
        getStation() {
            // Récupération de la station via fetch
            fetch("https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion")
                .then(response => response.json())
                .then(data => {
                    // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
                    this.setState({
                        station: data,
                    });
                });
            //console.log(this.state.station);
        }
    */
    render() {
        return (
            <div>
                {
                    this.state.loading || !this.state.stations ? (
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
                                    {
                                        this.state.stations.map((station, key) => {
                                            return (
                                                <Marker key="" position={station.fields.geo}>
                                                    <Popup>
                                                        <div className="row popup-container">
                                                            <h4 className="text-center">{station.fields.nom}</h4>
                                                            <div className="col-6 text-center vertical-separation">
                                                                <img src={require('../pictures/bike-icon.png')} alt="bike" width="33px" className="py-1" />
                                                                <p className="text-center count-text">{station.fields.nbvelosdispo}</p>
                                                            </div>
                                                            <div className="col-6 text-center">
                                                                <img src={require('../pictures/blue-parking.png')} alt="available spots" width="40px" />
                                                                <p className="text-center count-text">{station.fields.nbplacesdispo}</p>
                                                            </div>
                                                            <div className="col-9 my-2">
                                                                <p>{station.fields.adresse}</p>
                                                                <p>{station.fields.commune}</p>
                                                            </div>
                                                            <div className="col-3 my-2 py-2"><i className="fas fa-heart"></i></div>
                                                            <a href="https://opendata.lillemetropole.fr/explore/dataset/vlille-realtime/information/?flg=fr" className="mx-3">Avis</a>
                                                        </div>
                                                    </Popup>
                                                </Marker>
                                            )
                                        })
                                    }

                                </Map>
                            </div>
                        )
                }
            </div>
        );
    }
}

export default MyMap;