import React, { Fragment } from 'react';
import nav_title_img from '../../assets/img/del-title.jpg'

const titleNav = () => {
    return (
        <div className="navbar__title-main-wrapper">
            <div style={{ backgroundImage: `url(${nav_title_img})` }}
                className="navbar__title-wrapper">
                <h1 className="navbar__title">DELICIOUS SHOP</h1>
            </div>
            <h2 className="navbar__slogan">So delicious! like your mom...</h2>
        </div>
    );
};

export default titleNav;