import React, { Component } from 'react'
import { Card, Button, Row, Col, Modal  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';
import { addQuantity,subQuantity, removeCart } from '../../../action/cart';
import DishDetail from '../../../pages/DishDetail/DishDetail'
import './BasketItem.scss'
class BasketItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
           clicks: this.props.food.quantity,
          show: true
        };
    }
    state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
    IncrementItem = (id) => {
        this.props.addQuantity(id);
        
    }
    DecreaseItem = (id) => {
        this.props.subQuantity(id);
    }   
    removeItem = (id) =>{
        this.props.removeItem(id);     
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }


    render() {
        var {food,cartQuantity} = this.props;
        return (
            <div className="basket-item-wrapper">
                
                
                <Row className="info-basket"> 
                    <Row className="basket-header">
                        <Col span={19}>
                            <Row className="store-info">
                                <Col span={4}  className="location-icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></Col>
                                <Col span={20} ><span className="restaurant-title">{food.storeName}</span></Col>
                            </Row>
                        </Col>
                        <Col span={5}>
                            {food.promotion > 0 ? <div className="promotion-tag-wrapper"><span>-{food.promotion }%</span></div>:<div className="promotion-tag-wrapper d-none"><span>-{food.promotion }%</span></div> }
                        </Col>
                        
                    </Row>
                            
                    <img src={food.foodImage} alt="Cinque Terre" className="image-basket"/>
                    <Row className="food-name-basket"><h6 className="font-weight-bold text-left text-truncate">{food.foodName}</h6></Row>
                </Row>               
                <Row type="flex" justify="space-around" align="middle" className="edit-basket"> 
                    <Col span={14}>
                        <Row><span style={{fontSize:'15px', fontWeight: 'bold'}}><NumberFormat value={food.price*cartQuantity*(100-food.promotion)/100} displayType={'text'} thousandSeparator={','}/> đ</span></Row>
                        {food.promotion > 0 ? <Row><span style={{fontSize:'15px', textDecoration:'line-through'}}> <NumberFormat value={food.price*cartQuantity} displayType={'text'} thousandSeparator={','}/> đ</span></Row> : <span/>}
                        
                        
                    </Col>
                    <Col span={10}>
                        <Row className="w-100" type="flex" justify="start">
                            <Col span={7}>
                                <button type="button" className=" btn dec-button-basket" onClick={()=>{this.DecreaseItem(food.foodId)}} ><FontAwesomeIcon icon={faMinus} /></button>
                            </Col>
                            <Col span={10} className="h-100 " >
                                <div className="display-quantity">
                                    { this.state.show ? <span>{ cartQuantity }</span> : '' }
                                </div>
                            </Col>
                            <Col span={7}>
                                <button type="button" className="btn inc-button-basket"  onClick={()=>{this.IncrementItem(food.foodId)}} ><FontAwesomeIcon icon={faPlus} /></button> 
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="customer-wrapper">
                    <Row className="custom-title">
                        <span>Tùy chọn: Mặc định</span>
                    </Row>
                    {/* <Row className="text-left pt-2">
                        <h5 className="font-weight-bold text-left px-3"></h5>
                
                    </Row> */}
                    <Row className="px-2" type="flex" justify="start">
                        <Col span={18}>
                            <div className="pb-2 w-100">
                                    <Button  className="customize-order-button" onClick={this.showModal}>Tùy chọn món ăn</Button>
                            </div>
                        </Col>
                        <Col span={1} offset={2}>
                            <button type="button" className="btn remove-basket-button" onClick={()=>{this.removeItem(food.foodId)}}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </Col>
                    </Row>
                </div>
            
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable
                    width="65%"
                    bodyStyle={{padding:0, height: '850px'}}
                    footer={null}
                    centered
                    >
                    <DishDetail food={food} cartQuantity={cartQuantity} selected = {'1'} type={'update'}/>
                </Modal>
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
export default connect(null,mapDispatchToProps)(BasketItem)