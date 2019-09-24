import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Card from './components/Card/Card';
import LightingPanel from './components/LightingPanel/LightingPanel';
import TemperaturePanel from './components/TemperaturePanel/TemperaturePanel';
import HumidityPanel from './components/HumidityPanel/HumidityPanel';

import './components/CardContainer/CardContainer.css';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        {/*  Nav-bar section */}
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          {/* Card Container Section */}
          <Container style={{marginLeft: 0, marginRight: 0}}>
            <Row>
              <Col>
                <LightingPanel />
                {/* <Card title='Light' max={100} sliders={{'Light 1' : 0, 'Light 2' : 50, 'Light 3' : 100}}/> */}
              </Col>
              <Col>
                <TemperaturePanel />
                {/* <Card title='Temperature' max={50} sliders={{'Temp 1':20, 'Temp 2': 30, 'Temp 3': 25}}/>  */}
              </Col>
            </Row>
            <Row>
              <Col>
                <Card title='Water' max={40} sliders={{'Water 1':20, 'Water 2': 30}}/>
              </Col>
              <Col>
                <HumidityPanel />
                {/* <Card title='Humidity' max={100} sliders={{'Humidity 1': 90}} /> */}
              </Col>
            </Row>
            <Row>
              <Col>
                <Card title='Fan' max={3} sliders={{'Fan 1':2}}/>
              </Col>
              <Col>
                <p>Thoughts about water pressure</p>
              </Col>
            </Row>
          </Container>
        </main>
        
      </div>
    );
  }
}

export default App;

/* TODO

Extending classes and creating additional CSS on top of other class CSS
Animations in React

*/