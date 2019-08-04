import * as Types from './../constants/ActionTypes';
const initState = {
    addedItems:[],
    total: 0,
    originPrice: 0,
    orderID: 0,
    findItem: ''
}


const cart = (state = initState,action) => {
    var { food, id, quantity, priceSize } = action;
    if(action.type === Types.ADD_TO_CART){
        let addedItem = food
        addedItem.optionList = action.optionList;
        let exist_item = state.addedItems.find(item => item.foodId === food.foodId)
        if(exist_item){
            let totalOption  = 0;
            if(exist_item.optionList){
                exist_item.optionList.map(option => {
                    totalOption += option.optionPrice * option.quantity;
                })
            }
          
            exist_item.cartQuantity += 1;
            return{
                ...state,
                total: state.total  + (addedItem.price + totalOption + exist_item.priceSize)*(100-addedItem.promotion)/100,
                originPrice: state.originPrice  + (addedItem.price + totalOption)
            }
        }else{
            addedItem.cartQuantity = quantity;
            addedItem.priceSize = action.priceSize;
            addedItem.choosePriceSize = action.choosePriceSize;
            let totalOption  = 0;
            if(action.optionList){
                action.optionList.map(option => {
                    totalOption += option.optionPrice * option.quantity;
                })
            }
            if (priceSize === undefined){
                priceSize = 0
            }
            let newTotal = state.total + (addedItem.price + totalOption + priceSize) * quantity * (100-addedItem.promotion)/100 
            let newOrigin = state.originPrice + (addedItem.price + totalOption + priceSize) *quantity
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
        let newTotal = state.total - (itemToRemove.price  + totalOption) * itemToRemove.cartQuantity * (100-itemToRemove.promotion)/100;
        let newOrigin = state.originPrice - (itemToRemove.price + totalOption) * itemToRemove.cartQuantity
        return {
            ...state,
            addedItems: newItems,
            total: newTotal,
            originPrice: newOrigin
        }
    }

    if(action.type === Types.ADD_QUANTITY){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        let totalOption  = 0;
        if(addedItem.optionList){
            addedItem.optionList.map(option => {
                totalOption += option.optionPrice * option.quantity;
            })
        }
        console.log(totalOption)
        if (action.priceSize === undefined){
            action.priceSize = 0
        }
        console.log(priceSize)
        console.log(addedItem.cartQuantity )
        addedItem.cartQuantity += 1;
        console.log(state.total + (addedItem.price+totalOption+action.priceSize)*(100-addedItem.promotion)/100)
        console.log(state.total + (addedItem.price+totalOption+action.priceSize)*(100-addedItem.promotion)/100)
        let newTotal = state.total + (addedItem.price+totalOption+action.priceSize)*(100-addedItem.promotion)/100
        let newOrigin =  state.originPrice + (addedItem.price+totalOption+action.priceSize)
        return{
            ...state,
            total: newTotal,
            originPrice: newOrigin
        }   
    }

    if(action.type === Types.SUB_QUANTITY){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        let totalOption = 0
        if(addedItem.optionList){
            addedItem.optionList.map(option => {
                totalOption += option.optionPrice * option.quantity;
            })
        }  
        if (priceSize === undefined){
            priceSize = 0
        }
        if(addedItem.cartQuantity === 1){
            let newItems = state.addedItems.filter(item => item.foodId !== id)
            let newTotal = state.total - (addedItem.price+totalOption+addedItem.priceSize)*(100-addedItem.promotion)/100
            let newOrigin =  state.originPrice - (addedItem.price+totalOption+addedItem.priceSize)
            return {
                ...state,
                addedItems: newItems,
                total: newTotal,
                originPrice: newOrigin
            }
        }else{
            addedItem.cartQuantity -= 1
            let newTotal = state.total - (addedItem.price+totalOption+addedItem.priceSize)*(100-addedItem.promotion)/100;
            let newOrigin = state.originPrice - (addedItem.price+totalOption+addedItem.priceSize)
            return{
                ...state,
                addedItems: state.addedItems,
                total: newTotal,
                originPrice: newOrigin
            }
        }
    }
    if(action.type === Types.UPDATE_ITEM_CART){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        console.log(addedItem)
        let oldQuantity = addedItem.cartQuantity
        if(addedItem){
            if(quantity === 0){
                let totalOption = 0
                addedItem.optionList.map(option => {
                    totalOption += option.optionPrice * option.quantity;
                })
                console.log((addedItem.price + totalOption+addedItem.priceSize) * oldQuantity * (100-addedItem.promotion)/100)
                let newTotal = state.total - (addedItem.price + totalOption+addedItem.priceSize) * oldQuantity * (100-addedItem.promotion)/100;
                let newOrigin = state.originPrice - (addedItem.price + totalOption+addedItem.priceSize)* oldQuantity;
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
                addedItem.choosePriceSize = action.choosePriceSize;
                addedItem.priceSize = action.priceSize;
               
                if(action.optionList){
                    action.optionList.map(option => {
                        totalOption += option.optionPrice * option.quantity;
                    })
                }
                let newTotal = 0
                let newOrigin = 0
                if(totalOption -oldOptionListPrice === 0){
                    newTotal= state.total + (addedItem.price  + totalOption  + addedItem.priceSize)* (quantity - oldQuantity)*(100-addedItem.promotion)/100;
                    newOrigin  = state.total + (addedItem.price  + totalOption  + addedItem.priceSize)* (quantity - oldQuantity);
                }else{
                    newTotal = state.total + (addedItem.price  + totalOption -oldOptionListPrice + addedItem.priceSize)* (quantity - oldQuantity)*(100-addedItem.promotion)/100;
                    newOrigin = state.total + (addedItem.price  + totalOption -oldOptionListPrice + addedItem.priceSize   )* (quantity - oldQuantity);
                }
                
                return{
                    ...state,
                    total: newTotal,
                    originPrice: newOrigin
                }   
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