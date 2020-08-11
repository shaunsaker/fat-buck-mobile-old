import { all, fork } from 'redux-saga/effects';
import { authFlow } from '../auth/flow';

function* rootSaga() {
  yield all([fork(authFlow)]);
}

export default rootSaga;
