import { genericAxiosService } from 'services/genericAxiosService';
import { PatientListItemType, PatientType } from 'types';

import {
  fetchPatientsListEndpoint,
  fetchSelectedPatientDetailsEndpoint,
  forwardPatientEndpoint,
} from './endpoints';

export const fetchPatientsListService = () =>
  genericAxiosService<PatientListItemType[]>('GET', fetchPatientsListEndpoint);

export const fetchPatientDetailsService = (patientId: string) =>
  genericAxiosService<PatientType>('GET', fetchSelectedPatientDetailsEndpoint(patientId));

export const forwardPatientService = (patientId: string) =>
  genericAxiosService('POST', forwardPatientEndpoint(patientId));
