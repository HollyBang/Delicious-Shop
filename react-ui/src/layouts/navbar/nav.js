import React, { Fragment } from 'react';
import NavTitle from './navTitle'
import './navbar.css';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <Fragment>
            <NavTitle />
            <nav class="navbar-1">
                <ul class="navbar-1__list">
                    <li class="navbar-1__item"><Link class="navbar-1__link" to="/">Main</Link></li>
                    <li class="navbar-1__item"><Link class="navbar-1__link" to="/store">Store</Link></li>
                    <li class="navbar-1__item"><Link class="navbar-1__link" to="/delivery">Delivery</Link></li>
                    <li class="navbar-1__item"><Link class="navbar-1__link" to="contact">About Us</Link></li>
                    <li class="navbar-1__item"><Link class="navbar-1__link" to="#">Instagram</Link></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default navbar;