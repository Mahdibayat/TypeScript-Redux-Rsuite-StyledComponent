import { all, fork } from "redux-saga/effects";
import siteSaga from "./site/saga";

export default function* rootSaga() {
  yield all([fork(siteSaga)]);
}
