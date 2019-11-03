import React from 'react';
import * as firebase from 'firebase';

import Toolbar from './components/Toolbar/Toolbar';
import LightingPanel from './components/LightingPanel/LightingPanel';
import TemperaturePanel from './components/TemperaturePanel/TemperaturePanel';
import HumidityPanel from './components/HumidityPanel/HumidityPanel';
import WaterPanel from './components/WaterPanel/WaterPanel';

import './components/CardContainer/CardContainer.css';

class App extends React.Component {
  state = {
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

  render() {
    let json = this.state.json;
    return (
      <div>
        {/* navbar */}
        <Toolbar />
        
        {/* Card container */}
        <div className="container">
          <div className="row">
            <div className="col">
              <LightingPanel 
              b1={json.light.b1}
              r1={json.light.r1}
              uv={json.light.uv}
              w1={json.light.w1}
              w2={json.light.w2}
              />
            </div>
            <div className="col">
              <HumidityPanel 
              misting={json.humidity.misting}
              f1={json.humidity.f1}
              f2={json.humidity.f2}
              f3={json.humidity.f3}
              h1={json.humidity.h1}
              h2={json.humidity.h2}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <TemperaturePanel
              heater={json.temp.heater}
              t1={json.temp.t1}
              t2={json.temp.t2}
              />
            </div>
            <div className="col">
              <WaterPanel 
              p1={json.water.p1} 
              p2={json.water.p2}
              />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

/* TODO

Extending classes and creating additional CSS on top of other class CSS
Animations in React

*/