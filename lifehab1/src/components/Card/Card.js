import React from 'react';

import './Card.css';
import Slider from '../Slider/Slider';

export default class Card extends React.Component {

    createSliders() {
        const labels = this.props.sliders;
        let html;
        for (let i = 0; i < sliders.length; i ++) {
            html += <Slider label=`{sliders.entries[i]}` />
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