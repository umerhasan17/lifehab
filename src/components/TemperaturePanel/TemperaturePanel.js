import React from 'react';
import OnOffSwitch from '../Switch/Switch';
import '../Card/Card.css';
import './TemperaturePanel.css';
import SensorReading from '../SensorReading/SensorReading';

export default class TemperaturePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Temperature",
            heater: this.props.heater ? this.props.heater : 0,
            t1: this.props.t1 ? this.props.t1 : 0,
            t2: this.props.t2 ? this.props.t2 : 0,
        }
    }

    createSensorReadings() {
        return (
            <React.Fragment>
                <SensorReading label="Air (°C)" value={this.props.t1}/>
                <SensorReading label="Water (°C)" value={this.props.t2}/>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                {this.createSensorReadings()}
                <div className='sliders'>
                    <OnOffSwitch label={"Deep Heat Projector"} value={this.props.heater}/>
                </div>
            </div>
        )
    }
}