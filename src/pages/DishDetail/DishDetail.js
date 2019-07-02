import React, { Component } from 'react'
import { Tabs } from 'antd';
import './DishInfo.scss'
import DishInfo from './DishInfo'
import DishFeedback from './DishFeedback'
const { TabPane } = Tabs;



export default class DishDetail extends Component {
    render() {
        var {selected} = this.props;
        return (
            <Tabs defaultActiveKey={selected} size={'default'}>
                <TabPane tab={<div className="button-tab">Dish Detail</div>} key="1" size="large">
                    <DishInfo food={this.props.food} cartQuantity={this.props.cartQuantity}/>
                </TabPane>
                <TabPane tab={<div className="button-tab">Dish Feedback</div>} key="2" active title-item-class="w-50">
                   <DishFeedback food={this.props.food}/>
                </TabPane>              
            </Tabs>
        )
    }
}
