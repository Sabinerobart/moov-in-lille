import React from "react";
import { CircleSlider } from "react-circle-slider";
import "../style/CircProgressBar.scss";
import { Row, Col } from "reactstrap";

class CircProgressBar extends React.Component {
  render() {
    const nbBikes = this.props.stationSlider.fields.nbvelosdispo;
    const nbParking = this.props.stationSlider.fields.nbplacesdispo;
    const max = nbBikes + nbParking;
    let percentage = (nbBikes * 100) / max;
    const disable = nbBikes === 0 ? "#ccc" : "#b71332";
    let rangeColor;

    switch (true) {
      case percentage === 0:
        rangeColor = "#A5A5A5";
        break;
      case percentage >= 1 && percentage <= 25:
        rangeColor = "#b71332";
        break;
      case percentage > 25 && percentage <= 50:
        rangeColor = "#ff7300";
        break;
      case percentage > 50 && percentage <= 75:
        rangeColor = "#EFF24F";
        break;
      case percentage > 75 && percentage <= 100:
        rangeColor = "#1ea500";
        break;
      default:
        rangeColor = "#A5A5A5";
        break;
    }

    const zeroBikes = nbBikes === 0 ? "zero text-right p-1" : "text-right p-1";

    const zeroParking =
      nbParking === 0 ? "zero text-right p-1" : "text-right p-1";
    return (
      <Row>
        <CircleSlider
          value={nbBikes}
          max={max}
          size="120"
          progressWidth="15"
          circleWidth="10"
          knobRadius="0"
          progressColor={rangeColor}
          tooltipColor={disable}
        />
        <Row className="popup-info align-items-center p-0 mx-0">
          <Col xs="6" className={zeroBikes}>
            {nbBikes}
          </Col>
          <Col xs="6" className="p-1">
            <img
              className="popup-img"
              src={require("../pictures/bike-icon.png")}
              alt="bike"
              width="18px"
            />
          </Col>
          <Col xs="6" className={zeroParking}>
            {nbParking}
          </Col>
          <Col xs="6" className="p-1">
            <img
              className="popup-img"
              src={require("../pictures/parking-icon.png")}
              alt="parking"
              width="22px"
            />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default CircProgressBar;
