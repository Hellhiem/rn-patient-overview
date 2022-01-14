import React from 'react';

import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import { Button } from '../';
import { BaseContainer } from '../../Containers';

const Container = styled(BaseContainer)`
  height: 300px;
  justify-content: center;
  padding: 16px;
`;

storiesOf('Button', module).add('withDefaultLook', () => (
  <Container>
    <Button label="Some Button" onPress={() => null} />
  </Container>
));
