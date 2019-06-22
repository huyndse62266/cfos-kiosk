import React, { Component } from 'react'
import FoodType from '../Food/FoodType'
import {actFetchParentCategoriesRequest} from '../../action/index'
import MiniCart from '../Cart/MiniCart'
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

class DrinkScreen extends Component {
    componentDidMount(){
        this.props.fetchAllCategory('6');
    }

    render() {
        var { categories } = this.props;
        return (
            <div className="container-fluid d-flex flex-row w-100 p-0"> 
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
                return (<FoodType key={index} category={category} index={index} type={'drink'}/>)
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
        fetchAllCategory : (id) => {
            dispatch(actFetchParentCategoriesRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrinkScreen);