import React from 'react';
import '../Card/Card.css';
import OnOffSwitch from '../Switch/Switch';

export default class TemperaturePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Temperature",
        }
    }

    createSensorReadings() {
        
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                <div className='sliders'>
                    {this.createSensorReadings}
                    <OnOffSwitch label={"Deep Heat Projector"} />
                </div>
            </div>
        )
    }
}