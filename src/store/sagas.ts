import { all, fork } from 'redux-saga/effects';
import { authFlow } from '../auth/flow';
import { snackbarFlow } from '../snackbar/flow';
import { exchangesFlow } from '../exchanges/flow';

function* rootSaga() {
  yield all([fork(authFlow)]);
  yield all([fork(snackbarFlow)]);
  yield all([fork(exchangesFlow)]);
}

export default rootSaga;
