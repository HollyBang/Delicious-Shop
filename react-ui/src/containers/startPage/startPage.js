import React, { Component } from 'react';
import StartSlider from "../../component/Slider/slider";
import StartPageGrid from "../../component/StartPageGrid/startPageGrid";
import './startPage.css';
import ProductItem from '../../component/ProductItem/productItem'
import bg_img from '../../assets/img/mp-bg.jpg'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getProductData } from '../../actions/action_getProductData'

class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: {},
            flag: false
        }
    }
    componentDidMount() {
        const { getProductData } = this.props
        getProductData("mainPage");
        // getProductData("inCatalog");

    }
    shouldComponentUpdate(nextProps) {
        if (this.props.ProductListOnMain.productItemMainPage !== nextProps.ProductListOnMain.productItemMainPage) {
            return true;
        }
        return false;
    }
    render() {
        console.log("startPage", this.props)
        let maiPageItem = this.props.ProductListOnMain.productItemMainPage.map(data => {
            return <ProductItem data={data} grid="product-item__columns_4" key={data.id} />
        })
        var sectionStyle = {
            backgroundImage: `url(${bg_img})`
          };
        return (
            <div>
                <div className="header__greeting-wr">
                    <div style={ sectionStyle } className="header__greetings-img-wr">
                        <h2 className="header__greetings-text">Welcome,dear friend to</h2>
                        <h1 className="header__title-pt1">Delicious</h1>
                        <h2 className="header__title-pt2">SHOP</h2>
                    </div>
                </div>
                <div className="main-content__wrapper">
                    {/* <StartSlider /> */}
                    <h3 className="main-content__title">Our Products</h3>
                    <StartPageGrid>
                        {maiPageItem}
                    </StartPageGrid>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ProductListOnMain: state.getProductData,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProductData,

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
