import React, { Component } from 'react'
import {Row,Col, Icon} from 'antd'
import ScrollArea from 'react-scrollbar';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/CheckoutCart/Cart'
import './Payment.css'
import {ReactComponent as Basketicon } from '../../icons/Basketicon.svg'
import {ReactComponent as Editdishicon } from '../../icons/Editdishicon.svg'
class OverviewBasket extends Component {
    
    render() {
        let addedItems =  this.props.items.map((food, index) => {
            
            return (
                <Col span={24} className="px-2 py-1">
                    <Cart key={index} food={food} index={index} cartQuantity={food.cartQuantity} type={'done'}/>
                </Col>)})
 
        return (
            <div className="px-4 py-0 bg-light h-100">
                <Row className="overview-basket-title" type="flex" justify="start">
                    <Col span={4}>
                        <div className="number-dishes-wrapper">
                        {this.props.items.length} 
                        </div>
                        <Icon component={Basketicon} className="basket-icon"/>     
                    </Col>
                    <Col span={20}>
                        <p className="your-basket-title">Giỏ của bạn</p>
                        <p className="number-basket-item">({this.props.items.length} món)</p>
                    </Col>
                </Row>
                {this.props.items.length>0?<ScrollArea speed={0.8}
                    verticalScrollbarStyle={{display:'none'}}
                    className="area"
                    contentClassName="content"
                    horizontal={false} style={{height: '70%'}}>
                    <Row>
                        {addedItems}
                    </Row>
                </ScrollArea>:<Row style={{height:'100%'}} type="flex" justify="space-around" align="middle">
                    <Col span={24} className="text-center">
                        <h1>Empty</h1>
                    </Col>
                </Row>}
                
                <Row>
                    <Col span={12} offset={6}>
                        <button type="button" className="btn edit-button">
                            <FontAwesomeIcon icon={faCog}/><span className="px-2">Chỉnh sửa</span>
                        </button>
                    </Col>
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
  
  export default connect(mapStateToProps)(OverviewBasket)
