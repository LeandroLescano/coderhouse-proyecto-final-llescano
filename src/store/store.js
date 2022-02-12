import {applyMiddleware, combineReducers, createStore} from 'redux';

import AreaReducer from './reducers/area.reducer';
import CategoryReducer from './reducers/category.reducer';
import IngredientReducer from './reducers/ingredient.reducer';
import RecipeReducer from './reducers/recipe.reducer';
import UserReducer from './reducers/user.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  recipes: RecipeReducer,
  categories: CategoryReducer,
  ingredients: IngredientReducer,
  areas: AreaReducer,
  user: UserReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
