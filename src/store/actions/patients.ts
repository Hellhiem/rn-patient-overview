import { createAction } from '@reduxjs/toolkit';
import { PatientListItemType, PatientType } from 'types';

export enum PatientsActionConstantsType {
  FETCH_PATIENT_LIST = 'FETCH_PATIENT_LIST',
  FETCH_PATIENT_LIST_SUCCESS = 'FETCH_PATIENT_LIST_SUCCESS',
  FETCH_PATIENT_LIST_ERROR = 'FETCH_PATIENT_LIST_ERROR',

  FETCH_PATIENT_DETAILS = 'FETCH_PATIENT_DETAILS',
  FETCH_PATIENT_DETAILS_SUCCESS = 'FETCH_PATIENT_DETAILS_SUCCESS',
  FETCH_PATIENT_DETAILS_ERROR = 'FETCH_PATIENT_DETAILS_ERROR',
}

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
