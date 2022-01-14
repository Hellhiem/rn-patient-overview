import { AlertService } from 'lib/services';
import { put, takeLatest } from 'redux-saga/effects';
import { fetchPatientsListService } from 'services/patients';
import {
  fetchPatientListAction,
  fetchPatientListErrorAction,
  fetchPatientListSuccessAction,
} from 'store/actions';
import { call } from 'typed-redux-saga';

export function* fetchPatientsListSaga() {
  try {
    const response = yield* call(fetchPatientsListService);

    yield put(fetchPatientListSuccessAction(response));
  } catch (error) {
    const errorObject = error as Error;

    yield put(fetchPatientListErrorAction(errorObject));
    AlertService.show(errorObject.message);
  }
}

export const patientsSaga = [takeLatest(fetchPatientListAction, fetchPatientsListSaga)];
