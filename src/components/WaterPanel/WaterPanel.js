import React from 'react';
import '../Card/Card.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SensorReading from '../SensorReading/SensorReading';

export default class WaterPanel extends React.Component {
    state = {
        title: "Water Pressure",
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.state.title}</div>
                <Container>
                    <Row>
                        <Col>
                            <SensorReading label="Sump 1 (kPa)" value="102"/>
                        </Col>
                        <Col>
                            <SensorReading label="Sump 2 (kPa)" value="103"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}