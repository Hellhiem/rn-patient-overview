import { GenderType, PatientListItemType } from 'types';

export const patientsListMock: PatientListItemType[] = [
  {
    id: 'ds001',
    name: 'Daniel Stevens',
    gender: GenderType.F,
    birthDate: '1946-02-03',
    isForwarded: false,
    createdAt: '2021-05-14T11:38:57.678Z',
    updatedAt: '2021-05-14T12:38:57.678Z',
  },
  {
    id: 'ss001',
    name: 'Sabine Schmitz',
    gender: GenderType.F,
    birthDate: '1968-01-13',
    isForwarded: true,
    createdAt: '2021-05-14T10:38:57.678Z',
    updatedAt: '2021-05-14T12:38:13.678Z',
  },
  {
    id: 'sa001',
    name: 'Sophia Anderson',
    gender: GenderType.F,
    birthDate: '1956-08-21',
    isForwarded: false,
    createdAt: '2021-05-13T14:38:57.678Z',
    updatedAt: '2021-05-14T12:18:57.678Z',
  },
  {
    id: 'rn001',
    name: 'Ronald Hendriks',
    gender: GenderType.F,
    birthDate: '1976-07-16',
    isForwarded: false,
    createdAt: '2021-05-13T12:38:57.678Z',
    updatedAt: '2021-05-14T09:12:57.678Z',
  },
  {
    id: 'aj001',
    name: 'Anne de Jong',
    gender: GenderType.F,
    birthDate: '1932-12-27',
    isForwarded: false,
    createdAt: '2021-05-12T12:38:57.678Z',
    updatedAt: '2021-05-13T11:38:57.678Z',
  },
];
