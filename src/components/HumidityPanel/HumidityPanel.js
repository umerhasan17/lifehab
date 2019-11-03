import React from 'react';
import '../Card/Card.css';
import Slider from '../Slider/Slider';
import OnOffSwitch from '../Switch/Switch';
import SensorReading from '../SensorReading/SensorReading';

export default class HumidityPanel extends React.Component {
    state = {
        title: "Humidity",
        fans: 3,
        max: 3,
    }

    createSliders() {
        // create whites
        let slidersJsx = [];
        for (let i = 0; i < this.state.fans; i ++) {
            slidersJsx.push(this.createSlider("Fan", i));
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
                <SensorReading label="Air (%)" value={this.props.air}/>
                <SensorReading label="Soil (%)" value={this.props.soil}/>
                <div className='sliders'>
                    {this.createSliders()}
                    <OnOffSwitch label={"Misting"} />
                </div>
            </div>
        )
    }
}