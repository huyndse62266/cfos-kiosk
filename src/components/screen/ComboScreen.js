import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { connect } from 'react-redux'
import FoodType from '../Food/FoodType'
import PreviewCart from '../Cart/PreviewCart/PreviewCart'
import apiCaller from '../../utils/ApiCaller'

class ComboScreen extends Component {

    constructor(){
        super();
        this.state ={
            categories : []
        }
       
    }

    componentWillMount(){
        apiCaller(`categories/parent?name=Com bo`,'GET',null).then(res => {
            this.setState({
                categories: res.data
            })      
        })
    }

    render() {
        return (
            // <Row className="py-5">
            //     <Col span={20}>
            //         {this.state.categories.map((category,index) =>{
            //             return (<FoodType key={index} category={category} index={index} type={'dishes'}/>)
            //         })}
            //     </Col>
            //     <Col span={4} >
            //         <Row  className="w-100">
            //             <Col span={20} offset={2} style={{position:'fixed',width:'15%', right:0}}>
            //                 <PreviewCart />
            //             </Col>
            //         </Row>
            //     </Col>
            // </Row>
            <Row className="pt-5" type="flex" justify="start">
                {this.props.items.length > 0 ?
                <div> 
                    <Col style={{width: '83%'}}>
                        {this.state.categories.map((category,index) =>{
                            return (<FoodType key={index} category={category} index={index} categoryLength={this.state.categories.length} type={'combo'}/>)
                        })}
                    </Col>
                    <Col style={{width: '17%', position:'fixed', top: '6%', right: 0}}>
                        <PreviewCart />
                    </Col>
                </div>:
                <Col span={24}>
                    {this.state.categories.map((category,index) =>{
                        return (<FoodType key={index} category={category} index={index} categoryLength={this.state.categories.length} type={'combo'}/>)
                    })}
                </Col>
                }
            
            </Row>
        )
    }
    
}

const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
    }
}

export default connect(mapStateToProps,null)(ComboScreen);
