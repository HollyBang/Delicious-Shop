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
                <h3 className="main-content__title">Our Products</h3>
                <StartPageGrid>
                    <ProductItem grid="product-item__columns_4" />
                    <ProductItem grid="product-item__columns_4" />
                    <ProductItem grid="product-item__columns_4" />
                    <ProductItem grid="product-item__columns_4" />
                </StartPageGrid>

            </div>
        );
    }
};

export default StartPage;