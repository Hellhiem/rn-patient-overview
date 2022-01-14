import { combineReducers } from 'redux';

import { patientsReducer } from './reducers';

const rootReducer = combineReducers({
  patients: patientsReducer,
});

export default rootReducer;
