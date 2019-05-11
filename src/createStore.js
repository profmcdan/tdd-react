import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlewareList = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewareList)(
  createStore
);

export const store = createStoreWithMiddleware(rootReducer);
