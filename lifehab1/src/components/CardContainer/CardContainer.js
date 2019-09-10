import React from 'react';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CardContainer.css';

export default class CardContainer extends React.Component {

    render() {
        return (
            <Container style={{marginLeft: 0, marginRight: 0}}>
                <Row>
                    <Col>
                        <Card title='Light' sliders={{'Light 1' : 0, 'Light 2' : 50, 'Light 3' : 100}}/>
                    </Col>
                    <Col>
                        <Card title='Temperature' sliders={{'Temp 1':20, 'Temp 2': 30, 'Temp 3': 25}}/> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title='Water' sliders={{'Water 1':20, 'Water 2': 30}}/>
                    </Col>
                    <Col>
                        <Card title='Humidity' sliders={{'Humidity 1': 90}} />
                    </Col>
                </Row>
                <Row>
                    <p>Add on off switches here</p> 
                    <p>Add on off switches for lights</p>
                </Row>
            </Container>
        );
    }
}
