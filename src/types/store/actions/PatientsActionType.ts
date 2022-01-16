import {
  fetchPatientDetailsAction,
  fetchPatientDetailsErrorAction,
  fetchPatientDetailsSuccessAction,
  fetchPatientListAction,
  fetchPatientListErrorAction,
  fetchPatientListSuccessAction,
  forwardPatientAction,
  forwardPatientErrorAction,
  forwardPatientSuccessAction,
} from 'store/actions';

// Patient List
export type FetchPatientListActionType = ReturnType<typeof fetchPatientListAction>;

export type FetchPatientListSuccessActionType = ReturnType<typeof fetchPatientListSuccessAction>;

export type FetchPatientListErrorActionType = ReturnType<typeof fetchPatientListErrorAction>;

// Patient Details
export type FetchPatientDetailsActionType = ReturnType<typeof fetchPatientDetailsAction>;

export type FetchPatientDetailsSuccessActionType = ReturnType<typeof fetchPatientDetailsSuccessAction>;

export type FetchPatientDetailsErrorActionType = ReturnType<typeof fetchPatientDetailsErrorAction>;

//Forward Patient
export type ForwardPatientActionType = ReturnType<typeof forwardPatientAction>;

export type ForwardPatientSuccessActionType = ReturnType<typeof forwardPatientSuccessAction>;

export type ForwardPatientErrorActionType = ReturnType<typeof forwardPatientErrorAction>;
