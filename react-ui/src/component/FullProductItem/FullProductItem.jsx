import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getFullProductItem from '../../actions/action_getFullProductItem';
import './FullProductItem.css';

class FullProductItem extends Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.getFullProductItem(this.props.match.params.productId);
  }
  render() {
    console.log('PROPS', this.props);
    console.log('this.props.ProductList', this.props.fullProductItemData[0]);
    let fullPageItem = "loading";
    if (typeof (this.props.fullProductItemData[0]) !== "undefined") {
      fullPageItem = this.props.fullProductItemData.map(item => {
        return (
          <div className="full-product-item" key ={this.props.match.params.productId} >
          <div className="full-product-item__left-block">
          <img className="full-product-item__img" src={item.img} alt="img" />
          </div>
          <div className="full-product-item__right-block">
          <h2 className="full-product-item__title">{item.title}</h2>
          <p className="full-product-item__price">{item.price}</p>
          <p className="full-product-item__status">{item.status}</p>
          <h5 className="full-product-item__description">{item.description}</h5>
          <div className="full-product-item__buy-wrapper">
          <a href="#" className="full-product-item__buy-btn shake">PUT TO BAG</a>
          </div>
          </div>
            {/* <div>hi, im product {this.props.match.params.productId}</div> */}
          </div>
        )
      })
    } else {
      console.log("fuck",this.props.fullProductItemData[0])
    }

    // const { productId } = this.props.match.params;
    // const item = this.props.ProductList.find(item => item.id === productId);
    // console.log('item', item);
    return (
      <div className="full-product-item-wrapper">
        {fullPageItem}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fullProductItemData: state.getFullProductItem.fullProductItemData,
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getFullProductItem,

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FullProductItem);

