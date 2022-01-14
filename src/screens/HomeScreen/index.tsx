import React, { memo, useEffect } from 'react';
import { Text } from 'react-native';

import { BaseContainer, BasicHeader } from 'components';
import { i18n } from 'config/translations';
import { usePatientsApi } from 'lib/hooks';
import styled from 'styled-components/native';

const baseTranslationPath = 'Screens:HomeScreen:';

const Container = styled(BaseContainer)`
  padding-vertical: 16px;
`;

export const HomeScreen = memo(() => {
  const { fetchPatientsList } = usePatientsApi();

  useEffect(() => {
    fetchPatientsList();
  }, []);

  return (
    <Container>
      <Text>Home Screen</Text>
    </Container>
  );
});

export const homeScreenOptions = () => {
  const header = () => <BasicHeader title={i18n.t(`${baseTranslationPath}headerTitle`)} />;

  return {
    header,
  };
};
