import React from "react";
import { CircleSlider } from "react-circle-slider";
import "../scss/CircProgressBar.scss";

class CircProgressBar extends React.Component {
  render() {
    const nbBikes = this.props.stationSlider.fields.nbvelosdispo;
    const max =
      this.props.stationSlider.fields.nbvelosdispo +
      this.props.stationSlider.fields.nbplacesdispo;
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
        rangeColor = "#F0F282";
        break;
      case percentage > 75 && percentage <= 100:
        rangeColor = "#1ea500";
        break;
      default:
        rangeColor = "#A5A5A5";
        break;
    }

    return (
      <div>
        <CircleSlider
          value={nbBikes}
          max={max}
          size="120"
          progressWidth="15"
          circleWidth="10"
          knobRadius="0"
          progressColor={rangeColor}
          showTooltip="true"
          tooltipColor={disable}
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
