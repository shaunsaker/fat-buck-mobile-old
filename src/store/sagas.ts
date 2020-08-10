import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    // fork(confirmedCases),
  ]);
}

export default rootSaga;
