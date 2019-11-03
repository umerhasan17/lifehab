import React from 'react';
import '../Card/Card.css';
import Slider from '../Slider/Slider';
import OnOffSwitch from '../Switch/Switch';

export default class LightingPanel extends React.Component {
    state = {
        title: "Lighting",
        max: 10,
        b1: this.props.b1 ? this.props.b1 : 0,
        r1: this.props.r1 ? this.props.r1 : 0,
        uv: this.props.uv ? this.props.uv : 0, 
        w1: this.props.w1 ? this.props.w1 : 0, 
        w2: this.props.w2 ? this.props.w2 : 0,
    }

    createSliders() {
        return (
            <React.Fragment>            
                <Slider max={this.state.max} label={`White ${1}`} value={this.state.w1}/>
                <Slider max={this.state.max} label={`White ${2}`} value={this.state.w2}/>
                <Slider max={this.state.max} label={`Red ${1}`} value={this.state.r1}/>
                <Slider max={this.state.max} label={`Blue ${1}`} value={this.state.b1}/>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                <div className='sliders'>
                    {this.createSliders()}
                    <OnOffSwitch label={"UV Light"} value={this.state.uv} />
                </div>
            </div>
        )
    }
}

/* 
  2 LED White Strips 
  2 LED Red & Blue Strips
  1 UV tube light ON/OFF
  NO Light Sensor
*/ 