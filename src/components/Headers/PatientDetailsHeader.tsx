import React from 'react';

import { useSelector } from 'react-redux';
import { getSelectedPatientDetailsSelector } from 'store/selectors/patients';

import { BasicHeader } from './BasicHeader';

export const PatientDetailsHeader = () => {
  const selectedPatientDetails = useSelector(getSelectedPatientDetailsSelector);

  return <BasicHeader title={selectedPatientDetails?.name} />;
};
