import * as Types from '../constants/ActionTypes';
import callApi from '../utils/ApiCaller';


export const actCheckoutRequest = (cartItems, total) =>{

    var orderDetail = cartItems.map((cartItem) =>{
        return{
            foodId: cartItem.foodId,
            quantity: cartItem.cartQuantity,
            storeID: cartItem.storeVM.storeId,
            totalPrice: cartItem.price * cartItem.cartQuantity,
        }
    })
    var order ={
        "customerId": null,
        "orderDetails": orderDetail,
        "totalOrder": total
    }
    return dispatch =>{
        return callApi(`orders/orders/submit-order`,'POST',JSON.stringify(order)).then(res =>{
            dispatch(checkout(res.data));
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }
}



export const addToCart = (food) =>{
    return {
        type: Types.ADD_TO_CART,
        food
    }
}

export const updateCart = (id) =>{
    return {
        type: Types.UPDATE_ITEM_CART,
        id
    }
}

export const removeCart = (id) =>{
    return {
        type: Types.REMOVE_CART,
        id
    }
}
export const addQuantity = (id) =>{
    return {
        type: Types.ADD_QUANTITY,
        id
    }
}

export const subQuantity = (id) =>{
    return {
        type: Types.SUB_QUANTITY,
        id
    }
}

export const checkout = (id) =>{
    return {
        type: Types.CHECKOUT,
        id
    }
}

export const restoreCart = () =>{
    return{
        type: Types.RESTORE_CART
    }
}