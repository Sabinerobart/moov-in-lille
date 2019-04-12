import React from "react";

class RangeSlider extends React.Component {
  render() {
    return (
      <div>
        <span id="output" className="number-size">
          0
        </span>
        <input
          id="range"
          type="range"
          value={this.props.stationSlider.fields.nbvelosdispo}
          min="0"
          max={
            this.props.stationSlider.fields.nbvelosdispo +
            this.props.stationSlider.fields.nbplacesdispo
          }
        />
        <span id="output" className="number-size">
          {this.props.stationSlider.fields.nbvelosdispo +
            this.props.stationSlider.fields.nbplacesdispo}
        </span>
      </div>
    );
  }
}

export default RangeSlider;
