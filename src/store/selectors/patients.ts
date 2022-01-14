import { AppState } from 'types';

export const getPatientsListSelector = (state: AppState) => {
  return state.patients.patientsList;
};

export const getPatientsListLoadingSelector = (state: AppState) => {
  return state.patients.loading.fetchPatientsListLoading;
};
