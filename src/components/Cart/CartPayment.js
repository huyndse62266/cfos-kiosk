import React, { Component } from 'react'
import {Row,Col} from 'antd'
import ScrollArea from 'react-scrollbar';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import CartItemMini from './CartItemMini'
import './Cart.scss'
class CartPayment extends Component {
    
    render() {
        let addedItems =  this.props.items.length ?
      (
        
          this.props.items.map((food, index) => {
            
            return (
                <Col span={12} className="px-2 py-1">
                    <CartItemMini key={index} food={food} index={index} cartQuantity={food.cartQuantity} type={'done'}/>
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
            <div className="container-fluid px-4 py-0    bg-light">
                <Row>
                    <Col span={24}>
                        <div className="text-center py-4" >
                            <FontAwesomeIcon icon={faShoppingBasket} style={{fontSize: '24px'}}/>
                            <span className="font-weight-bold" style={{fontSize: '18px'}}> Your Orders</span>
                        </div>
                    </Col>
                </Row>
                <ScrollArea speed={0.8}
                    verticalScrollbarStyle={{display:'none'}}
                    className="area"
                    contentClassName="content"
                    horizontal={false} style={{height: '600px'}}>
                    <Row>
                        {addedItems}
                    </Row>
                </ScrollArea>
                <Row>
                    <h3 className="text-right py-2">Total:  <NumberFormat value={this.props.pricetotal} displayType={'text'} thousandSeparator={','} />  đ</h3>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
        pricetotal: state.cart.total,
    }
  }
  
  export default connect(mapStateToProps)(CartPayment)
