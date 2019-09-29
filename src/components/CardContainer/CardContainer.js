import React from 'react';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardContainer.css';

export default class CardContainer extends React.Component {

    render() {
        return (
            <Container style={{marginLeft: 0, marginRight: 0}}>
                <Row>
                    <Col>
                        <Card title='Light' max={100} sliders={{'Light 1' : 0, 'Light 2' : 50, 'Light 3' : 100}}/>
                    </Col>
                    <Col>
                        <Card title='Temperature' max={50} sliders={{'Temp 1':20, 'Temp 2': 30, 'Temp 3': 25}}/> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title='Water' max={40} sliders={{'Water 1':20, 'Water 2': 30}}/>
                    </Col>
                    <Col>
                        <Card title='Humidity' max={100} sliders={{'Humidity 1': 90}} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title='Fan' max={3} sliders={{'Fan 1':2}}/>
                    </Col>
                    <Col>
                        <p>Add on off switches for lights</p>
                    </Col>
                </Row>
                <Row>
                    <p>Thoughts about water pressure</p>
                    <p>Add on off switches here</p> 
                    
                </Row>
            </Container>
        );
    }
}
