import { useDispatch } from 'react-redux';
import { fetchPatientListAction } from 'store/actions';

export const usePatientsApi = () => {
  const dispatch = useDispatch();

  const fetchPatientsList = () => dispatch(fetchPatientListAction());

  return {
    fetchPatientsList,
  };
};
