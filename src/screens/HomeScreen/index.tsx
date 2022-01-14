import React, { memo, useEffect } from 'react';
import { ListRenderItem } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BaseContainer, StoryControlledHeader, LoadingIndicator, PatientTile } from 'components';
import { i18n } from 'config/translations';
import { usePatientsApi } from 'lib/hooks';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getPatientsListLoadingSelector, getPatientsListSelector } from 'store/selectors/patients';
import styled from 'styled-components/native';
import { PatientListItemType, Route } from 'types';

const baseTranslationPath = 'Screens:HomeScreen:';

const Container = styled(BaseContainer)`
  padding-vertical: 16px;
  height: 100%;
`;

const TouchablePatientTile = styled.TouchableOpacity`
  margin-bottom: 16px;
`;

export const HomeScreen = memo(() => {
  const { navigate } = useNavigation();
  const { fetchPatientsList } = usePatientsApi();

  const patientsList = useSelector(getPatientsListSelector);
  const isPatientListLoading = useSelector(getPatientsListLoadingSelector);

  const navigateToPatientDetailsScreen = (patientId: string) => {
    navigate(Route.PatientDetailsScreen, { patientId });
  };

  const renderItem: ListRenderItem<PatientListItemType> = ({ item }) => {
    return (
      <TouchablePatientTile onPress={() => navigateToPatientDetailsScreen(item.id)}>
        <PatientTile
          patientName={item.name}
          dateOfBirth={item.birthDate}
          isPatientForwarded={item.isForwarded}
        />
      </TouchablePatientTile>
    );
  };

  useEffect(() => {
    fetchPatientsList();
  }, []);

  return patientsList && !isPatientListLoading ? (
    <Container>
      <FlatList data={patientsList} showsVerticalScrollIndicator={false} renderItem={renderItem} />
    </Container>
  ) : (
    <LoadingIndicator />
  );
});

export const homeScreenOptions = () => {
  const header = () => <StoryControlledHeader title={i18n.t(`${baseTranslationPath}headerTitle`)} />;

  return {
    header,
  };
};
