import React from 'react';

import './Card.css';

export default class Card extends React.Component {

    createSliders() {
        const sliderArray = this.props.sliders;
        for (let i = 0; i < sliderArray.length; i ++) {
            
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='card-title'>{this.props.title}</div>
                <div className='sliders'>

                </div>
                <div>This is my card!</div>
            </div>
        )
    }
}