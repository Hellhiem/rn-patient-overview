import { createReducer } from '@reduxjs/toolkit';
import { apiCallErrorState, startApiCallState } from 'lib/dataParsers';
import { PatientsState, PatientsReducerLoadingType } from 'types';

import {
  fetchPatientListAction,
  fetchPatientListSuccessAction,
  fetchPatientListErrorAction,
  fetchPatientDetailsAction,
  fetchPatientDetailsSuccessAction,
  fetchPatientDetailsErrorAction,
} from '../actions';

export const initialState: PatientsState = {
  loading: {
    fetchPatientsListLoading: false,
    fetchSelectedPatientDetailsLoading: false,
  },
  patientsList: null,
  selectedPatientDetails: null,
  error: null,
};

export const patientsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPatientListAction, (state) =>
    startApiCallState(state, PatientsReducerLoadingType.fetchPatientsListLoading),
  );

  builder.addCase(fetchPatientListSuccessAction, (state, action) => {
    state.loading = {
      ...state.loading,
      fetchPatientsListLoading: false,
    };
    state.patientsList = action.payload.patientsList;
  });

  builder.addCase(fetchPatientListErrorAction, (state, action) =>
    apiCallErrorState(state, PatientsReducerLoadingType.fetchPatientsListLoading, action.payload.error),
  );

  builder.addCase(fetchPatientDetailsAction, (state) =>
    startApiCallState(state, PatientsReducerLoadingType.fetchSelectedPatientDetailsLoading),
  );

  builder.addCase(fetchPatientDetailsSuccessAction, (state, action) => {
    state.loading = {
      ...state.loading,
      fetchSelectedPatientDetailsLoading: false,
    };
    state.selectedPatientDetails = action.payload.patientDetails;
  });

  builder.addCase(fetchPatientDetailsErrorAction, (state, action) =>
    apiCallErrorState(
      state,
      PatientsReducerLoadingType.fetchSelectedPatientDetailsLoading,
      action.payload.error,
    ),
  );
});
