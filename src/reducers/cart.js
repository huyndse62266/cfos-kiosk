import * as Types from './../constants/ActionTypes';
const initState = {
    addedItems:[],
    total: 0,
    originPrice: 0,
    orderID: 0,
    findItem: ''
}


const cart = (state = initState,action) => {
    var { food, id, quantity } = action;
    if(action.type === Types.ADD_TO_CART){
        let addedItem = food
        addedItem.optionList = action.optionList;
        let exist_item = state.addedItems.find(item => item.foodId === food.foodId)
        if(exist_item){
            addedItem.cartQuantity += 1;
            return{
                ...state,
                total: state.total  + addedItem.price*(100-addedItem.promotion)/100,
                originPrice: state.originPrice  + addedItem.price
            }
        }else{
            addedItem.cartQuantity = quantity;
            let totalOption  = 0;
            if(action.optionList){
                action.optionList.map(option => {
                    totalOption += option.optionPrice * option.quantity;
                })
            }
            let newTotal = state.total + (addedItem.price*quantity + totalOption) * (100-addedItem.promotion)/100
            let newOrigin = state.originPrice + (addedItem.price*quantity + totalOption)
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                originPrice: newOrigin
            }
        }
    }

    if(action.type === Types.REMOVE_CART){
        let itemToRemove = state.addedItems.find(item => item.foodId === id)
        let totalOption = 0
        if(itemToRemove.optionList){
            itemToRemove.optionList.map(option => {
                totalOption += option.optionPrice * option.quantity;
            })
        }
        
        let newItems = state.addedItems.filter(item => item.foodId !== id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.cartQuantity + totalOption)*(100-itemToRemove.promotion)/100;
        let newOrigin = state.originPrice - (itemToRemove.price * itemToRemove.cartQuantity + totalOption)
        return {
            ...state,
            addedItems: newItems,
            total: newTotal,
            originPrice: newOrigin
        }
    }

    if(action.type === Types.ADD_QUANTITY){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        addedItem.cartQuantity += 1;
        let newTotal = state.total + addedItem.price*(100-addedItem.promotion)/100
        let newOrigin =  state.total + addedItem.price
        return{
            ...state,
            total: newTotal,
            originPrice: newOrigin
        }   
    }

    if(action.type === Types.SUB_QUANTITY){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        if(addedItem.cartQuantity === 1){
            let totalOption = 0
            addedItem.optionList.map(option => {
                totalOption += option.optionPrice * option.quantity;
            })
            let newItems = state.addedItems.filter(item => item.foodId !== id)
            let newTotal = state.total - (addedItem.price+totalOption)*(100-addedItem.promotion)/100
            let newOrigin =  state.total - (addedItem.price+totalOption)
            return {
                ...state,
                addedItems: newItems,
                total: newTotal,
                originPrice: newOrigin
            }

        }else{
            addedItem.cartQuantity -= 1
            let newTotal = state.total - addedItem.price*(100-addedItem.promotion)/100;
            let newOrigin = state.total - addedItem.price
            return{
                ...state,
                addedItems: state.addedItems,
                total: newTotal,
                originPrice: newOrigin
            }
        }
    }
    if(action.type ===Types.UPDATE_ITEM_CART){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        let oldQuantity = addedItem.cartQuantity
        if(addedItem)
            
            if(quantity == 0){
                let totalOption = 0
                addedItem.optionList.map(option => {
                    totalOption += option.optionPrice * option.quantity;
                })
                let newTotal = state.total - (addedItem.price * oldQuantity + totalOption)*(100-addedItem.promotion)/100;
                let newOrigin = state.total - (addedItem.price * oldQuantity + totalOption);
                let newItems = state.addedItems.filter(item => item.foodId !== id)
                return{
                    ...state,
                    addedItems: newItems,
                    total: newTotal,
                    originPrice: newOrigin
                }   
            }else{
                let totalOption  = 0;
                let oldOptionListPrice = 0; 
                addedItem.cartQuantity = quantity;
                
                if(addedItem.optionList){
                    addedItem.optionList.map(option => {
                        oldOptionListPrice += option.optionPrice * option.quantity;
                    })
                }
                addedItem.optionList = action.optionList;
                if(action.optionList){
                    action.optionList.map(option => {
                        totalOption += option.optionPrice * option.quantity;
                    })
                }
                let newTotal = state.total + (addedItem.price * (quantity - oldQuantity) + totalOption -oldOptionListPrice)*(100-addedItem.promotion)/100;
                let newOrigin = state.total + (addedItem.price * (quantity - oldQuantity) + totalOption -oldOptionListPrice);
                return{
                    ...state,
                    total: newTotal,
                    originPrice: newOrigin
                }   
            }
            
    }
    // if(action.type === Types.CHECKOUT){
    //     let newCart = state.addedItems.filter(item => item.foodId === 0)
    //     return{
    //        ...state,
    //        addedItems: newCart,
    //        total: 0,
    //        originPrice: 0,
    //        orderID: action.id
    //     }
    // }
    if(action.type === Types.RESTORE_CART){
        let newCart = state.addedItems.filter(item => item.foodId === 0)
        return{
           ...state,
           addedItems: newCart,
           total: 0,
           originPrice: 0
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