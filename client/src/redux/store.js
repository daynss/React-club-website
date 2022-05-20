import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import cartReducer from "./Cart/cartReducer";
import eventReducer from "./Events/eventReducer";

const rootReducer = combineReducers({
  form: formReducer,
  cart: cartReducer,
  events: eventReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
