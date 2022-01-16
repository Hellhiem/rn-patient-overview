import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import styled from 'styled-components/native';

import { BaseContainer } from '../Containers';

const Container = styled(BaseContainer)`
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.ActivityIndicator.attrs(({ theme }) => {
  return {
    color: theme.colors.inverted,
  };
})``;

type PropsType = {
  style?: StyleProp<ViewStyle>;
};

export const LoadingIndicator = ({ style }: PropsType) => {
  return (
    <Container style={style}>
      <Loading />
    </Container>
  );
};
