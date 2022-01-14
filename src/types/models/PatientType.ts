import { GenderType } from '.';
import { EventType } from './EventType';

export type PatientType = {
  id: string;
  name: string;
  gender: GenderType;
  birthDate: string;
  isForwarded: boolean;
  events: EventType[];
  createdAt: string;
  updatedAt: string;
};
