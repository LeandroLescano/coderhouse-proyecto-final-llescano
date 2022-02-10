import {combineReducers, createStore} from 'redux';

import CategoryReducer from './reducers/category.reducer';
import RecipeReducer from './reducers/recipe.reducer';

const RootReducer = combineReducers({
  recipes: RecipeReducer,
  categories: CategoryReducer,
});

export default createStore(RootReducer);
