import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BackButtonDark, BackButtonLight } from 'assets/images';
import { isAndroid, isDarkMode } from 'lib/device';
import styled from 'styled-components/native';

import { Header2 } from '../Typography';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.inverted};
  padding-horizontal: 16px;
  margin-top: ${isAndroid() ? StatusBar.currentHeight : 0}px;
`;

const TouchableIcon = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

type PropsType = {
  title?: string;
};

export const BasicHeader = ({ title }: PropsType) => {
  const { goBack } = useNavigation();

  const getBackIcon = () => (isDarkMode() ? <BackButtonLight /> : <BackButtonDark />);

  return (
    <SafeAreaView>
      <Container>
        <TouchableIcon onPress={goBack}>{getBackIcon()}</TouchableIcon>
        {title && <Header2>{title}</Header2>}
      </Container>
    </SafeAreaView>
  );
};
