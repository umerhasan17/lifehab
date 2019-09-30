import React from 'react';
import '../Card/Card.css';
import Slider from '../Slider/Slider';
import OnOffSwitch from '../Switch/Switch';

export default class LightingPanel extends React.Component {
    state = {
        title: "Lighting",
        whites: this.props.whites ? this.props.whites : 2,
        reds: this.props.reds ? this.props.reds : 1,
        blues: this.props.blues ? this.props.blues : 1,
        uv: this.props.uv ? this.props.uv : 1,
        sensor: this.props.sensor ? this.props.sensor : 0,
        max: 10,
    }

    createSliders() {
        // create whites
        let slidersJsx = [];
        for (let i = 0; i < this.state.whites; i ++) {
            slidersJsx.push(this.createSlider("White", i));
        }
        // create reds
        for (let i = 0; i < this.state.reds; i ++) {
            slidersJsx.push(this.createSlider("Red", i));
        }
        // create blues
        for (let i = 0; i < this.state.blues; i ++) {
            slidersJsx.push(this.createSlider("Blue", i));
        }
        return slidersJsx;
    }

    createSlider(colour, number) {
        return (
            <Slider max={this.state.max} label={`${colour} ${number + 1}`} value={0}/>
        )
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                <div className='sliders'>
                    {this.createSliders()}
                    <OnOffSwitch label={"UV Light"} />
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