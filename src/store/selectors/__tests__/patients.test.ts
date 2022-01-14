import { initialState as patientsInitialState } from 'store/reducers/patients';
import { AppState } from 'types';

import { getPatientsListLoadingSelector, getPatientsListSelector } from '../patients';

const state = {
  patients: patientsInitialState,
} as AppState;

describe('Selectors: patients', () => {
  it('should return proper data for getPatientsListSelector', () => {
    const result = getPatientsListSelector(state);

    expect(result).toEqual(null);
  });

  it('should return proper data for getPatientsListLoadingSelector', () => {
    const result = getPatientsListLoadingSelector(state);

    expect(result).toEqual(false);
  });
});
