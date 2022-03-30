import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import { CALL_ALL_TOKENS } from "./actionTypes";
import { getAllTokens, Token } from "./actions";
import API from "../../scripts/api";

//Include Both Helper File with needed methods

function* callTokens(): Generator {
  console.log("REDUX SAGA FIRE Call Tokens");
  try {
    const data: any = yield call(() => API.coin.tokens());
    yield put(getAllTokens(data.tokens));
  } catch (error) {
    console.log("ERROR CODE 020 : ", error);
    yield { status: false };
  }
}

function* tokensSaga() {
  yield takeEvery(CALL_ALL_TOKENS, callTokens);
}

export default tokensSaga;
