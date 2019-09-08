import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: darkgreen;
  background: ${props.color};
  cursor: pointer;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
  
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #555;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 1.5rem;
  }
  .slider-label {
    font-size: 1.3rem;
    
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    margin: 0 1rem;
    border-radius: 5px;
    background: #efefef;
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
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })

  render() {
    return (
      <Styles opacity={this.state.value > 10 ? (this.state.value / 100) : .1} color={this.props.color}>
        <div className="slider-label">{this.props.label}</div>
        <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
      </Styles>
    )
  }
}