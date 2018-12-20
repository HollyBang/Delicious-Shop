import React from 'react';
import { NavLink } from 'react-router-dom';

import './productItem.css';

const productItem = (props) => {
    console.log('DATA', props)
    return (
        <div className={`product-item__wrapper ${props.grid}`}>
            <img className="product-item__img" src={props.data.img} />
            <div className="product-item__content">
                <h4 className="product-item__title">{props.data.title}</h4>
                <p className="product-item__description">{props.data.description}</p>
                <p className="product-item__price">{props.data.price}</p>
            </div>
            <div className="product-item__controls">
                {/* <a className="product-item__btn" href="#">More</a> */}
                <NavLink to={`./${props.id}`} exact>Upload Image</NavLink>
                <a className="product-item__btn" href="#">Add to bag</a>
                
            </div>
        </div>
    )
};
export default productItem;

