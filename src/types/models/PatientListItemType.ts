import { GenderType } from './GenderType';

export type PatientListItemType = {
  id: string;
  name: string;
  gender: GenderType;
  birthDate: string;
  isForwarded: boolean;
  createdAt: string;
  updatedAt: string;
};
