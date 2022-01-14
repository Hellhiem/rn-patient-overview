import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { shadowBoxStyle } from 'lib/styles';
import styled from 'styled-components/native';

import { AccentContainer } from '../Containers';
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

interface PropsType extends TouchableOpacityProps {
  label: string;
}

export const Button = ({ label, onPress }: PropsType) => {
  return (
    <Container as={TouchableOpacity} onPress={onPress} style={shadowBoxStyle}>
      <Label>{label}</Label>
    </Container>
  );
};
