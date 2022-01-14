import { apiCallErrorState, startApiCallState } from 'lib/dataParsers';
import { errorInterfaceMock, patientsListMock } from 'mocks';
import {
  fetchPatientListAction,
  fetchPatientListErrorAction,
  fetchPatientListSuccessAction,
} from 'store/actions';
import { PatientsReducerLoadingType, PatientsState } from 'types';

import { patientsReducer, initialState } from '../patients';

describe('Reducers: patients', () => {
  it('should return proper state for FETCH_PATIENT_LIST action', () => {
    const expectedState = startApiCallState(
      initialState,
      PatientsReducerLoadingType.fetchPatientsListLoading,
    );

    expect(patientsReducer(initialState, fetchPatientListAction())).toEqual(expectedState);
  });

  it('should return proper state for FETCH_PATIENT_LIST_SUCCESS action', () => {
    const expectedState: PatientsState = {
      loading: {
        fetchPatientsListLoading: false,
      },
      patientsList: patientsListMock,
      error: null,
    };

    expect(patientsReducer(initialState, fetchPatientListSuccessAction(patientsListMock))).toEqual(
      expectedState,
    );
  });

  it('should return proper state for FETCH_PATIENT_LIST_ERROR action', () => {
    const expectedState = apiCallErrorState(
      initialState,
      PatientsReducerLoadingType.fetchPatientsListLoading,
      errorInterfaceMock,
    );

    expect(patientsReducer(initialState, fetchPatientListErrorAction(errorInterfaceMock))).toEqual(
      expectedState,
    );
  });
});
