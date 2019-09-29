import React from 'react';
import OnOffSwitch from '../Switch/Switch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Container className="temp-sensors-readings">
                <Row>
                    <Col>
                        <SensorReading label="Air (°C)" value="35.5"/>
                    </Col>
                    <Col>
                        <SensorReading label="Water (°C)" value="21.0"/>
                    </Col>
                </Row>
            </Container>
        );
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                <div className='readings'>
                    {this.createSensorReadings()}
                </div>
                <OnOffSwitch label={"Deep Heat Projector"} />
            </div>
        )
    }
}