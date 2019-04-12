import React from "react";
import axios from "axios";
import MyMap from "./MyMap";

class DataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=223"
      )
      .then(res => {
        this.setState({
          stations: res.data
        });
      });
  }
  render() {
    return <MyMap />;
  }
}

export default DataContainer;
