import {
  fetchPatientDetailsAction,
  fetchPatientDetailsErrorAction,
  fetchPatientDetailsSuccessAction,
  fetchPatientListAction,
  fetchPatientListErrorAction,
  fetchPatientListSuccessAction,
} from 'store/actions';

export type FetchPatientListActionType = ReturnType<typeof fetchPatientListAction>;

export type FetchPatientListSuccessActionType = ReturnType<typeof fetchPatientListSuccessAction>;

export type FetchPatientListErrorActionType = ReturnType<typeof fetchPatientListErrorAction>;

export type FetchPatientDetailsActionType = ReturnType<typeof fetchPatientDetailsAction>;

export type FetchPatientDetailsSuccessActionType = ReturnType<typeof fetchPatientDetailsSuccessAction>;

export type FetchPatientDetailsErrorActionType = ReturnType<typeof fetchPatientDetailsErrorAction>;
