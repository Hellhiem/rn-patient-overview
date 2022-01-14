import { format } from 'date-fns';

export const formatToReadableDate = (date: string) => {
  return format(new Date(date), 'dd.MM.yyyy');
};
