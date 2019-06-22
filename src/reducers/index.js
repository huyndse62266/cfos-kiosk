import { combineReducers } from 'redux';
import foods from './foods'
import categories from './categories'
import cart from './cart'

const appReducers = combineReducers({
    foods,
    categories,
    cart
});

export default appReducers;