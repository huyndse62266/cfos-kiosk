import React, { Component } from "react";
import {Row,Col,Button} from 'antd';
import ScrollArea from 'react-scrollbar';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import BasketItem  from "../../components/Cart/ViewBasket/BasketItem";
import './ViewBasket.scss'

class ViewBasket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
      let addedItems =  this.props.items.length ?
      (
        
          this.props.items.map((food, index) => {
            
            return (
                <Col span={6} className="px-3 py-2">
                    <BasketItem key={index} food={food} index={index} cartQuantity={food.cartQuantity}/>
                </Col>)
                
        })
      ):(
          <Row type="flex" justify="space-around" align="middle" style={{height:'800px', width: '100%'}}>
              <Col span={24} className="text-center" >
                <h1>Cart Empty</h1>
              </Col>
          </Row>
      )
    return (
      <Row>
        <Col span={20} className="scroll-basket-item-wrapper">
          <ScrollArea speed={0.8}
              verticalScrollbarStyle={{display:'none'}}
              className="area"
              contentClassName="content"
              horizontal={false} style={{height: '750px'}}>
            <Row>
              {addedItems}
            </Row>
          </ScrollArea>
        </Col>
        <Col span={4}>
          <div className="overview-basket-wrapper">
            <Row>
              <Col span={6}></Col>
              <Col span={18}>
                <span className="basket-title">Giỏ của bạn <br/><small>(8 món)</small></span>
              </Col>
            </Row>
            <div className="cal-price-wrapper">
              <Row>
                <Col span={12}>Tạm tính:</Col>
                <Col span={12} className="text-right font-weight-bold"><NumberFormat value={this.props.origin} displayType={'text'} thousandSeparator={','} /> đ</Col>
              </Row>
              <Row>
                <Col span={12}>Khuyến mãi:</Col>
                <Col span={12} className="text-right font-weight-bold">-<NumberFormat value={this.props.origin-this.props.pricetotal} displayType={'text'} thousandSeparator={','} /> đ</Col>
              </Row>
            </div>
            <div className="total-price-wrapper">
              <Row>
                <span className="total-price-title">Tổng tiền: </span>
              </Row>
              <Row>
                <span className="total-price-detail"><NumberFormat value={this.props.pricetotal} displayType={'text'} thousandSeparator={','} /> đ</span>
              </Row>
            </div>
            <div className="button-purchase-wrapper">
              <Button className="button-purchase-view-basket">
                <Link to="/payment">Thanh toán</Link>  
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.cart.addedItems,
      pricetotal: state.cart.total,
  }
}

export default connect(mapStateToProps)(ViewBasket)