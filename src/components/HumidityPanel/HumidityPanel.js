import React from 'react';
import '../Card/Card.css';
import Slider from '../Slider/Slider';
import OnOffSwitch from '../Switch/Switch';
import SensorReading from '../SensorReading/SensorReading';

export default class HumidityPanel extends React.Component {
    state = {
        title: "Humidity",
        max: 3,
    }

    createSliders() {
        return (
            <div>
                <Slider max={this.state.max} label={`Fan 1`} value={this.props.f1}/>
                <Slider max={this.state.max} label={`Fan 2`} value={this.props.f2}/>
                <Slider max={this.state.max} label={`Fan 3`} value={this.props.f3}/>
            </div>
        )
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                <div className='readings'>
                    <SensorReading label="Air (%)" value={this.props.h1}/>
                    <SensorReading label="Soil (%)" value={this.props.h2}/>
                </div>
                <div className='sliders'>
                    {this.createSliders()}
                    <OnOffSwitch label={"Misting"} value={this.props.misting}/>
                </div>
            </div>
        )
    }
}