import React, { Component } from "react";
import Switch from "react-switch";
import "./OnOffSwitch.css";

const statusArr = [
  {
    id: 0,
    status: 'OFF',
  }, {
    id: 1, 
    status: 'ON',
  }
];

export default class OnOffSwitch extends Component {
  constructor(props) {
    super(props); 
    
    this.state = { 
        label: this.props && this.props.label ? this.props.label : "Unlabelled",  
        checked: false,
        index: 0,
        selected: statusArr[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    console.log("Calling handle change");
    this.setState(prevState => {
      const newIndex = prevState.index === 0 ? 1 : 0;
      return {
        checked,
        index: newIndex,
        selected: statusArr[newIndex],
      };
    });
  }
 
  render() {
    return (
      <label className="switch-label">
        <Switch onChange={this.handleChange} checked={this.state.checked} onColor="#006400" uncheckedIcon={false} checkedIcon={true} />
        <span className="label-title">
          <span>{this.state.label}</span>
          <span className="label-status">{this.state.selected.status}</span>
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