import React, { Component }  from 'react'
import { Modal, Button,Row,Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import DishDetail from '../../../pages/DishDetail/DishDetail'
import {findCart} from '../../../action/cart'
import { connect } from 'react-redux'
import './ImageButton.scss'
class ImageButton extends Component {
    state = {
        visible: false,
    };

    showModal = (id) => {
        this.setState({
            visible: true,
        });
        this.props.findCart(id);
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

    

    render() {
        var {food, item} = this.props;
        return (
            
            <div>
                <Row className="food-header">
                    <Col span={19}>
                        <Row className="store-info">
                            <Col span={3}  className="location-icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></Col>
                            <Col span={20} ><p className="restaurant-title d-inline-block text-truncate">{food.storeName}</p></Col>
                        </Row>
                    </Col>
                    <Col span={5}>
                        {food.promotion > 0 ? <div className="promotion-tag-wrapper"><span>-{food.promotion }%</span></div>:<div className="promotion-tag-wrapper d-none"><span>-{food.promotion }%</span></div> }
                    </Col>
                </Row>
                <button type="button"  onClick={()=>{this.showModal(food.foodId)}} className="btn p-0" style={{height: '175px',width:'100%',borderRadius: '8px'}}>
                    <img src={food.foodImage} alt="Image Not Found" style={{borderRadius: '8px'}}/>
                </button>

                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable
                    width="65%"
                    bodyStyle={{padding:0, height: '850px'}}
                    footer={null}
                    centered
                    className="view-info-modal"
                    >
                        
                    <DishDetail food={food} foodCart={item} cartQuantity={item!==undefined?item.cartQuantity:0} selected = {'1'} type={'add'}/>
                </Modal>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{     
        item: state.cart.findItem,
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        findCart: (id) => {
            dispatch(findCart(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ImageButton)
