import React from 'react';
import '../App.scss';
import axios from 'axios';

class FavoritesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          identity: '',
          users: []
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        axios
        .get('http://localhost:5050/utilisateurs')
        .then(res => {
            this.setState({
                users: res.data,
            })  
        })
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.state.identity)
    };

    render() {
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <div className="form-data">
                        <label htmlFor="lastname">Identifiant:</label>
                        <input
                            type="text"
                            id="identity"
                            name="identity"
                            onChange={this.onChange}
                            value={this.state.identity}
                        />
                        <button type="submit" value="OK">OK</button>
                    </div>
                </form>
                {   
                    this.state.users.filter((user) => {
                        return user.abonne === this.state.identity
                    }).map((user, index) => {
                        return (
                            <div key = {index}>
                                <h2>FAVORIS de {this.state.identity}</h2>
                                {
                                    user.favoris.map((fav,i) => {
                                        return(
                                            <div key={i} className="favorites">
                                                <h4>{fav.emplacement}</h4>
                                                {
                                                    this.props.stations.filter((station) => {
                                                        return station.fields.nom === fav.nom;
                                                    }).map((station) => {
                                                        return(
                                                            <React.Fragment>
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
                }
            </div>
        )
    }
}

export default FavoritesPanel;