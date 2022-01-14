import { PatientListItemType } from 'types';

export interface PatientsState {
  loading: {
    fetchPatientsListLoading: boolean;
  };
  patientsList: PatientListItemType[] | null;
  error: Error | null;
}
