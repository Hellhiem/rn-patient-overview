import { PatientListItemType, PatientType } from 'types';

export interface PatientsState {
  loading: {
    fetchPatientsListLoading: boolean;
    fetchSelectedPatientDetailsLoading: boolean;
    forwardPatientLoading: boolean;
  };
  selectedPatientDetails: PatientType | null;
  patientsList: PatientListItemType[] | null;
  error: Error | null;
}
