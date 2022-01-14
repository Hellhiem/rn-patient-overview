import React, { memo, useEffect } from 'react';
import { ListRenderItem } from 'react-native';

import { BaseContainer, BasicHeader, LoadingIndicator, PatientTile } from 'components';
import { i18n } from 'config/translations';
import { usePatientsApi } from 'lib/hooks';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { getPatientsListLoadingSelector, getPatientsListSelector } from 'store/selectors/patients';
import styled from 'styled-components/native';
import { PatientListItemType } from 'types';

const baseTranslationPath = 'Screens:HomeScreen:';

const Container = styled(BaseContainer)`
  padding-vertical: 16px;
  height: 100%;
`;

const TouchablePatientTile = styled.TouchableOpacity`
  margin-bottom: 16px;
`;

export const HomeScreen = memo(() => {
  const { fetchPatientsList } = usePatientsApi();

  const patientsList = useSelector(getPatientsListSelector);
  const isPatientListLoading = useSelector(getPatientsListLoadingSelector);

  const renderItem: ListRenderItem<PatientListItemType> = ({ item }) => {
    return (
      <TouchablePatientTile>
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
  const header = () => <BasicHeader title={i18n.t(`${baseTranslationPath}headerTitle`)} />;

  return {
    header,
  };
};
