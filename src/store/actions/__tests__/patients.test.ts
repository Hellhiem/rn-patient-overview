import { errorInterfaceMock, patientsListMock } from 'mocks';
import {
  FetchPatientListActionType,
  FetchPatientListErrorActionType,
  FetchPatientListSuccessActionType,
} from 'types';

import { fetchPatientListErrorAction } from '..';
import {
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
});
