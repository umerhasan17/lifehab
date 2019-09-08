import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

export default class CardContainer extends React.Component {

    render() {
        return (
            <div className='card-container'>
                <Card title='Light' sliders={{'Light 1' : 0, 'Light 2' : 50, 'Light 3' : 100}}/>
                <Card title='Temperature' sliders={{'Temp 1':20, 'Temp 2': 30, 'Temp 3': 25}}/> 
            </div>
        );
    }
}
