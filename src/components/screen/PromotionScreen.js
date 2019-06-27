import React, { Component } from 'react'
import FoodType from '../Food/FoodType'
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import {actFetchCategoriesRequest} from '../../action/index'
import ImageSwiper from '../ImageSwiper/ImageSwiper'
import MiniCart from '../Cart/MiniCart'



class PromotionScreen extends Component {
    componentDidMount(){
        this.props.fetchAllCategory();
    }

    
    
    showAllCategory(categories){
        var result = null;
        if(categories.length > 0){
            result = categories.map((category, index) => {
                return (<FoodType key={index} category={category} index={index} type={'promotion'}/>)
            })
        }
        return result;
    }
    render() {
        var { categories } = this.props;
        return (
            <div className="container-fluid d-flex flex-row w-100 p-0">  
                <Row>
                    <Col span={20}>
                        <Row>
                            <Col span={10} offset={7}>
                                <ImageSwiper/>
                            </Col>
                        </Row>
                        <Row>
                            {this.showAllCategory(categories)}
                        </Row>
                    </Col>
                    <Col span={4} >
                        <Row  className="w-100">
                            <Col span={20} offset={2} style={{position:'fixed',width:'15%', right:0}}>
                                <MiniCart />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div> 
        )
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategory : () => {
            dispatch(actFetchCategoriesRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PromotionScreen);