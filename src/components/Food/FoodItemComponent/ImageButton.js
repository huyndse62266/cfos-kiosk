import React, { Component }  from 'react'
import { Modal, Button } from 'antd';
import DishDetail from '../../../pages/DishDetail/DishDetail'

export default class ImageButton extends Component {
    state = {
        visible: false,
    };

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

    

    render() {
        var {food} = this.props;    
        return (
            
            <div>
                <Button onClick={()=>{this.showModal()}} className="p-0" style={{height: '175px'}}>
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
                    <DishDetail food={food} selected = {'1'}/>
                </Modal>
                
            </div>
        )
    }
}
