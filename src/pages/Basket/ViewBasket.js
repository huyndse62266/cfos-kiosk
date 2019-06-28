import React, { Component } from "react";
import {Row,Col} from 'antd';
import ScrollArea from 'react-scrollbar';

import { connect } from 'react-redux'
import ItemCart from "../../components/Cart/ItemCart";

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
                <Col span={4} className="px-4 py-2">
                    <ItemCart key={index} food={food} index={index} cartQuantity={food.cartQuantity}/>
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
      <div className="container-fluid"> 
        <ScrollArea speed={0.8}
            verticalScrollbarStyle={{display:'none'}}
            className="area"
            contentClassName="content"
            horizontal={false} style={{height: '800px'}}>
          <Row>
            {addedItems}
          </Row>
        </ScrollArea>
        
      </div>
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