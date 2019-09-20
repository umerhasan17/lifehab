import React, { Component } from "react";
import Switch from "react-switch";
import "./OnOffSwitch.css";
 
export default class OnOffSwitch extends Component {
  constructor() {
    super();
    this.state = { 
        checked: false,
        status: "OFF"
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ 
        checked
    });
    if (this.state.status === "OFF") {
        this.setState({
            status: "ON"
        });
    } else {
        this.setState({
            status: "OFF"
        });
    }
  }
 
  render() {
    return (
      <label class="switch-label">
        <Switch onChange={this.handleChange} checked={this.state.checked} onColor="#006400" uncheckedIcon={false} checkedIcon={true} />
        <span class="label-title">UV Light {this.state.status}</span>
      </label>
    );
  }
}