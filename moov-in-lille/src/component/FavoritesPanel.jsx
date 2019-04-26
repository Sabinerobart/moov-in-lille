import React from 'react';
import '../App.scss';

class FavoritesPanel extends React.Component {
    render() {
        return(
            this.props.users.filter((user) => {
                return user.abonne === this.props.identity
            }).map((user, index) => {
                return (
                    <div key = {index}>
                        <h2>FAVORIS de {this.props.identity}</h2>
                        {
                            user.favoris.map((fav,i) => {
                                return(
                                    <div key={i} className="favorites">
                                        <h4>{fav.emplacement}</h4>
                                        {
                                            this.props.stations.filter((station) => {
                                                return station.fields.nom === fav.nom;
                                            }).map((station, i) => {
                                                return(
                                                    <React.Fragment key={i}>
                                                        <p>{station.fields.nom}</p>
                                                        <p>{station.fields.adresse}</p>
                                                        <p>{station.fields.nbvelosdispo} vélo, {station.fields.nbplacesdispo} places</p> 
                                                    </React.Fragment>
                                                ) 
                                            })
                                        }
                                    </div>  
                                )
                                
                            })
                        }
                    </div>
                )
            })      
        )
    }
}

export default FavoritesPanel;