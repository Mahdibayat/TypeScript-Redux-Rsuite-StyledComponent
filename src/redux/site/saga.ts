import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { CHANGE_THEME, TOGGLE_CONNECT_WALLET } from "./actionTypes";
import { changeTheme } from "./actions";

//Include Both Helper File with needed methods

function* someRedux() {
  console.log("REDUX SAGA FIRE CHANGE THEME");
  call(() => console.log("REDUX SAGA FIRE CHANGE THEME"));
  yield console.log("REDUX SAGA FIRE CHANGE THEME");
  // try {
  //   const response = yield call(getTasks)
  //   yield put(getTasksSuccess(response))
  // } catch (error) {
  //   yield put(getTasksFail(error))
  // }
}

function* siteSaga() {
  yield takeEvery(CHANGE_THEME, someRedux);
}

export default siteSaga;
