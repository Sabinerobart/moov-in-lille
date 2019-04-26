import React from "react";
import { Popup } from "react-leaflet";
import CircProgressBar from "./CircProgressBar";
import axios from 'axios';

export default class MyPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteName: '',
      users: []
    };
    this.onChange = this.onChange.bind(this);
  }
  
  componentWillReceiveProps() {
    this.setState({
      users: this.props.users.filter((user) => {
        return user.abonne === this.props.identity
      })
    })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendInfo() {
    const user = this.state.users[0];
    user.favoris.push({
      "emplacement": this.state.favoriteName,
      "nom": this.props.station.fields.nom
    });
    if (user.abonne) {
      axios
    .put(`http://localhost:5050/utilisateurs/${user.id}`, user);
    } else {
      console.log('non')
    }
  }

  render() {
    const station = this.props.station;
    const lowerCaseTitle = station.fields.nom.charAt(0).toUpperCase();
    const captializeTitle = station.fields.nom.slice(1).toLowerCase();
    const title = lowerCaseTitle + captializeTitle;
    return (
      <Popup>
        <div className="row popup-container justify-content-center">
          <div className="col-12 text-center">
            <h5 className="m-0">{title}</h5>
            <div className="separation mx-auto" />
          </div>
          <div className="my-3">
            <CircProgressBar stationSlider={this.props.station} />
          </div>
          <div>
            <form>
              <input
                  type="text"
                  id="favoriteName"
                  name="favoriteName"
                  onChange={this.onChange}
                  value={this.state.favoriteName}
              />
              <button type="button" onClick={() => this.sendInfo()}>+</button>
            </form>
          </div>
        </div>
      </Popup>
    );
  }
}