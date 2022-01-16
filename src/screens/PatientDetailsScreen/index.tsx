import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { BaseContainer, Button, LoadingIndicator, PatientDetailsHeader, PatientProfile } from 'components';
import { i18n } from 'config/translations';
import { usePatientsApi } from 'lib/hooks';
import { useSelector } from 'react-redux';
import {
  getForwardPatientLoadingSelector,
  getSelectedPatientDetailsSelector,
  getSelectedPatientsDetailsLoadingSelector,
} from 'store/selectors/patients';
import styled from 'styled-components/native';
import { RootStackParams, Route } from 'types';

import { EventList } from './components';

const Container = styled(BaseContainer)`
  padding-vertical: 16px;
`;

const PatientProfileContainer = styled.View`
  margin-top: 32px;
`;

const ButtonContainer = styled.View`
  padding: 16px;
  margin-bottom: 16px;
`;

const baseTranslationPath = 'Screens:PatientDetailsScreen:';

export const PatientDetailsScreen = () => {
  const { fetchPatientDetails, forwardPatient } = usePatientsApi();
  const route: RouteProp<RootStackParams, Route.PatientDetailsScreen> = useRoute();

  const selectedPatientDetails = useSelector(getSelectedPatientDetailsSelector);
  const isPatientDetailsLoading = useSelector(getSelectedPatientsDetailsLoadingSelector);
  const isForwardPatientLoading = useSelector(getForwardPatientLoadingSelector);

  const hasEvents = selectedPatientDetails && selectedPatientDetails.events.length > 0;

  useEffect(() => {
    fetchPatientDetails(route.params.patientId);
  }, []);

  const onForwardPatient = () => {
    forwardPatient(route.params.patientId, () => fetchPatientDetails(route.params.patientId));
  };

  return selectedPatientDetails && !isPatientDetailsLoading ? (
    <Container as={ScrollView}>
      <View>
        <PatientProfileContainer>
          <PatientProfile
            name={selectedPatientDetails.name}
            birthDate={selectedPatientDetails.birthDate}
            isForwarded={selectedPatientDetails.isForwarded}
            lastVisitDate={selectedPatientDetails.updatedAt}
            gender={selectedPatientDetails.gender}
          />
        </PatientProfileContainer>
        {hasEvents && <EventList events={selectedPatientDetails.events} />}
      </View>
      {!selectedPatientDetails.isForwarded && (
        <ButtonContainer>
          <Button
            label={i18n.t(`${baseTranslationPath}forwardPatient`)}
            onPress={onForwardPatient}
            isLoading={isForwardPatientLoading}
          />
        </ButtonContainer>
      )}
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
