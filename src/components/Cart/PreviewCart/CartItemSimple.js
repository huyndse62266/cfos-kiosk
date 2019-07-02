import React, { Component } from 'react'
import {Col,Row,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'; 
import { connect } from 'react-redux'
import { removeCart } from '../../../action/cart';
import './PreviewCart.scss'
class CartItemSimple extends Component {
    removeItem = (id) =>{
        this.props.removeItem(id);     
    }
    render() {
        var {food, type} = this.props;
        return (
            <div className="border-custom mb-4">
                <Row className="img-button-wrapper">
                    {!type ? <Button className="trash-button" onClick={()=>{this.removeItem(food.foodId)}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button> : <span></span>}
                    
                    <img src={food.foodImage} className="img" alt="Cinque Terre"/>
                    
                </Row>
                <Row>
                    <div className="px-2 text-left font-weight-bold">
                        {food.foodName}
                    </div>
                </Row>
                <Row>
                    <div className="px-2 py-1">
                        <Col span={16}>
                            <p className="font-weight-bold"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={','}/>  đ</p>
                        </Col>
                        <Col span={8}><p className="float-right">x{food.cartQuantity}</p></Col>
                    </div>
                </Row>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id) =>{
            dispatch(removeCart(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(CartItemSimple)