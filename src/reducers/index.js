import { combineReducers } from 'redux';
import foods from './foods'
import categories from './categories'

const appReducers = combineReducers({
    foods,
    categories
});

export default appReducers;