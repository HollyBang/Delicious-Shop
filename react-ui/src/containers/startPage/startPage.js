import React, { Component } from 'react';
import StartSlider from "../../component/Slider/slider";
import StartPageGrid from "../../component/StartPageGrid/startPageGrid";
import './startPage.css';
import ProductItem from '../../component/ProductItem/productItem'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getProductDataToMain } from '../../actions/action_getProductDataToMain'

class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: {},
            flag: false
        }
    }
    componentDidMount() {
        const { getProductDataToMain } = this.props
        getProductDataToMain();
    }
    shouldComponentUpdate(nextProps) {
        if(this.props.ProductListOnMain.productItemMainPage !== nextProps.ProductListOnMain.productItemMainPage) {
            return true;
        } 
        return false;
    }
    render() {
        console.log("startPage", this.props)
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

const mapStateToProps = state => {
    return {
        ProductListOnMain: state.getProductDataToMain,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProductDataToMain,

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
