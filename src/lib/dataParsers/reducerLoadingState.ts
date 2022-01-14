interface ReducerLoadingState {
  loading: { [key: string]: boolean | Object };
}

const startApiCallState = <T extends ReducerLoadingState>(state: T, loadingKey: string): T => {
  return {
    ...state,
    loading: {
      ...state.loading,
      [loadingKey]: true,
    },
    error: null,
  };
};

const apiCallErrorState = <T extends ReducerLoadingState>(
  state: T,
  loadingKey: string,
  error: string | Error,
): T => {
  return {
    ...state,
    loading: {
      ...state.loading,
      [loadingKey]: false,
    },
    error,
  };
};

export { apiCallErrorState, startApiCallState };
