import React, { Component } from 'react'
import { Tabs } from 'antd';
import { Button } from 'antd';
import './DishInfo.scss'
import DishInfo from './DishInfo'
import DishFeedback from './DishFeedback'
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


export default class DishDetail extends Component {
    render() {
    
        return (
            <Tabs defaultActiveKey="1" onChange={callback} size="small">
                <TabPane tab={<div className="button-1">Dish Detail</div>} key="1" size="large">
                    <DishInfo food={this.props.food}/>
                </TabPane>
                <TabPane tab={<div className="button-2">Dish Feedback</div>} key="2" active title-item-class="w-50">
                   <DishFeedback/>
                </TabPane>              
            </Tabs>
        )
    }
}
