import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { shadowBoxStyle } from 'lib/styles';
import styled from 'styled-components/native';

import { AccentContainer } from '../Containers';
import { LoadingIndicator } from '../LoadingIndicator';
import { Body } from '../Typography';

const Container = styled(AccentContainer)`
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const Label = styled(Body)`
  font-weight: bold;
`;

const Loading = styled(LoadingIndicator)`
  background-color: ${({ theme }) => theme.colors.accentBackground};
  padding: 0px;
`;

interface PropsType extends TouchableOpacityProps {
  label: string;
  isLoading?: boolean;
}

export const Button = ({ label, onPress, isLoading }: PropsType) => {
  return (
    <Container as={TouchableOpacity} onPress={onPress} style={shadowBoxStyle}>
      {!isLoading ? <Label>{label}</Label> : <Loading />}
    </Container>
  );
};
