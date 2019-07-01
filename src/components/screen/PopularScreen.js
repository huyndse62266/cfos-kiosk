import React, { Component } from 'react'
import FoodType from '../Food/FoodType'
import { Row, Col} from 'antd';
import { connect } from 'react-redux';
import {actFetchCategoriesRequest} from '../../action/category'
import PreviewCart from '../Cart/PreviewCart/PreviewCart'
import './Screen.scss'


 class PopularScreen extends Component {


    componentDidMount(){
        this.props.fetchAllCategory();
    }

    
    
    render() {
        var { categories } = this.props;
        return (
            <Row className="py-5">
                <Col span={21}>
                    {this.showAllCategory(categories)}
                </Col>
                <Col span={3} >
                    <Row >
                        <Col span={20} offset={2} style={{position:'fixed',width:'12%', right:0}}>
                            <PreviewCart />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

    showAllCategory(categories){
        var result = null;
        if(categories.length > 0){
            result = categories.map((category, index) => {
                return (<FoodType key={category.categoryId} category={category} index={index} type={'popular'}/>)
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
export default connect(mapStateToProps, mapDispatchToProps)(PopularScreen);