import {
  ActionType,
  DispatchType,
  ReduxSiteInterface,
} from "./../scripts/interfaces";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { siteReducer } from "./reducer";

let middlewares = [thunk, logger];

export const store: Store<ReduxSiteInterface, ActionType> & {
  dispatch: DispatchType;
} = createStore(siteReducer, applyMiddleware(...middlewares));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootReduxState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
