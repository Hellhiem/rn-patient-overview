import { errorInterfaceMock, patientsListMock, patientsDetailsMock } from 'mocks';
import {
  FetchPatientDetailsActionType,
  FetchPatientDetailsErrorActionType,
  FetchPatientDetailsSuccessActionType,
  FetchPatientListActionType,
  FetchPatientListErrorActionType,
  FetchPatientListSuccessActionType,
} from 'types';

import { fetchPatientListErrorAction } from '..';
import {
  fetchPatientDetailsAction,
  fetchPatientDetailsErrorAction,
  fetchPatientDetailsSuccessAction,
  fetchPatientListAction,
  fetchPatientListSuccessAction,
  PatientsActionConstantsType,
} from '../patients';

describe('Actions: patients', () => {
  it('should return proper data when fetchPatientListAction is called', () => {
    const fetchPatientListActionData: FetchPatientListActionType = {
      type: PatientsActionConstantsType.FETCH_PATIENT_LIST,
      payload: undefined,
    };

    expect(fetchPatientListAction()).toEqual(fetchPatientListActionData);
  });

  it('should return proper data when fetchPatientListSuccessAction is called', () => {
    const fetchPatientListSuccessActionData: FetchPatientListSuccessActionType = {
      type: PatientsActionConstantsType.FETCH_PATIENT_LIST_SUCCESS,
      payload: {
        patientsList: patientsListMock,
      },
    };

    expect(fetchPatientListSuccessAction(patientsListMock)).toEqual(fetchPatientListSuccessActionData);
  });

  it('should return proper data when fetchPatientListErrorAction is called', () => {
    const fetchPatientListErrorActionData: FetchPatientListErrorActionType = {
      type: PatientsActionConstantsType.FETCH_PATIENT_LIST_ERROR,
      payload: {
        error: errorInterfaceMock,
      },
    };

    expect(fetchPatientListErrorAction(errorInterfaceMock)).toEqual(fetchPatientListErrorActionData);
  });

  it('should return proper data when fetchPatientDetailsAction is called', () => {
    const fetchPatientDetailsActionData: FetchPatientDetailsActionType = {
      type: PatientsActionConstantsType.FETCH_PATIENT_DETAILS,
      payload: {
        patientId: '1',
      },
    };

    expect(fetchPatientDetailsAction('1')).toEqual(fetchPatientDetailsActionData);
  });

  it('should return proper data when fetchPatientDetailsSuccessAction is called', () => {
    const fetchPatientDetailsSuccessActionData: FetchPatientDetailsSuccessActionType = {
      type: PatientsActionConstantsType.FETCH_PATIENT_DETAILS_SUCCESS,
      payload: {
        patientDetails: patientsDetailsMock,
      },
    };

    expect(fetchPatientDetailsSuccessAction(patientsDetailsMock)).toEqual(
      fetchPatientDetailsSuccessActionData,
    );
  });

  it('should return proper data when fetchPatientDetailsErrorAction is called', () => {
    const fetchPatientDetailsErrorActionData: FetchPatientDetailsErrorActionType = {
      type: PatientsActionConstantsType.FETCH_PATIENT_DETAILS_ERROR,
      payload: {
        error: errorInterfaceMock,
      },
    };

    expect(fetchPatientDetailsErrorAction(errorInterfaceMock)).toEqual(fetchPatientDetailsErrorActionData);
  });
});
