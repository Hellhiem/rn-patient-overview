import { errorInterfaceMock } from 'mocks';
import { initialState as patientsInitialState } from 'store/reducers/patients';
import { PatientsReducerLoadingType } from 'types';

import { apiCallErrorState, startApiCallState } from '..';

describe('reducerLoadingState', () => {
  it('should return proper data when patientsInitialState is called', () => {
    const expectedStateResult = {
      ...patientsInitialState,
      loading: {
        ...patientsInitialState.loading,
        [PatientsReducerLoadingType.fetchPatientsListLoading]: true,
      },
      error: null,
    };

    expect(
      startApiCallState(patientsInitialState, PatientsReducerLoadingType.fetchPatientsListLoading),
    ).toEqual(expectedStateResult);
  });

  it('should return proper data when apiCallErrorState is called', () => {
    const expectedStateResult = {
      ...patientsInitialState,
      loading: {
        ...patientsInitialState.loading,
        [PatientsReducerLoadingType.fetchPatientsListLoading]: false,
      },
      error: errorInterfaceMock,
    };

    expect(
      apiCallErrorState(
        patientsInitialState,
        PatientsReducerLoadingType.fetchPatientsListLoading,
        errorInterfaceMock,
      ),
    ).toEqual(expectedStateResult);
  });
});
