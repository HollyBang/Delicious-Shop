import React from 'react';
import './productItem.css';

const productItem = (props) => {
    return (
        <div className={`product-item__wrapper ${props.grid}`}>
            <img className="product-item__img" src="https://images.unsplash.com/photo-1538911467261-618f6a74b3d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=708b47ed132c04d43e674b09c53694ee&auto=format&fit=crop&w=634&q=80" />
            <div className="product-item__content">
                <h4 className="product-item__title">Cream Soup</h4>
                <p className="product-item__description">description fuck shit ulalal dast ish fantastish yaya</p>
                <p className="product-item__price">1.5$</p>
            </div>
            <div className="product-item__controls">
            <a className="product-item__btn" href="#">More</a>
            <a className="product-item__btn" href="#">Add to bag</a>
            </div>
        </div>
    )
};
export default productItem;

