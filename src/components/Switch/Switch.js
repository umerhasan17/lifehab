import React, { Component } from "react";
import Switch from "react-switch";
import "./OnOffSwitch.css";

export default class OnOffSwitch extends Component {
  constructor(props) {
    super(props); 
    
    this.state = { 
        label: this.props && this.props.label ? this.props.label : "Unlabelled",  
        checked: this.props.value === 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    console.log("Calling handle change");
    this.setState(prevState => {
      return {
        checked: !prevState.checked,
      };
    });
  }

  createLabel() {
    if (this.state.checked) {
      return "ON";
    } else {
      return "OFF";
    }
  }
 
  render() {
    return (
      <label className="switch-label">
        <Switch onChange={this.handleChange} checked={this.state.checked} onColor="#006400" uncheckedIcon={false} checkedIcon={true} />
        <span className="label-title">
          <span>{this.state.label}</span>
          <span className="label-status">{this.createLabel()}</span>
        </span>
      </label>
    );
  }
}

// TODO add fade to ON/OFF text
// import { CSSTransition, TransitionGroup } from "react-transition-group";

/* 
const {loaded} = this.state;
<TransitionGroup>
<CSSTransition
  in={loaded}
  key={this.state.selected.id}
  timeout={1000}
  classNames="fade"
>
  <span className="label-status">{this.state.selected.status}</span>
</CSSTransition>
</TransitionGroup> */