import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as firebase from 'firebase';

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
    sideDrawerOpen: false,
    json: {
      humidity: {
        f1: 3,
        f2: 1, 
        f3: 2,
        h1: 56,
        h2: 89,
        misting: 1,
      },
      light: {
        b1: 0,
        r1: 3,
        uv: 1,
        w1: 7,
        w2: 8,
      },
      temp: {
        heater: 0,
        t1: 15,
        t2: 48,
        t3: 33,
      },
      water: {
        p1: 103,
        p2: 102,
      },
    },
  };

  // constructor(props) {
  //   super(props);
  //   Firebase.initializeApp(config.firebase);
  // }

  componentDidUpdate() {
    const rootRef = firebase.database().ref().child('testJson');
    const f1Ref = rootRef.child('humidity').child('f1');
    f1Ref.on('value', snap => {
      this.setState(prevState => ({
        ...prevState,
        json: {
          ...prevState.json,
          humidity: {
            ...prevState.json.humidity,
            f1: snap.val()
          }
        }
      }))
    });
  }

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
    let json = this.state.json;
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
                <LightingPanel 
                b1={json.light.b1}
                r1={json.light.r1}
                uv={json.light.uv}
                w1={json.light.w1}
                w2={json.light.w2}
                />
              </Col>
              <Col>
                <HumidityPanel 
                misting={json.humidity.misting}
                f1={json.humidity.f1}
                f2={json.humidity.f2}
                f3={json.humidity.f3}
                h1={json.humidity.h1.toString() + '%'} 
                h2={json.humidity.h2.toString() + '%'}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TemperaturePanel
                heater={json.temp.heater}
                t1={json.temp.t1}
                t2={json.temp.t2}
                t3={json.temp.t3}
                />
              </Col>
              <Col>
                <WaterPanel 
                p1={json.water.p1} 
                p2={json.water.p2}
                />
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