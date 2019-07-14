import React, { Component } from 'react'
import {Col,Row,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faMapMarkerAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'; 
import { connect } from 'react-redux'
import { removeCart,addQuantity,subQuantity } from '../../../action/cart';
import './PreviewCart.scss'
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
        var {food, type} = this.props;
        return (
            <div className="border-custom mb-4">
                <Row className="img-button-wrapper">
                    <Row>
                        <Col span={24} className="text-right px-2">
                            {!type ? <Button className="trash-button" onClick={()=>{this.removeItem(food.foodId)}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button> : <span></span>}
                        </Col>
                    </Row>
                    <img src={food.foodImage} className="img" alt="Cinque Terre"/>
                    <Row className="food-info-cart">
                        <div className="font-weight-bold" style={{fontSize: '18p'}}>
                            {food.foodName}
                        </div>
                        <p className="font-weight-bold"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={','}/>  đ</p>
                    </Row>
                </Row>
                <Row className="pt-3 pb-2">
                    <Col span={3} className="text-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    </Col>
                    <Col span={11}>
                        <span style={{fontSize: '11px'}}>{food.storeName}</span>
                    </Col>
                    <Col span={10}>
                        <Row className="w-100">
                            <Col span={6}>
                                <button type="button" className="btn btn-dec " onClick={()=>{this.DecreaseItem(food.foodId)}} >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                            </Col>
                            <Col span={10} className="h-75 " >
                                <div className="display-quantity-1" style={{paddingBottom: '3px'}}>
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
