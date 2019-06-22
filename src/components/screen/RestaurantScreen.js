import React, { Component } from 'react'
import FoodType from '../Food/FoodType'
import {actFetchCategoriesRequest} from '../../action/index'
import { connect } from 'react-redux';
import MiniCart from '../Cart/MiniCart'
import { Row, Col } from 'antd';

class RestaurantScreen extends Component {
    componentDidMount(){
        this.props.fetchAllCategory();
    }

    render() {
        var { categories } = this.props;
        return (
            <div className="w-100"> 
                <Row>
                    <Col span={20}>
                        {this.showAllCategory(categories)}
                    </Col>
                    <Col span={4} >
                        <Row  className="w-100">
                            <Col span={20} offset={2}>
                                <MiniCart />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
        )
    }
    
    showAllCategory(categories){
        var result = null;
        if(categories.length > 0){
            result = categories.map((category, index) => {
                return (<FoodType key={index} category={category} index={index}/>)
            })
        }
        return result;
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
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);