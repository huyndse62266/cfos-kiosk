import React, { Component } from 'react'
import FoodType from '../Food/FoodType'
import { Row, Col} from 'antd';
import { connect } from 'react-redux';
import {actFetchCategoriesRequest} from '../../action/index'
import MiniCart from '../Cart/MiniCart'



 class PopularScreen extends Component {


    componentDidMount(){
        this.props.fetchAllCategory();
    }

    
    
    render() {
        var { categories } = this.props;
        const {match} = this.props;
        console.log(match);
        return (
            <Row className="py-2">
                <Col span={20}>
                    {this.showAllCategory(categories)}
                </Col>
                <Col span={4} >
                    <Row  className="w-100">
                        <Col span={20} offset={2} style={{position:'fixed',width:'15%', right:0}}>
                            <MiniCart />
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
        fetchAllCategory : () => {
            dispatch(actFetchCategoriesRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PopularScreen);