import { all } from 'redux-saga/effects';

import { patientsSaga } from './patients';

export default function* rootSaga() {
  yield all([...patientsSaga]);
}
