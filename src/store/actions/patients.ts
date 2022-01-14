import { createAction } from '@reduxjs/toolkit';
import { PatientListItemType } from 'types';

export enum PatientsActionConstantsType {
  FETCH_PATIENT_LIST = 'FETCH_PATIENT_LIST',
  FETCH_PATIENT_LIST_SUCCESS = 'FETCH_PATIENT_LIST_SUCCESS',
  FETCH_PATIENT_LIST_ERROR = 'FETCH_PATIENT_LIST_ERROR',
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
