import React from 'react';
import { Marker, Popup } from 'react-leaflet';

class MapPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            station: []
        };
    }


    async componentDidMount() {
        const url = "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=223&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            stations: data.records,
            loading: false,
            station: []
        });

    }
    render() {
        return (
            <React.Fragment>
                {this.state.station.map((station, i) => {
                    return (
                        <Marker key={i} position={station.fields.geo}>
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
                                    <a href="https://opendata.lillemetropole.fr/explore/dataset/vlille-realtime/information/?flg=fr" className="mx-3">Avis</a>;
                                            </div>
                                            
                            </Popup>
                        </Marker>
                    );
                }
                )
                }
                
            </React.Fragment>
        );
    }
}


export default MapPopup;