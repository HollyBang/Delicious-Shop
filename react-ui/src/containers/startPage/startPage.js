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
        // fetch('/apiFind')
        //     .then(response => {
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then((data) => {
             
        //         this.setState({
        //             myData: data
        //         });
        //         console.log('PRODUCT DATA FROM API',data);
        //     });
        const { getProductDataToMain } = this.props
        getProductDataToMain();
    }
    render() {
        const { getProductDataToMain2 } = this.props
        console.log(getProductDataToMain2)
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
        getProductDataToMain2: state.getProductDataToMain,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProductDataToMain,

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
