import { all, fork } from "redux-saga/effects";
import siteSaga from "./site/saga";
import tokensSaga from "./tokens/saga";

export default function* rootSaga() {
  yield all([fork(siteSaga)]);
  yield all([fork(tokensSaga)]);
}
