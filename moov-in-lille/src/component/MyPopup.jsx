import React from "react";
import { Popup } from "react-leaflet";
import CircProgressBar from "./CircProgressBar";

export default class MyPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteName: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendInfo() {
    console.log(this.state.favoriteName)
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