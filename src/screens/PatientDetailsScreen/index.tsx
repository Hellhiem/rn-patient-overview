import React, { useEffect } from 'react';
import { Text } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { BaseContainer, LoadingIndicator, PatientDetailsHeader, PatientProfile } from 'components';
import { usePatientsApi } from 'lib/hooks';
import { useSelector } from 'react-redux';
import {
  getSelectedPatientDetailsSelector,
  getSelectedPatientsDetailsLoadingSelector,
} from 'store/selectors/patients';
import styled from 'styled-components/native';
import { RootStackParams, Route } from 'types';

import { EventList } from './components';

const Container = styled(BaseContainer)`
  padding-vertical: 16px;
  height: 100%;
`;

const PatientProfileContainer = styled.View`
  margin-top: 32px;
`;

export const PatientDetailsScreen = () => {
  const { fetchPatientDetails } = usePatientsApi();
  const route: RouteProp<RootStackParams, Route.PatientDetailsScreen> = useRoute();

  const selectedPatientDetails = useSelector(getSelectedPatientDetailsSelector);
  const isPatientDetailsLoading = useSelector(getSelectedPatientsDetailsLoadingSelector);

  useEffect(() => {
    fetchPatientDetails(route.params.patientId);
  }, []);

  return selectedPatientDetails && !isPatientDetailsLoading ? (
    <Container>
      <PatientProfileContainer>
        <PatientProfile
          name={selectedPatientDetails.name}
          birthDate={selectedPatientDetails.birthDate}
          isForwarded={selectedPatientDetails.isForwarded}
          lastVisitDate={selectedPatientDetails.updatedAt}
          gender={selectedPatientDetails.gender}
        />
      </PatientProfileContainer>
      <EventList events={selectedPatientDetails.events} />
    </Container>
  ) : (
    <LoadingIndicator />
  );
};

export const patientDetailsScreenOptions = () => {
  const header = () => <PatientDetailsHeader />;

  return {
    header,
  };
};
