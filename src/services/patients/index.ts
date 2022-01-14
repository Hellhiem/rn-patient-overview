import { genericAxiosService } from 'services/genericAxiosService';
import { PatientListItemType, PatientType } from 'types';

import { fetchPatientsListEndpoint, fetchSelectedPatientDetailsEndpoint } from './endpoints';

export const fetchPatientsListService = () =>
  genericAxiosService<PatientListItemType[]>('GET', fetchPatientsListEndpoint);

export const fetchPatientDetailsService = (patientId: string) =>
  genericAxiosService<PatientType>('GET', fetchSelectedPatientDetailsEndpoint(patientId));
