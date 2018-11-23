import React, { Component } from 'react';
import StartSlider from "../../component/Slider/slider";
import StartPageGrid from "../../component/StartPageGrid/startPageGrid";
import './startPage.css';
import ProductItem from '../../component/ProductItem/productItem'

class StartPage extends Component {
    render() {
        return (
            <div className="main-content__wrapper">
                <StartSlider />
                <StartPageGrid>
                    <ProductItem grid="3-columns" />
                    <ProductItem grid="3-columns" />
                    <ProductItem grid="3-columns" />
                </StartPageGrid>

            </div>
        );
    }
};

export default StartPage;