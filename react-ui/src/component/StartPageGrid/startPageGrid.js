import React from 'react';
import './startPageGrid.css';

const startPageGrid = (props) => {
    return (
        <div className="start-page-grid__wrapper">
            {props.children}
        </div>
    );
};

export default startPageGrid;