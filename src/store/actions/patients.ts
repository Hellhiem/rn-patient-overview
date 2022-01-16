import { createAction } from '@reduxjs/toolkit';
import { PatientListItemType, PatientType } from 'types';

export enum PatientsActionConstantsType {
  FETCH_PATIENT_LIST = 'FETCH_PATIENT_LIST',
  FETCH_PATIENT_LIST_SUCCESS = 'FETCH_PATIENT_LIST_SUCCESS',
  FETCH_PATIENT_LIST_ERROR = 'FETCH_PATIENT_LIST_ERROR',

  FETCH_PATIENT_DETAILS = 'FETCH_PATIENT_DETAILS',
  FETCH_PATIENT_DETAILS_SUCCESS = 'FETCH_PATIENT_DETAILS_SUCCESS',
  FETCH_PATIENT_DETAILS_ERROR = 'FETCH_PATIENT_DETAILS_ERROR',

  FORWARD_PATIENT = 'FORWARD_PATIENT',
  FORWARD_PATIENT_SUCCESS = 'FORWARD_PATIENT_SUCCESS',
  FORWARD_PATIENT_ERROR = 'FORWARD_PATIENT_ERROR',
}

// Patient List
export const fetchPatientListAction = createAction(PatientsActionConstantsType.FETCH_PATIENT_LIST);

export const fetchPatientListSuccessAction = createAction(
  PatientsActionConstantsType.FETCH_PATIENT_LIST_SUCCESS,
  (patientsList: PatientListItemType[]) => ({
    payload: { patientsList },
  }),
);

export const fetchPatientListErrorAction = createAction(
  PatientsActionConstantsType.FETCH_PATIENT_LIST_ERROR,
  (error: Error) => ({
    payload: {
      error: error,
    },
  }),
);

// Patient Details
export const fetchPatientDetailsAction = createAction(
  PatientsActionConstantsType.FETCH_PATIENT_DETAILS,
  (patientId: string) => ({
    payload: { patientId },
  }),
);

export const fetchPatientDetailsSuccessAction = createAction(
  PatientsActionConstantsType.FETCH_PATIENT_DETAILS_SUCCESS,
  (patientDetails: PatientType) => ({
    payload: { patientDetails },
  }),
);

export const fetchPatientDetailsErrorAction = createAction(
  PatientsActionConstantsType.FETCH_PATIENT_DETAILS_ERROR,
  (error: Error) => ({
    payload: {
      error: error,
    },
  }),
);

//Forward Patient
export const forwardPatientAction = createAction(
  PatientsActionConstantsType.FORWARD_PATIENT,
  (patientId: string, successCallback?: () => void) => ({
    payload: {
      patientId,
      successCallback,
    },
  }),
);

export const forwardPatientSuccessAction = createAction(
  PatientsActionConstantsType.FORWARD_PATIENT_SUCCESS,
);

export const forwardPatientErrorAction = createAction(
  PatientsActionConstantsType.FORWARD_PATIENT_ERROR,
  (error: Error) => ({
    payload: {
      error: error,
    },
  }),
);
