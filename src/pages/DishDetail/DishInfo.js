import React, { Component } from 'react'
import { Button,Row,Col, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faMinus, faPlus, faSyncAlt,faMapMarkerAlt, faCar, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import ScrollArea from 'react-scrollbar';
import Rating from 'react-rating'
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux'
import { addToCart, updateItemCart, findCart } from '../../action/cart';
import Foodingredients from '../../components/DishDetail/Foodingredients'
import MoreOption from '../../components/DishDetail/MoreOption'

import 'antd/dist/antd.css';
import './DishInfo.css'


class DishInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true,
          totalPrice: 0,
          food: undefined,
          optionList: []
        };
        this.handleFoodOption = this.handleFoodOption.bind(this);
    }

    handleFoodOption(option,quantity){
        let index = -1;
        index = this.state.optionList.findIndex(optionObject => optionObject.foId === option.foId);
        if(index !== -1){
            var data = [...this.state.optionList];
            var oldQuantity = data[index].quantity;
            if(quantity !== 0){
                data[index].quantity = quantity;
            }else{
                data.pop(data[index]);
            }
            this.setState({
                optionList: data,
                totalPrice: this.state.totalPrice + option.optionPrice*(quantity-oldQuantity)*((100-this.props.foodDetail.promotion)/100)
            })
        }else{
            option.quantity = parseInt(quantity);
            let newOptionList = this.state.optionList;
            newOptionList.push(option);
            this.setState({
                optionList: newOptionList,
                totalPrice: this.state.totalPrice + option.optionPrice*((100-this.props.foodDetail.promotion)/100)
            })
        }
        
    }

    
    IncrementItem = () => {
        this.setState({ 
            clicks: this.state.clicks + 1,
            totalPrice: this.state.totalPrice + this.props.foodDetail.price*((100-this.props.foodDetail.promotion)/100)
        });

    }
    DecreaseItem = () => {
        if(this.state.clicks > 0){
            this.setState({ 
                clicks: this.state.clicks - 1,
                totalPrice: this.state.totalPrice - this.props.foodDetail.price*((100-this.props.foodDetail.promotion)/100)
            })
        };
    }
    addtoCartRequest = (food,quantity,optionList) => {
        if(quantity > 0){
            this.props.addtoCart(food,quantity,optionList);
        }else{
            message.error('Vui lòng chọn số lượng');
        }
    }
    updateItemCartRequest = (id,cart,optionList) => {
        this.props.updateCart(id,cart,optionList);
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }
    
    componentWillMount(){
        
        if(this.props.cartQuantity !== 0){
            if(this.props.foodCart.optionList){
                let totalOption  = 0;
                this.props.foodCart.optionList.map(option => {
                    totalOption += option.optionPrice * option.quantity;
                })
                this.setState({
                    clicks: this.props.cartQuantity,
                    totalPrice: (this.props.foodCart.cartQuantity * this.props.foodCart.price + totalOption) *((100-this.props.foodCart.promotion)/100)
                })
            }else{
                this.setState({
                    clicks: this.props.cartQuantity,
                    totalPrice: (this.props.foodCart.cartQuantity * this.props.foodCart.price)*((100-this.props.foodCart.promotion)/100)
                })
            }
            
        }else{
            this.setState({
                clicks: 0
            })
        }
    }


    renderFoodOptionItem = (foodOption)=>{
        return <div>
            
        </div>
    }

    render() {
        var {cartQuantity,foodDetail} = this.props;
        var {foodOptions,storeVM} = foodDetail;
        console.log(this.props.foodDetail.storeVM)
        return (
            <div className="info-feedback-container">
                <Row type="flex" justify="start">
                    {/* cột hình ảnh */}
                    <Col style={{width:'30%'}}>
                        <ScrollArea speed={0.8}
                            verticalScrollbarStyle={{display:'none'}}
                            className="area"
                            contentClassName="content"
                            horizontal={false} style={{height: '630px'}}>
                        <Row className="d-flex flex-column pr-3">
                            {foodDetail.imageVMS ? foodDetail.imageVMS.map((imageURL,index) => {
                                return <Col span={24}>    
                                    <img src={imageURL.image} className="image-info" alt="Cinque Terre"/>
                                </Col>
                            }):<div/>}                   
                        </Row>
                        </ScrollArea>
                    </Col>
                    {/* cột thông tin món */}
                    <Col style={{width:'70%'}}>
                        <Row>
                            {/* chi tiết món  */}
                            <Col span={12} className="px-3">
                                {/* thông tin cửa hàng */}
                                <Row>
                                    <Col span={3} offset={1}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                    </Col>
                                    <Col span={20}>
                                        {/* <span>{this.props.food.storeName}</span> */}
                                    </Col>
                                </Row>
                                {/* tên món ăn */}
                                <Row className="food-name-info">
                                    <h4 className="text-left">{foodDetail.foodName}</h4>
                                </Row>
                                {/* đánh giá */}
                                <Row  >
                                    <Rating               
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        initialRating={foodDetail.rate}
                                        readonly
                                        style={{fontSize:'10px', color:'orange'}}
                                    />
                                </Row>
                                {/* giá tiền */}
                                <Row className="pt-2">
                                    <h5 className="font-weight-bold"> <NumberFormat value={foodDetail.price} displayType={'text'} thousandSeparator={','}/> đ</h5>
                                </Row>
                                {/* ghi chú */}
                                <Row className="border-top border-bottom py-2">
                                    <span className="text-left" style={{fontSize: '18px',fontWeight: 'bold'}}>{foodDetail.foodDescription}</span>
                                </Row>
                                {/* thẻ giảm giá */}
                                {foodDetail.promotion > 0? <Row className="pt-3 pb-1">
                                    <Col span={2}>
                                        <FontAwesomeIcon icon={faTag} style={{color: 'green',fontSize:'24px'}} />
                                    </Col>
                                    <Col span={22}>
                                        <h5 className="text-left px-3">{foodDetail.promotion}% Giảm giá toàn menu</h5>
                                    </Col>                                   
                                </Row>:<span/>} 
                               {/* chọn số lượng */}
                                <Row className="pt-2">
                                    <h5>Số lượng</h5>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <Row className="quantity-button-wrapper">
                                            <Col span={8}>                                
                                                <button type="button" className="btn bg-white" onClick={this.DecreaseItem} ><FontAwesomeIcon icon={faMinus} /></button> 
                                            </Col>
                                            <Col span={8}>
                                                <div className="display-quantity-div">
                                                    { this.state.show ? <h2 style={{fontSize:'1rem'}}>{this.state.clicks }</h2> : '' }
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <button type="button" className="btn bg-white" onClick={this.IncrementItem} ><FontAwesomeIcon icon={faPlus} /></button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            {/* cột chọn lựa chọn thêm cho món */}
                            <Col span={12}>
                                <ScrollArea speed={0.8}
                                verticalScrollbarStyle={{display:'none'}}
                                className="area"
                                contentClassName="content"
                                horizontal={false} style={{height: '650px'}}>
                                    {/* <Row>
                                        <Foodingredients/>
                                    </Row> */}
                                    <h4>Tùy chọn món ăn</h4>
                                    {foodOptions?<div>{foodOptions.map((foodOption) =>
                                    <div>
                                        <Row>
                                            <h6 className="px-3 py-2">{foodOption.foodOptionNameParent}</h6>
                                        </Row>
                                        <Row className="px-4">
                                            {this.props.foodCart ?foodOption.foodOptionVMS ? foodOption.foodOptionVMS.map((foodOptionVMSDetail)=><MoreOption foodOption={foodOptionVMSDetail} optionQuatity={this.props.foodCart.optionList} IncrementOption={this.handleFoodOption} DecreaseOption={this.handleFoodOption}/>) : <div/>:foodOption.foodOptionVMS ? foodOption.foodOptionVMS.map((foodOptionVMSDetail)=><MoreOption foodOption={foodOptionVMSDetail} IncrementOption={this.handleFoodOption}/>) : <div/> }
                                        {}   
                                        </Row>  
                                        <Row className="py-3 px-4 float-right">
                                            <Button style={{backgroundColor: '#D2D2D2'}} >
                                                <FontAwesomeIcon icon={faSyncAlt}/><span className="pl-2">Đặt về mặc định</span>
                                            </Button>
                                        </Row>
                                    </div> )} </div>:<div/>}
          
                                </ScrollArea>
                                
                            </Col>
                        </Row>
                        <Row type="flex" justify="end" className="h-100">
                            <Col span={14} className="px-2 h-100">
                                <Row type="flex" justify="end" className="total-price-dish-info">
                                    <Col span={8}> <h3 className="font-weight-bold text-right"><small>Tạm tính:</small></h3></Col>
                                    <Col span={10}><h3 className="font-weight-bold text-right"><NumberFormat value={this.state.totalPrice} displayType={'text'} thousandSeparator={','} /> đ</h3></Col>
                                </Row>
                            </Col>
                            <Col span={8} className="h-100" offset={1}>
                                {cartQuantity === 0 ? 
                                <button type="button" className="btn cart-button" onClick={()=>{this.addtoCartRequest(this.props.foodCart,this.state.clicks, this.state.optionList)}}>
                                    <FontAwesomeIcon icon={faCartPlus} className="cart-plus-icon"/> Thêm vào giỏ
                                </button> :
                                <button type="button" className="btn cart-button" onClick={()=>{this.updateItemCartRequest(foodDetail.foodId,this.state.clicks,this.state.optionList)}}>
                                    <FontAwesomeIcon icon={faCartPlus} className="cart-plus-icon"/> Cập nhật giỏ
                                </button> }
                                
                            </Col>
                        </Row>
                    </Col>

                    
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{     
        item: state.cart.findItem,
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        addtoCart: (food,quantity,optionList)=>{
            dispatch(addToCart(food,quantity,optionList))
        },
        updateCart: (id,quantity,optionList)=>{
            dispatch(updateItemCart(id,quantity,optionList))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DishInfo)
