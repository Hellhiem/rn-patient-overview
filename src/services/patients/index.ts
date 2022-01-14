import { genericAxiosService } from 'services/genericAxiosService';
import { PatientListItemType } from 'types';

import { fetchPatientsListEndpoint } from './endpoints';

export const fetchPatientsListService = () =>
  genericAxiosService<PatientListItemType[]>('GET', fetchPatientsListEndpoint);
