import { AppState } from 'types';

export const getPatientsListSelector = (state: AppState) => {
  return state.patients.patientsList;
};

export const getPatientsListLoadingSelector = (state: AppState) => {
  return state.patients.loading.fetchPatientsListLoading;
};

export const getSelectedPatientDetailsSelector = (state: AppState) => {
  return state.patients.selectedPatientDetails;
};

export const getSelectedPatientsDetailsLoadingSelector = (state: AppState) => {
  return state.patients.loading.fetchSelectedPatientDetailsLoading;
};

export const getForwardPatientLoadingSelector = (state: AppState) => {
  return state.patients.loading.forwardPatientLoading;
};
