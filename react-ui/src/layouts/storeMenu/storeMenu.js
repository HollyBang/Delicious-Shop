import React from 'react';
import './storeMenu.css';

import pizza_img from '../../assets/img/pizza-slice.png'
import breakfast_img from '../../assets/img/breakfast.png'
import coctail_img from '../../assets/img/cocktail.png'
import cupcake_img from '../../assets/img/cupcake.png'
import salad_img from '../../assets/img/salad.png'
import soup_img from '../../assets/img/soup.png'
import sushi_img from '../../assets/img/sushi.png'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getProductData } from '../../actions/action_getProductData'


const storeMenu = ({ getProductData }) => {

    function fireFilter(e) {
        e.preventDefault();
        console.log(e.target.dataset.filter)
        getProductData(null, e.target.dataset.filter)
    }
    return (
        <div className="menu-wrapper">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img onClick={fireFilter} data-filter="pizza" className="menu__img" src={pizza_img} alt="img" />
                        Pizza
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link"  >
                        <img className="menu__img" onClick={fireFilter} data-filter="hot_dishes" src={breakfast_img} alt="img" />
                        Hot Dishes
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link" >
                        <img onClick={fireFilter} data-filter="drink" className="menu__img" src={coctail_img} alt="img" />
                        Drinks
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img onClick={fireFilter} className="menu__img" src={cupcake_img} data-filter="cake" alt="img" />
                        Cakes
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img onClick={fireFilter} className="menu__img" src={salad_img} alt="img" data-filter="salad" />
                        Salads
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img onClick={fireFilter} className="menu__img" src={soup_img} data-filter="soup" alt="img" />
                        Soups
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#"  className="menu__link" >
                        <img onClick={fireFilter} className="menu__img" src={sushi_img} alt="img" data-filter="sushi" />
                        Sushi
                    </a>
                </li>
            </ul>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProductData,

}, dispatch)

export default connect(null, mapDispatchToProps)(storeMenu);