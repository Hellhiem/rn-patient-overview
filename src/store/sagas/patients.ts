import { AlertService } from 'lib/services';
import { put, takeLatest } from 'redux-saga/effects';
import { fetchPatientsListService, fetchPatientDetailsService } from 'services/patients';
import {
  fetchPatientDetailsAction,
  fetchPatientDetailsErrorAction,
  fetchPatientDetailsSuccessAction,
  fetchPatientListAction,
  fetchPatientListErrorAction,
  fetchPatientListSuccessAction,
} from 'store/actions';
import { call } from 'typed-redux-saga';
import { FetchPatientDetailsActionType } from 'types';

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

export function* fetchPatientsDetailsSaga(action: FetchPatientDetailsActionType) {
  try {
    const response = yield* call(fetchPatientDetailsService, action.payload.patientId);

    yield put(fetchPatientDetailsSuccessAction(response));
  } catch (error) {
    const errorObject = error as Error;

    yield put(fetchPatientDetailsErrorAction(errorObject));
    AlertService.show(errorObject.message);
  }
}

export const patientsSaga = [
  takeLatest(fetchPatientListAction, fetchPatientsListSaga),
  takeLatest(fetchPatientDetailsAction, fetchPatientsDetailsSaga),
];
