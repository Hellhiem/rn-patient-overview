import { createReducer } from '@reduxjs/toolkit';
import { apiCallErrorState, startApiCallState } from 'lib/dataParsers';
import { PatientsState, PatientsReducerLoadingType } from 'types';

import {
  fetchPatientListAction,
  fetchPatientListSuccessAction,
  fetchPatientListErrorAction,
} from '../actions';

export const initialState: PatientsState = {
  loading: {
    fetchPatientsListLoading: false,
  },
  patientsList: null,
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
});
