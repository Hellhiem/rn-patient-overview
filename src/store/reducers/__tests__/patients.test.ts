import { apiCallErrorState, startApiCallState } from 'lib/dataParsers';
import { errorInterfaceMock, patientsDetailsMock, patientsListMock } from 'mocks';
import {
  fetchPatientDetailsAction,
  fetchPatientDetailsErrorAction,
  fetchPatientDetailsSuccessAction,
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
      ...initialState,
      loading: {
        ...initialState.loading,
        fetchPatientsListLoading: false,
      },
      patientsList: patientsListMock,
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

  it('should return proper state for FETCH_PATIENT_DETAILS action', () => {
    const expectedState = startApiCallState(
      initialState,
      PatientsReducerLoadingType.fetchSelectedPatientDetailsLoading,
    );

    expect(patientsReducer(initialState, fetchPatientDetailsAction('1'))).toEqual(expectedState);
  });

  it('should return proper state for FETCH_PATIENT_DETAILS_SUCCESS action', () => {
    const expectedState: PatientsState = {
      ...initialState,
      loading: {
        ...initialState.loading,
        fetchSelectedPatientDetailsLoading: false,
      },
      selectedPatientDetails: patientsDetailsMock,
    };

    expect(patientsReducer(initialState, fetchPatientDetailsSuccessAction(patientsDetailsMock))).toEqual(
      expectedState,
    );
  });

  it('should return proper state for FETCH_PATIENT_DETAILS_ERROR action', () => {
    const expectedState = apiCallErrorState(
      initialState,
      PatientsReducerLoadingType.fetchSelectedPatientDetailsLoading,
      errorInterfaceMock,
    );

    expect(patientsReducer(initialState, fetchPatientDetailsErrorAction(errorInterfaceMock))).toEqual(
      expectedState,
    );
  });
});
