import { API_URL } from 'config/api';

export const fetchPatientsListEndpoint = `${API_URL}v1/patients`;

export const fetchSelectedPatientDetailsEndpoint = (patientId: string) =>
  `${API_URL}v1/patients/${patientId}`;

export const forwardPatientEndpoint = (patientId: string) => `${API_URL}v1/patients/${patientId}/forward`;
