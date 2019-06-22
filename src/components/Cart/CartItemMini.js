import React, { Component } from 'react'
import {Col,Row,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'; 
import { connect } from 'react-redux'
import {removeCart} from '../../action/index';
import './Cart.scss'
class CartItem extends Component {
    removeItem = (id) =>{
        this.props.removeItem(id);     
    }
    render() {
        var {food,cartQuantity} = this.props;
        return (
            <div className="border-custom mb-3">
                <Row >
                    <Button className="trash-button" onClick={()=>{this.removeItem(food.foodId)}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <img src={food.foodImage} className="img-thumbnail pb-0" alt="Cinque Terre"  style={{height:"150px", width: '100%'}}/>
                    
                </Row>
                <Row>
                    <div className="px-2 text-left font-weight-bold text-left">
                        {food.foodName}
                    </div>
                </Row>
                <Row>
                    <div className="px-2 py-1">
                        <Col span={16}>
                            <p className="font-weight-bold"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/>  đ</p>
                        </Col>
                        <Col span={8}><p className="float-right">x{cartQuantity}</p></Col>
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
export default connect(null,mapDispatchToProps)(CartItem)
