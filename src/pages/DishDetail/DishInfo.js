import React, { Component } from 'react'
import { Row,Col, message,Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faMinus, faPlus,faMapMarkerAlt, faCartPlus,faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollArea from 'react-scrollbar';
import Rating from 'react-rating'
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux'
import { addToCart, updateItemCart } from '../../action/cart';
import OptionCount from '../../components/FoodOption/OptionCount'

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
          optionList: [],
          isRestore: false,
          choosePriceSize: 0,
          priceSize: 0,
          isResetDefault: false,      
        };
        this.handleFoodOption = this.handleFoodOption.bind(this);
        this.handleResetDefaut = this.handleResetDefaut.bind(this);
        this.changeResetDefaultStatus = this.changeResetDefaultStatus.bind(this);
    }

    handleFoodOption(option,quantity){
        let index = -1;
        index = this.state.optionList.findIndex(optionObject => optionObject.foId === option.foId);
       
        if(index !== -1){
            if(this.props.cartQuantity > 0){
                var data = [...this.state.optionList];
                var oldQuantity = data[index].quantity;
                if(quantity !== 0){
                    data[index].quantity = quantity;
                }else{
                    data = data.filter(optionObject => optionObject.foId !== option.foId)
                }
                
                this.setState({
                    optionList: data,
                    totalPrice: this.state.totalPrice + option.optionPrice*(quantity-oldQuantity)*this.state.clicks*((100-this.props.foodDetail.promotion)/100)
                })
            }else{
                var data = [...this.state.optionList];    
                var oldQuantity = data[index].quantity;          
                if(quantity !== 0){
                    data[index].quantity = quantity;
                }else{
                    data = data.filter(optionObject => optionObject.foId !== option.foId)
                }
                
                if(this.state.clicks > 0 ){
                    this.setState({
                        optionList: data,
                        totalPrice: this.state.totalPrice + option.optionPrice*(quantity-oldQuantity)*this.state.clicks*((100-this.props.foodDetail.promotion)/100)
                    })
                }else{
                    if(quantity-oldQuantity > 0){
                        this.setState({
                            optionList: data,
                        })
                    }else{
                        this.setState({
                            optionList: data,
                        })
                    }        
                }
            }
        }else{
            option.quantity = parseInt(quantity);
            let newOptionList = this.state.optionList;
            newOptionList.push(option);
            if(this.state.clicks === 0){
                this.setState({
                    optionList: newOptionList,
                })
            }else{
                this.setState({
                    optionList: newOptionList,
                    totalPrice: this.state.totalPrice + option.optionPrice*this.state.clicks*((100-this.props.foodDetail.promotion)/100)
                })
            }
            
        }
        
    }

    
    IncrementItem = () => {
        let optionPrice = 0;
        if(this.state.optionList){
            this.state.optionList.map(option => {
                if(option.count === true){
                    optionPrice += option.optionPrice * parseInt(option.quantity);
                }
            })
        }
        this.setState({ 
            clicks: this.state.clicks + 1,
            totalPrice: this.state.totalPrice + ((this.props.foodDetail.price +optionPrice +this.state.priceSize)*((100-this.props.foodDetail.promotion)/100))
        });

    }
    DecreaseItem = () => {
        if(this.state.clicks > 0){
            let optionPrice = 0;
            if(this.state.optionList){
                this.state.optionList.map(option => {
                    optionPrice += option.optionPrice * option.quantity;
                })
            }
            this.setState({ 
                clicks: this.state.clicks - 1,
                totalPrice: this.state.totalPrice - (this.props.foodDetail.price+optionPrice+this.state.priceSize)*((100-this.props.foodDetail.promotion)/100)
            })
        };
    }
    addtoCartRequest = (food,quantity,optionList, priceSize,choosePriceSize) => {
        if(quantity > 0){
            this.props.addtoCart(food,quantity,optionList,priceSize,choosePriceSize);
        }else{
            message.error('Vui lòng chọn số lượng');
        }
    }
    updateItemCartRequest = (id,cart,optionList,priceSize, choosePriceSize) => {
        this.props.updateCart(id,cart,optionList,priceSize, choosePriceSize);
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    stickOption = (option) => {
        let index = -1;
        index = this.state.optionList.findIndex(optionObject => optionObject.foodOptionParent === option.foodOptionParent);
        if(index !== -1){
            var data = [...this.state.optionList];
            data.pop(data[index]);
            option.quantity = 0;
            data.push(option)
            this.setState({
                optionList: data,
            })
        }else{
            let newOptionList = this.state.optionList;
            option.quantity = 0;
            newOptionList.push(option);
            this.setState({
                optionList: newOptionList,
            })
        }
    }
    
    changeOptionPrice = (option, priceSize) =>{
        let index = -1;
        index = this.state.optionList.findIndex(optionObject => optionObject.foodOptionParent === option.foodOptionParent);
        if(index !== -1){
            var data = [...this.state.optionList];
            var oldPriceSize = data[index].optionPrice;
            data.pop(data[index]);
            option.quantity = 0;
            data.push(option)
            if(this.state.clicks > 0){
                this.setState({
                    optionList: data,
                    choosePriceSize: option.optionPrice,
                    priceSize: priceSize,
                    totalPrice: this.state.totalPrice + priceSize*((100-this.props.foodDetail.promotion)/100)*this.state.clicks
                })
            }else{
                this.setState({
                    optionList: data,
                    choosePriceSize: option.optionPrice,
                    priceSize: priceSize
                })
            }
            
        }else{
            let newOptionList = this.state.optionList;
            option.quantity = 0;
            newOptionList.push(option);
            if(this.state.clicks > 0){
                this.setState({
                    optionList: newOptionList,
                    choosePriceSize: option.optionPrice,
                    priceSize: priceSize,
                    totalPrice: this.state.totalPrice + priceSize*((100-this.props.foodDetail.promotion)/100)*this.state.clicks 
                })
            }else{
                this.setState({
                    optionList: newOptionList,
                    choosePriceSize: option.optionPrice,
                    priceSize: priceSize,
                })
            }
            
        }
    }

    restoreOption = ()=>{
        this.setState({
            optionList: [],
            totalPrice: this.props.foodDetail.price * this.state.clicks * ((100-this.props.foodDetail.promotion)/100),
            isRestore: true
        })
    }

    handleResetDefaut(foodDetail){
        this.setState({
            totalPrice: 0,
            clicks: 0,
            isResetDefaule: true
        })
        foodDetail.foodOptions.map((option, index) => {
            if(option.foodOptionVMS !== null){
                option.foodOptionVMS.map((optionVMS) => {
                    optionVMS.quantity = 0;
                })
            }
        })

        this.state.optionList.map((option)=>{
            option.quantity =0
        })
    }

    changeResetDefaultStatus(status){
        this.setState({
            isResetDefault: status
        })
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
                    priceSize: this.props.foodCart.priceSize,
                    choosePriceSize: this.props.foodCart.choosePriceSize,
                    optionList: this.props.foodCart.optionList,
                    totalPrice:(this.props.foodCart.cartQuantity * (this.props.foodCart.price + totalOption + this.props.foodCart.priceSize)) *(100-this.props.foodCart.promotion)/100
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

    componentWillReceiveProps({foodDetail}){
        if(this.props.foodCart.choosePriceSize){
            this.setState({
                choosePriceSize: this.props.foodCart.choosePriceSize
            })
        }else if(foodDetail){

            foodDetail.foodOptions.map(foodOption => {
                foodOption.foodOptionVMS.map(foodOptionVMSDetail =>
                    {
                        if(foodOptionVMSDetail.foName === "Vừa"){
                            this.setState({
                                choosePriceSize: foodOptionVMSDetail.optionPrice
                            })
                        }    
                    }
                )
            })
        }
        
    }
    componentDidUpdate(){
        if(this.props.foodCart.optionList){
            this.props.foodCart.optionList.map(optionChoosen => 
               {
                   if(optionChoosen.count === false && optionChoosen.selectMore === false){
                        document.getElementById(optionChoosen.foId).checked = true
                   }
               }
            
            )
        }
    }



    rendeSize = (foodOption, index) =>{
        if(foodOption.foodOptionNameParent === 'Kích cỡ' || foodOption.foodOptionNameParent === 'Size'  ){
            return <div key={index}>
            <Row>
                <h6 className="option-title">{foodOption.foodOptionNameParent}</h6>
            </Row>
            <Row className="mb-3">
                <form className="form cf">
                    <section className="plan cf">
                        {foodOption.foodOptionVMS.map((foodOptionVMSDetail, index) => 
                        <Col span={8} key={index}>
                            <input type="radio" name="radio1" id={foodOptionVMSDetail.foId} value={foodOptionVMSDetail.foId} onChange={ () => this.changeOptionPrice(foodOptionVMSDetail, foodOptionVMSDetail.optionPrice-this.state.choosePriceSize)} />
                            <label className="check-box-label size-label" htmlFor={foodOptionVMSDetail.foId}>
                                {this.renderLabel(foodOptionVMSDetail)}
                            </label>
                        </Col>)
                        }
                    </section>
                </form>
            </Row>
        </div>
        }
    }
    renderLabel(foodOptionVMSDetail){
        if((foodOptionVMSDetail.optionPrice-this.state.choosePriceSize) !== 0){
            return  <span>
            {foodOptionVMSDetail.foName}<br/>
            <span className="price-size"><NumberFormat value={foodOptionVMSDetail.optionPrice-this.state.choosePriceSize} displayType={'text'} thousandSeparator={','}/> đ</span></span>
        }else{
            return <span className="choose-price-label">{foodOptionVMSDetail.foName}</span>
        }
    }

    renderOption = (foodOption, index) =>{
        if(foodOption.count === true){
            return <div key={index}>
            <Row>
                <h6 className="option-title">{foodOption.foodOptionNameParent}</h6>
            </Row>
            <Row className="px-4 mb-3">
                {this.props.foodCart ?foodOption.foodOptionVMS ? foodOption.foodOptionVMS.map((foodOptionVMSDetail)=>
                <OptionCount Restore={this.state.isRestore} foodOption={foodOptionVMSDetail} optionQuatity={this.props.foodCart.optionList} IncrementOption={this.handleFoodOption} DecreaseOption={this.handleFoodOption} isResetDefault = {this.state.isResetDefaule} changeDefaultStatus = {this.changeResetDefaultStatus} />) : <div/>:
                foodOption.foodOptionVMS ? foodOption.foodOptionVMS.map((foodOptionVMSDetail)=>
                <OptionCount Restore={this.state.isRestore} foodOption={foodOptionVMSDetail} IncrementOption={this.handleFoodOption} isResetDefault = {this.state.isResetDefaule} changeDefaultStatus = {this.changeResetDefaultStatus} />) : <div/> }
            
            </Row>
        </div>
        }else if(foodOption.selectMore === false && foodOption.count === false && foodOption.foodOptionNameParent !== 'Kích cỡ' && foodOption.foodOptionNameParent !== 'Size'){
            return <div key={index}>
            <Row>
                <h6 className="option-title">{foodOption.foodOptionNameParent}</h6>
            </Row>
            <Row className="mb-3">
                <form className="form cf">
                    <section className ="plan cf">
                        {foodOption.foodOptionVMS.map((foodOptionVMSDetail, index) => 
                        <Col span={8} key={index}>
                            <input type="radio" name="radio1" id={foodOptionVMSDetail.foId} value={foodOptionVMSDetail.foId} onChange={ () => this.stickOption(foodOptionVMSDetail)} /><label className="check-box-label" htmlFor={foodOptionVMSDetail.foId}>{foodOptionVMSDetail.foName}</label>
                        </Col>)
                        }
                    </section>
                </form>
            </Row>
        </div>
        }
    }

    render() {
        var {cartQuantity,foodDetail} = this.props;
        var {foodOptions,storeVM} = foodDetail;
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
                                return <Col span={24} className="py-3" key={index}>    
                                    <img src={imageURL.image} className="image-info" alt="Image Not Found"/>
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
                                    <Col span={2} offset={1}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                    </Col>
                                    <Col span={21}>
                                        {/* {storeVM.storeName?<span>{storeVM.storeName}</span>:<span/>} */}
                                        <span className="opensan-16-semibold">Nhà hàng nàng gánh</span>
                                    </Col>
                                </Row>
                                {/* tên món ăn */}
                                <Row className="pt-1" >
                                    <h4 className="opensan-24-extrabold text-left">{foodDetail.foodName}</h4>
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
                                <Row className="py-2">
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
                               {foodOptions?<div>{foodOptions.map((foodOption, index) =>
                                    this.rendeSize(foodOption,index)
                                    )} </div>:<div/>}
                                <Row className="pt-2 mb-2">
                                    <h6 className="opensan-22-bold">Số lượng</h6>
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
                                    {foodOptions?<div>{foodOptions.map((foodOption, index) =>
                                    this.renderOption(foodOption,index)
                                    )} </div>:<div/>}
                                    <Row className="py-3 px-4 float-right">
                                        <Button style={{backgroundColor: '#D2D2D2'}} onClick={() => this.handleResetDefaut(this.props.foodDetail)}>
                                            <FontAwesomeIcon icon={faSyncAlt}/><span className="pl-2">Đặt về mặc định</span>
                                        </Button>
                                    </Row>
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
                                <button type="button" className="btn cart-button" onClick={()=>{this.addtoCartRequest(this.props.foodCart,this.state.clicks, this.state.optionList, this.state.priceSize, this.state.choosePriceSize)}}>
                                    <FontAwesomeIcon icon={faCartPlus} className="cart-plus-icon"/> Thêm vào giỏ
                                </button> :
                                <button type="button" className="btn cart-button" onClick={()=>{this.updateItemCartRequest(foodDetail.foodId,this.state.clicks,this.state.optionList,this.state.priceSize,this.state.choosePriceSize)}}>
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
        addtoCart: (food,quantity,optionList,priceSize, choosePriceSize)=>{
            dispatch(addToCart(food,quantity,optionList,priceSize,choosePriceSize))
        },
        updateCart: (id,quantity,optionList,priceSize, choosePriceSize)=>{
            dispatch(updateItemCart(id,quantity,optionList,priceSize, choosePriceSize))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DishInfo)
