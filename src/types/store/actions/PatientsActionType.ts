import {
  fetchPatientListAction,
  fetchPatientListErrorAction,
  fetchPatientListSuccessAction,
} from 'store/actions';

export type FetchPatientListActionType = ReturnType<typeof fetchPatientListAction>;

export type FetchPatientListSuccessActionType = ReturnType<typeof fetchPatientListSuccessAction>;

export type FetchPatientListErrorActionType = ReturnType<typeof fetchPatientListErrorAction>;
