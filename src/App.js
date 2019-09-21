import React from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
// import Slider from './components/Slider/Slider';
// import styled from 'styled-components';
// import Card from './components/Card/Card';
// import SliderCard from './components/Card/SliderCard';
import CardContainer from './components/CardContainer/CardContainer';
import OnOffSwitch from './components/Switch/Switch';

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
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <CardContainer />
          <OnOffSwitch />
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