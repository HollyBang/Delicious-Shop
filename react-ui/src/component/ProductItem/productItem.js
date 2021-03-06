import React from 'react';
import { NavLink } from 'react-router-dom';

import './productItem.css';

const productItem = (props) => {
    // console.log('DATA', props)
  const { data } = props;
    return (
        <div className={`product-item__wrapper ${props.grid}`}>
            <img className="product-item__img" src={data.img} />
            <div className="product-item__content">
                <h4 className="product-item__title">{data.title}</h4>
                <p className="product-item__description">{data.description}</p>
                <p className="product-item__price">{data.price}</p>
            </div>
            <div className="product-item__controls">
                {/* <a className="product-item__btn" href="#">More</a> */}
                <NavLink to={`./${data.id}`} exact className="product-item__btn">More</NavLink>
                <a className="product-item__btn" href="#">Add to bag</a>
                
            </div>
        </div>
    )
};
export default productItem;

