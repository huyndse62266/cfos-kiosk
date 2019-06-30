import React, { Component }  from 'react'
import { Modal, Button } from 'antd';
import DishDetail from '../../../pages/DishDetail/DishDetail'
import {findCart} from '../../../action/cart'
import { connect } from 'react-redux'
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
                <Button onClick={()=>{this.showModal(food.foodId)}} className="p-0" style={{height: '175px'}}>
                    <img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                </Button>

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
                        
                    <DishDetail food={food} cartQuantity={item!==undefined?item.cartQuantity:0} selected = {'1'} type={'add'}/>
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
