import React, { Component } from 'react'
import {Col,Row,Icon} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faMapMarkerAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'; 
import { connect } from 'react-redux'
import { removeCart,addQuantity,subQuantity } from '../../../action/cart';
import {ReactComponent as StoreLocation } from '../../../icons/Store Location icon.svg'

import './PreviewCart.css'
class CartItemSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
           clicks: this.props.food.cartQuantity,
          show: true
        };
    }
    removeItem = (id) =>{
        this.props.removeItem(id);     
    }
    IncrementItem = (id) => {
        this.props.addQuantity(id);
        
    }
    DecreaseItem = (id) => {
        this.props.subQuantity(id);
    }   
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }
    render() {
        var {food} = this.props;
        return (
            <div className="mb-4">
                <Row className="img-button-wrapper">
                    <Row>
                        <Col span={24} className="text-right px-2">
                            <button type="button" className="btn trash-button" onClick={()=>{this.removeItem(food.foodId)}}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </Col>
                    </Row>
                    <div className="img-wrapper-display-name"> 
                        <img src={food.foodImage} className="img" alt="Image Not Found"/>
                    </div>
                    <Row className="food-info-cart">
                        <div className="opensan-20-extrabold d-inline-block text-truncate text-truncate-width">
                            {food.foodName}
                        </div>
                        <div className="opensan-18-semibold"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={','}/>  đ</div>
                    </Row>
                </Row>
                <Row  type="flex" justify="space-around" align="middle">
                    <Col span={2} className="text-center">
                        <Icon component={StoreLocation} className="store-location-icon"/>
                    </Col>
                    <Col span={13}>
                        <span className="store-name-cart-item pl-1">{food.storeName}</span>
                    </Col>
                    <Col span={9} className="h-100">
                        <Row className="dec-inc-cart-item-simple" type="flex" justify="start">
                            <Col span={6}>
                                <button type="button" className="btn btn-dec" onClick={()=>{this.DecreaseItem(food.foodId)}} >
                                    <FontAwesomeIcon icon={faMinus} className="btn-dec-icon" />
                                </button>
                            </Col>
                            <Col span={12} className="h-100">
                                <div className="display-quantity-1 opensan-18-bold">
                                    <span className="text-center">{ this.state.show ? <span>{ food.cartQuantity }</span> : '' }</span>
                                </div>
                            </Col>
                            <Col span={6}>
                                <button type="button" className="btn btn-inc" onClick={()=>{this.IncrementItem(food.foodId)}} >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button> 
                            </Col>
                        </Row>
                    </Col>
  
                </Row>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id) =>{
            dispatch(removeCart(id))
        },
        addQuantity: (id)=>{
            dispatch(addQuantity(id))
        },
        subQuantity:(id) =>{
            dispatch(subQuantity(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(CartItemSimple)
