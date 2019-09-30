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
import WaterPanel from './components/WaterPanel/WaterPanel';

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
              </Col>
              <Col>
                <HumidityPanel />
              </Col>
            </Row>
            <Row>
              <Col>
                <TemperaturePanel />
              </Col>
              <Col>
                <WaterPanel />
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