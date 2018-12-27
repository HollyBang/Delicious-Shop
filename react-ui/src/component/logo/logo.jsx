import React from 'react';
import logo_shop from '../../assets/img/logo-ds.jpg';

const logo = () => {
    return (
        <div class="logo-wrapper">
        {/* <img src={logo_shop}/> */}
            <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <text className="logo__text" text-anchor="start" font-family="Lato,sans-serif" font-size="24" id="svg_1" y="33.394007" x="29.34126" stroke-width="0" >D-S</text>
                    <line className="logo__line" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="10" x2="74.138198" y1="10" x1="26" stroke-width="1.5" stroke="#ff7f00" fill="none" />
                    <line className="logo__line2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="40" x2="75.947565" y1="40" x1="23.611985" stroke-width="1.5" stroke="#ff7f00" fill="none" />
                </g>
            </svg>
        </div>
    );
};

export default logo;