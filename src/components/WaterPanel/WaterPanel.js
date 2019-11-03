import React from 'react';
import '../Card/Card.css';
import SensorReading from '../SensorReading/SensorReading';

export default class WaterPanel extends React.Component {
    state = {
        title: "Water Pressure",
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                <SensorReading label="Sump 1 (kPa)" value={this.props.p1}/>
                <SensorReading label="Sump 2 (kPa)" value={this.props.p2}/>
            </div>
        )
    }
}