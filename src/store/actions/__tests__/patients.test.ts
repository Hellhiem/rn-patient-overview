import { errorInterfaceMock, patientsListMock, patientsDetailsMock } from 'mocks';
import {
  FetchPatientDetailsActionType,
  FetchPatientDetailsErrorActionType,
  FetchPatientDetailsSuccessActionType,
  FetchPatientListActionType,
  FetchPatientListErrorActionType,
  FetchPatientListSuccessActionType,
  ForwardPatientActionType,
  ForwardPatientErrorActionType,
  ForwardPatientSuccessActionType,
} from 'types';

import { fetchPatientListErrorAction } from '..';
import {
  fetchPatientDetailsAction,
  fetchPatientDetailsErrorAction,
  fetchPatientDetailsSuccessAction,
  fetchPatientListAction,
  fetchPatientListSuccessAction,
  forwardPatientAction,
  forwardPatientErrorAction,
  forwardPatientSuccessAction,
  PatientsActionConstantsType,
} from '../patients';

describe('Actions: patients', () => {
  describe('Fetch Patient List', () => {
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

  describe('Fetch Patient Details', () => {
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

      expect(fetchPatientDetailsErrorAction(errorInterfaceMock)).toEqual(
        fetchPatientDetailsErrorActionData,
      );
    });
  });

  describe('Forward Patient', () => {
    it('should return proper data when forwardPatientAction is called', () => {
      const forwardPatientActionData: ForwardPatientActionType = {
        type: PatientsActionConstantsType.FORWARD_PATIENT,
        payload: {
          patientId: '1',
          successCallback: undefined,
        },
      };

      expect(forwardPatientAction('1')).toEqual(forwardPatientActionData);
    });

    it('should return proper data when forwardPatientSuccessAction is called', () => {
      const forwardPatientSuccessActionData: ForwardPatientSuccessActionType = {
        type: PatientsActionConstantsType.FORWARD_PATIENT_SUCCESS,
        payload: undefined,
      };

      expect(forwardPatientSuccessAction()).toEqual(forwardPatientSuccessActionData);
    });

    it('should return proper data when forwardPatientErrorAction is called', () => {
      const forwardPatientErrorActionData: ForwardPatientErrorActionType = {
        type: PatientsActionConstantsType.FORWARD_PATIENT_ERROR,
        payload: {
          error: errorInterfaceMock,
        },
      };

      expect(forwardPatientErrorAction(errorInterfaceMock)).toEqual(forwardPatientErrorActionData);
    });
  });
});
