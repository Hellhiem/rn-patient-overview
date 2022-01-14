import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { BaseContainer, Button, LoadingIndicator, PatientDetailsHeader, PatientProfile } from 'components';
import { i18n } from 'config/translations';
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

const ButtonContainer = styled.View`
  padding: 16px;
  margin-bottom: 16px;
`;

const baseTranslationPath = 'Screens:PatientDetailsScreen:';

export const PatientDetailsScreen = () => {
  const { fetchPatientDetails } = usePatientsApi();
  const route: RouteProp<RootStackParams, Route.PatientDetailsScreen> = useRoute();

  const selectedPatientDetails = useSelector(getSelectedPatientDetailsSelector);
  const isPatientDetailsLoading = useSelector(getSelectedPatientsDetailsLoadingSelector);

  useEffect(() => {
    fetchPatientDetails(route.params.patientId);
  }, []);

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
        <EventList events={selectedPatientDetails.events} />
      </View>
      <ButtonContainer>
        <Button label={i18n.t(`${baseTranslationPath}forwardPatient`)} onPress={() => null} />
      </ButtonContainer>
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
