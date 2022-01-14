import { format } from 'date-fns';

export const formatPatientDateOfBirth = (date: string) => {
  return format(new Date(date), 'dd.MM.yyyy');
};
