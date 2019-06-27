import React, { Component } from 'react'
import StoreMenu from '../Food/StoreMenu'
import {actFetchCategoriesRequest, actFetchStoreCategoriesRequest} from '../../action/index'
import { connect } from 'react-redux';
import MiniCart from '../Cart/MiniCart'
import { Row, Col } from 'antd';

class RestaurantScreen extends Component {
    componentDidMount(){
        this.props.fetchAllStore('1');
    }

    render() {
        var { stores } = this.props;
        return (
            <div className="w-100"> 
                <Row>
                    <Col span={20}>
                        {this.showAllCategory(stores)}
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
    
    showAllCategory(stores){
        var result = null;
        if(stores.length > 0){
            result = stores.map((store, index) => {
                return (<StoreMenu key={index} storeInfo={store} index={index}/>)
            })
        }
        return result;
    }
}


const mapStateToProps = state => {
    return {
        stores: state.stores
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStore : (id) => {
            dispatch(actFetchStoreCategoriesRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantScreen);