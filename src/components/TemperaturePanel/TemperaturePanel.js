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
                <div className='readings'>
                    {this.createSensorReadings()}
                </div>
                <div className='sliders' style={{paddingTop: 0}}>
                    <OnOffSwitch label={"Deep Heat Projector"} value={this.props.heater}/>
                </div>
            </div>
        )
    }
}