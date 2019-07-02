import * as Types from './../constants/ActionTypes';
const initState = {
    addedItems:[],
    total: 0,
    orderID: 0,
    findItem: ''
}


const cart = (state = initState,action) => {
    var { food, id, quantity } = action;
    if(action.type === Types.ADD_TO_CART){

        let addedItem = food
        let exist_item = state.addedItems.find(item => item.foodId === food.foodId)
        if(exist_item){
            addedItem.cartQuantity += 1
            return{
                ...state,
                total: state.total  + addedItem.price,
            }
        }else{
            addedItem.cartQuantity = quantity;
            let newTotal = state.total + addedItem.price*quantity
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    if(action.type === Types.REMOVE_CART){
        let itemToRemove = state.addedItems.find(item => item.foodId === id)
        let newItems = state.addedItems.filter(item => item.foodId !== id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.cartQuantity)
        return {
            ...state,
            addedItems: newItems,
            total: newTotal
        }
    }

    if(action.type === Types.ADD_QUANTITY){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        addedItem.cartQuantity += 1;
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }   
    }

    if(action.type === Types.SUB_QUANTITY){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        if(addedItem.cartQuantity === 1){
            let newItems = state.addedItems.filter(item => item.foodId !== id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: newItems,
                total: newTotal
            }

        }else{
            addedItem.cartQuantity -= 1
            let newTotal = state.total - addedItem.price;
            return{
                ...state,
                addedItems: state.addedItems,
                total: newTotal
            }
        }
    }
    if(action.type ===Types.UPDATE_ITEM_CART){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        let oldQuantity = addedItem.cartQuantity
        if(addedItem)
            addedItem.cartQuantity = quantity;
            if(quantity == 0){
                let newTotal = state.total - addedItem.price * oldQuantity;
                let newItems = state.addedItems.filter(item => item.foodId !== id)
                return{
                    ...state,
                    addedItems: newItems,
                    total: newTotal
                }   
            }else{
                let newTotal = state.total + addedItem.price * (quantity - oldQuantity);
                return{
                    ...state,
                    total: newTotal
                }   
            }
            
    }
    if(action.type === Types.CHECKOUT){
        let newCart = state.addedItems.filter(item => item.foodId === 0)
        return{
           ...state,
           addedItems: newCart,
           total: 0,
           orderID: action.id
        }
    }
    if(action.type === Types.RESTORE_CART){
        let newCart = state.addedItems.filter(item => item.foodId === 0)
        return{
           ...state,
           addedItems: newCart,
           total: 0,
        }
    }
    if(action.type === Types.FIND_CART){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        return {
            ...state,
            findItem: addedItem
        }
    }



    return state
};

export default cart;