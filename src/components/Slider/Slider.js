import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--theme-color);
  background: ${props.color};
  cursor: pointer;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
  
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;
  .value {
    font-size: 1.35rem;
    font-family: "Fira Mono", monospace;
  }
  .slider-label {
    font-size: 1.2em;
    width: 70px;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 14px;
    margin: 0 1.25rem;
    margin-left: 0.75rem;
    border-radius: 5px;
    background: var(--lighter-color);
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: this.props.value,
    max: this.props.max ? this.props.max : 100,
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })

  render() {
    return (
      <div>
        <Styles color={this.props.color}>
          <div className="slider-label">{this.props.label}</div>
          <input type="range" min={0} max={this.props.max} value={this.state.value} className="slider" onChange={this.handleOnChange} />
          <div className="value">{this.state.value}</div>
        </Styles>
      </div>
    )
  }
}

/*

  2 LED White Strips 
  2 LED Red & Blue Strips
  1 UV tube light ON/OFF
  NO Light Sensor

  3 Temp Sensors 10-50
  Heater ON/OFF

  MISTING ON/OFF
  2 Humidity Sensors 0-100
  3 Fans - 0 1 2 3 intensity

*/