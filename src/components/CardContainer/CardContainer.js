import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

export default class CardContainer extends React.Component {

    render() {
        return (
            <div className="container" style={{marginLeft: 0, marginRight: 0}}>
                <div className="row">
                    <Card title='Light' max={100} sliders={{'Light 1' : 0, 'Light 2' : 50, 'Light 3' : 100}}/>
                    <Card title='Temperature' max={50} sliders={{'Temp 1':20, 'Temp 2': 30, 'Temp 3': 25}}/> 
                </div>
                <div className="row">
                    <Card title='Water' max={40} sliders={{'Water 1':20, 'Water 2': 30}}/>
                    <Card title='Humidity' max={100} sliders={{'Humidity 1': 90}} />
                </div>
                <div className="row">
                    <div>
                        <Card title='Fan' max={3} sliders={{'Fan 1':2}}/>
                    </div>
                    <div>
                        <p>Add on off switches for lights</p>
                    </div>
                </div>
            </div>
        );
    }
}
