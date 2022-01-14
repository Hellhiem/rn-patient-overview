import React from 'react';

import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import { PatientTile } from '../';
import { BaseContainer } from '../../Containers';

const Container = styled(BaseContainer)`
  height: 300px;
`;

storiesOf('PatientTile', module).add('withDefaultLook', () => (
  <Container>
    <PatientTile patientName="Joann Ferguson" dateOfBirth="2021-05-14T10:38:57.678Z" />
  </Container>
));
