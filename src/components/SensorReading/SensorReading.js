import React, { Component } from "react";

export default class SensorReading extends Component {
  constructor(props) {
    super(props); 
    
    this.state = { 
        label: this.props && this.props.label ? this.props.label : "Label",
        value: this.props && this.props.value ? this.props.value : "NaN",
    };
  }
 
  render() {
    return (
        <div className="sensor-reading">
            <div className="sensor-reading-label">
                {this.state.label}
            </div>
            <div className="sensor-reading-value">
                {this.state.value}
            </div>
        </div>
    );
  }
}