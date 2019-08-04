import React, { Component } from 'react'
import {Col,Row,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faMapMarkerAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'; 
import { connect } from 'react-redux'
import { removeCart,addQuantity,subQuantity } from '../../../action/cart';

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
                        <img src={food.foodImage} className="img" alt="Cinque Terre"/>
                    </div>
                    <Row className="food-info-cart">
                        <div className="font-weight-bold">
                            {food.foodName}
                        </div>
                        <p className="font-weight-bold"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={','}/>  đ</p>
                    </Row>
                </Row>
                <Row className="pt-3" type="flex" justify="space-around" align="middle">
                    <Col span={1} className="text-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    </Col>
                    <Col span={14}>
                        <span className="store-name-cart-item pl-1">{food.storeName}</span>
                    </Col>
                    <Col span={9} className="h-100">
                        <Row className="w-100 h-100">
                            <Col span={6}>
                                <button type="button" className="btn btn-dec" onClick={()=>{this.DecreaseItem(food.foodId)}} >
                                    <FontAwesomeIcon icon={faMinus} className="btn-dec-icon" />
                                </button>
                            </Col>
                            <Col span={10} className="h-100">
                                <div className="display-quantity-1 opensan-18-bold">
                                    { this.state.show ? <span>{ food.cartQuantity }</span> : '' }
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
