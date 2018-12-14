import React, { Fragment } from 'react';
import NavTitle from './navTitle'
import './navbar.css';
import { Link } from 'react-router-dom';
import Sticky from 'react-sticky-el';

const navbar = () => {
    return (
        <Fragment>
            <NavTitle />
            <Sticky stickyClassName={"menu__wrapper"}>
            <nav className="navbar-1">
                <ul className="navbar-1__list">
                    <li className="navbar-1__item"><Link className="navbar-1__link" to="/">Main</Link></li>
                    <li className="navbar-1__item"><Link className="navbar-1__link" to="/store">Store</Link></li>
                    <li className="navbar-1__item"><Link className="navbar-1__link" to="/delivery">Delivery</Link></li>
                    <li className="navbar-1__item"><Link className="navbar-1__link" to="contact">About Us</Link></li>
                    <li className="navbar-1__item"><Link className="navbar-1__link" to="#">Instagram</Link></li>
                </ul>
            </nav>
        </Sticky>
           
        </Fragment>
    );
};

export default navbar;