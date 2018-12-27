import React, { Fragment } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';

import Logo from '../../component/logo/logo.jsx'

import shopping_card from "../../assets/img/shopping-bag.png"
import admin from "../../assets/img/admin.png"



const navbar = () => {
    return (
        <Fragment>
            <Sticky stickyClassName={"menu__wrapper"}>
                <div className="navbar__title-main-wrapper">
                    <div className="navbar__title-wrapper">
                        <Logo />
                        <nav className="navbar-1">
                            <ul className="navbar-1__list">
                                <li className="navbar-1__item"><Link className="navbar-1__link" to="/">Main</Link></li>
                                <li className="navbar-1__item"><Link className="navbar-1__link" to="/store">Store</Link></li>
                                <li className="navbar-1__item"><Link className="navbar-1__link" to="/delivery">Delivery</Link></li>
                                <li className="navbar-1__item"><Link className="navbar-1__link" to="contact">About Us</Link></li>
                                <li className="navbar-1__item"><Link className="navbar-1__link" to="#">Instagram</Link></li>
                            </ul>
                        </nav>
                        <div className="righ-icons_wrapper">
                            <a href="/admin"><img className="shopping-card" src={admin} /></a>
                            <img className="shopping-card" src={shopping_card} />
                        </div>
                    </div>
                </div>
            </Sticky>
        </Fragment >
    );
};

export default navbar;