import React, { Component } from 'react'
import { Tabs} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import './DishDetailTab.css'
import apiCaller from '../../../utils/ApiCaller'
import DishInfo from '../DishInfo/DishInfo'
import DishFeedback from  '../DishFeedback/DishFeedback'

const { TabPane } = Tabs;



export default class DishDetailTab extends Component {

    constructor(){
        super();
        this.state ={
            food : ''
        }
       
    }
    componentWillMount(){
        apiCaller(`foods/${this.props.food.foodId}`,'GET',null).then(res => {
            console.log(res.data)
            this.setState({
                food: res.data
            })
        })
    }
    render() {
        var {selected} = this.props;
        return (
            <Tabs defaultActiveKey={selected} size={'default'} style={{width: '100%'}}>
                <TabPane tab={<div className="tab-button"><FontAwesomeIcon icon={faUtensils} className="icon-tab"/>Chi tiết món ăn </div>} key="1" size="large">
                    <DishInfo foodDetail={this.state.food} foodCart={this.props.foodCart?this.props.foodCart:this.props.food} cartQuantity={this.props.cartQuantity}/>
                </TabPane>
                <TabPane tab={<div className="tab-button"><FontAwesomeIcon icon={faCommentDots} className="icon-tab"/>Phản hồi</div>} key="2"  size="large">
                   <DishFeedback foodDetail={this.state.food}/>
                </TabPane>   
            </Tabs>
        )
    }
}