import { useDispatch } from 'react-redux';
import { fetchPatientDetailsAction, fetchPatientListAction, forwardPatientAction } from 'store/actions';

export const usePatientsApi = () => {
  const dispatch = useDispatch();

  const fetchPatientsList = () => dispatch(fetchPatientListAction());

  const fetchPatientDetails = (patientId: string) => dispatch(fetchPatientDetailsAction(patientId));

  const forwardPatient = (patientId: string, onSuccessCallback?: () => void) =>
    dispatch(forwardPatientAction(patientId, onSuccessCallback));

  return {
    fetchPatientsList,
    fetchPatientDetails,
    forwardPatient,
  };
};
