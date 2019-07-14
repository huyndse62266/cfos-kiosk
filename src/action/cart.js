import * as Types from '../constants/ActionTypes';
import callApi from '../utils/ApiCaller';




export const addToCart = (food,quantity,optionList,totalPrice) =>{
    return {
        type: Types.ADD_TO_CART,
        food,
        quantity,
        optionList,
        totalPrice
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

export const updateItemCart = (id,quantity,optionList) =>{
    return{
        type: Types.UPDATE_ITEM_CART,
        id,
        quantity,
        optionList
    }
}

export const findCart = (id) =>{
    return{
        type: Types.FIND_CART,
        id
    }
}