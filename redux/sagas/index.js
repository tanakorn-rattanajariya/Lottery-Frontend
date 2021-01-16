import { all } from "redux-saga/effects";
import { interact } from "./interact";
import { lotto } from "./lotto";
export default function* saga() {
  yield all([interact(), lotto()]);
}
