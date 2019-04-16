import React from 'react';
import { Marker, Popup } from 'react-leaflet';

class MapPopup extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.state.station.map((station, i) => {
                    return (
                        <Marker key={i} position={station.fields.geo}>
                            <Popup>
                                <div className="row popup-container">
                                    <h4 className="text-center">{this.props.station.fields.nom}</h4>
                                    <div className="col-6 text-center vertical-separation">
                                        <img src={require('../pictures/bike-icon.png')} alt="bike" width="33px" className="py-1" />
                                        <p className="text-center count-text">{this.props.station.fields.nbvelosdispo}</p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <img src={require('../pictures/blue-parking.png')} alt="available spots" width="40px" />
                                        <p className="text-center count-text">{this.props.station.fields.nbplacesdispo}</p>
                                    </div>
                                    <div className="col-9 my-2">
                                        <p>{this.props.station.fields.adresse}</p>
                                        <p>{this.props.station.fields.commune}</p>
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