import React from 'react';

import './Card.css';
import Slider from '../Slider/Slider';

export default class Card extends React.Component {
    createSliders() {
        const labels = Object.keys(this.props.sliders);
        const values = Object.values(this.props.sliders);
        let slidersJsx = [];
        for (let i = 0; i < labels.length; i ++) {
            slidersJsx.push(<Slider label={labels[i]} value={values[i]}/>);
        }
        return slidersJsx;
    }

    render() {
        return (
            <div className='card-container'>
                <div className='card-title'>{this.props.title}</div>
                <div className='sliders'>
                    {this.createSliders()}
                </div>
            </div>
        )
    }
}