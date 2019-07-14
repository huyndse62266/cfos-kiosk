import * as Types from '../constants/ActionTypes';

var initialState = {
    addOtions: [],
};


const options = (state = initialState, action) => {
    let addedOption = state.addOtions.find(storeOption => storeOption.foId === action.option.foId)
    switch (action.type) {
        case Types.INC_OPTION:
            let addItem = action.option;
           
            if(addedOption){
                addItem.quantity += 1;
                return{
                    ...state,
                }
            }else{
                addItem.quantity = 1;
                addItem.foodId = action.foodId;
                return{
                    ...state,
                    addOtions: [...state.addOtions, addItem],
                }
            }
        case Types.DEC_OPTION:
            if(addedOption.quantity == 1){
                let newAddOptions = state.addOtions.filter(option => option.foId !== action.option.foId)
                return {
                    ...state,
                    addOtions: newAddOptions
                }
            }else{
                addedOption.quantity -= 1;
                return{
                    ...state,
                    addedItems: state.addedItems,
                }
            }
        default: return {
            ...state
        };
    }
};

export default options;