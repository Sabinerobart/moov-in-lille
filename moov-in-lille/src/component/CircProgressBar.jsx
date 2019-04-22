import React from "react";
import { CircleSlider } from "react-circle-slider";
import "../scss/CircProgressBar.scss";

class CircProgressBar extends React.Component {
  render() {
    const nbBikes = this.props.stationSlider.fields.nbvelosdispo;
    const max =
      this.props.stationSlider.fields.nbvelosdispo +
      this.props.stationSlider.fields.nbplacesdispo;
    return (
      <div>
        <CircleSlider
          value={nbBikes}
          max={max}
          size="120"
          progressWidth="15"
          circleWidth="10"
          knobRadius="0"
          // progressColor={rangeColor}
          showTooltip="true"
          // tooltipColor={disable}
        />
        <img
          src={require("../pictures/bike-icon.png")}
          alt="bike"
          width="18px"
        />
      </div>
    );
  }
}

export default CircProgressBar;
