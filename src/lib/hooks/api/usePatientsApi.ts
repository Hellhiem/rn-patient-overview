import { useDispatch } from 'react-redux';
import { fetchPatientDetailsAction, fetchPatientListAction } from 'store/actions';

export const usePatientsApi = () => {
  const dispatch = useDispatch();

  const fetchPatientsList = () => dispatch(fetchPatientListAction());

  const fetchPatientDetails = (patientId: string) => dispatch(fetchPatientDetailsAction(patientId));

  return {
    fetchPatientsList,
    fetchPatientDetails,
  };
};
