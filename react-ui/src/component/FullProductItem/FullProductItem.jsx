import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getFullProductItem from '../../actions/action_getFullProductItem';

 class FullProductItem extends Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.getFullProductItem(this.props.match.params.productId);
  }
  render() {
    console.log(this.props);
    console.log('this.props.ProductList',this.props.ProductList);

    // const { productId } = this.props.match.params;
    // const item = this.props.ProductList.find(item => item.id === productId);
    // console.log('item', item);
    return (
      <div>
        hi, im product {this.props.match.params.productId}
        {/* <div>{item.description}</div>
        <div>{item.price}</div>
        <div>{item.status}</div>
        <div>{item.title}</div>
        <div>{item.img}</div> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      ProductList: state.getProductData.shopItems,
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getFullProductItem,

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FullProductItem);

