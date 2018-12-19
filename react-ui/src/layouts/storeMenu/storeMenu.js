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

    function findSushi(e) {
        e.preventDefault();
        getProductData(null, "sushi")
    }
    function findPizza(e) {
        e.preventDefault();
        getProductData(null, "Pizza")
    }
    return (
        <div className="menu-wrapper">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#" onClick={findPizza} className="menu__link">
                        <img className="menu__img" src={pizza_img} alt="img" />
                        Pizza
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img className="menu__img" src={breakfast_img} alt="img" />
                        Hot Dishes
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img className="menu__img" src={coctail_img} alt="img" />
                        Drinks
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img className="menu__img" src={cupcake_img} alt="img" />
                        Cakes
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img className="menu__img" src={salad_img} alt="img" />
                        Salads
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">
                        <img className="menu__img" src={soup_img} alt="img" />
                        Soups
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#" onClick={findSushi} className="menu__link">
                        <img className="menu__img" src={sushi_img} alt="img" />
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