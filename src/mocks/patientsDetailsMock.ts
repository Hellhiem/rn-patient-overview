import { GenderType, PatientType } from 'types';

export const patientsDetailsMock: PatientType = {
  id: 'ds001',
  name: 'Daniel Stevens',
  gender: GenderType.M,
  birthDate: '1946-02-03',
  isForwarded: false,
  events: [
    {
      text: 'New image successfully uploaded',
      createdAt: '2021-05-14T12:35:57.678Z',
    },
  ],
  createdAt: '2021-05-14T11:38:57.678Z',
  updatedAt: '2021-05-14T12:38:57.678Z',
};
