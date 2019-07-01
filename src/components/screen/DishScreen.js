import React, { Component } from 'react'
import FoodType from '../Food/FoodType'
import {actFetchParentCategoriesRequest} from '../../action/category'
import PreviewCart from '../Cart/PreviewCart/PreviewCart'
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

class DishScreen extends Component {

    componentDidMount(){
        this.props.fetchAllCategory('Đồ ăn');
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
                            <Col span={20} offset={2} style={{position:'fixed',width:'15%', right:0}}>
                                <PreviewCart />
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
                return (<FoodType key={index} category={category} index={index} type={'popular'}/>)
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
export default connect(mapStateToProps, mapDispatchToProps)(DishScreen);