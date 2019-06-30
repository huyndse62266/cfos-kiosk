import React, { Component } from 'react'
import { Card, Button, Row, Col, Modal  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';
import { addQuantity,subQuantity, removeCart } from '../../action/cart';
import DishDetail from '../../pages/DishDetail/DishDetail'
import './Cart.scss'
class ItemCart extends Component {
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
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
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
            <div className="container-fluid p-0" style={{backgroundColor: '#E6E6E6', borderRadius: 10}}>
        
                <Card bodyStyle={{padding: 0}}>
                    <Row >
                        <img src={food.foodImage} className="img-thumbnail rounded" alt="Cinque Terre" style={{height:'180px', width: '100%'}}/>
                    </Row>
                    <Row>
                        <h5 className="font-weight-bold text-left px-3 py-2 text-truncate">{food.foodName}</h5>
                    </Row>
                    <Row  type="flex" justify="space-around" align="middle"> 
                        <Col span={10} className="text-center">
                            <Button className="bg-danger" onClick={()=>{this.removeItem(food.foodId)}}>
                                <FontAwesomeIcon icon={faTrash} style={{color: 'white'}} />
                            </Button>
                        </Col>
                        <Col span={14} className="d-flex flex-row inc-dec-button-wrapper">
                           
                            <Row>
                                <Col span={8}>
                                    <Button style={{backgroundColor: '#d9d9d9'}} onClick={()=>{this.DecreaseItem(food.foodId)}} ><FontAwesomeIcon icon={faMinus} /></Button>
                                </Col>
                                <Col span={8} className="h-100">
                                    <div className="px-3 py-1">
                                        { this.state.show ? <span>{ cartQuantity }</span> : '' }
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Button style={{backgroundColor: '#d9d9d9'}}  onClick={()=>{this.IncrementItem(food.foodId)}} ><FontAwesomeIcon icon={faPlus} /></Button> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="text-left py-2">
                        <h5  className="font-weight-bold text-left px-3"><NumberFormat value={food.price*cartQuantity} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</h5>
                
                    </Row>
                    <Row className="px-2">
                        <Col span={16} offset={4}>
                            <div className="pb-2 w-100">
                                  <Button  className="customize-order-button" onClick={this.showModal}>Customize Order</Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable
                    width="80%"
                    bodyStyle={{padding:0, height: '850px'}}
                    footer={null}
                    centered
                    >
                    <DishDetail food={food} selected = {'1'}/>
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
export default connect(null,mapDispatchToProps)(ItemCart)