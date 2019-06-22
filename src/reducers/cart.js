import * as Types from './../constants/ActionTypes';

const initState = {
    addedItems:[],
    total: 0,
    findItem: null
}


const cart = (state = initState,action) => {
    var { food, id } = action;
    if(action.type === Types.ADD_TO_CART){

        let addedItem = food
        let exist_item = state.addedItems.find(item => item.foodId === food.foodId)
        if(exist_item){
            console.log('eee');
            addedItem.cartQuantity += 1
            return{
                ...state,
                total: state.total  + addedItem.price,
                
            }
        }else{
            console.log('aaaa')
            addedItem.cartQuantity = 1;
            let newTotal = state.total + addedItem.price
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    if(action.type === Types.REMOVE_CART){
        let itemToRemove = state.addedItems.find(item => item.foodId === id)
        console.log(itemToRemove)
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
        console.log(addedItem)
        addedItem.cartQuantity += 1;
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }   
    }

    if(action.type === Types.SUB_QUANTITY){
        let addedItem = state.addedItems.find(item => item.foodId === id)
        console.log(addedItem)
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
        if(addedItem)
            return {
                findItem: addedItem
            }
    }



    return state
};

export default cart;