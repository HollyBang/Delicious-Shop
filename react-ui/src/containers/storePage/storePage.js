import React, { Component } from 'react';
import StoreMenu from '../../layouts/storeMenu/storeMenu';
import ProductItem from '../../component/ProductItem/productItem';
import './storePage.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getProductData } from '../../actions/action_getProductData'
class StorePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { getProductData } = this.props
        getProductData(null, "pizza");
    }
    render() {
        console.log('STOREPAGE____', this.props.shopItems)
        let shopItems;
        if (typeof (this.props.shopItems) != "undefined") {

            shopItems = this.props.shopItems.map(data => {
                return <ProductItem data={data} grid="product-item__columns_3" key={data.date} />
            })
        } else {
            shopItems = "...loading";
        }
        return (
            <div>
                <StoreMenu />
                <div className="store-page-grid__wrapper">
                    {shopItems}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        shopItems: state.getProductData.shopItems,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getProductData,

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);