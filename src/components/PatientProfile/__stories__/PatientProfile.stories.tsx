import React from 'react';

import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import { GenderType } from 'types';

import { PatientProfile } from '../';
import { BaseContainer } from '../../Containers';

const Container = styled(BaseContainer)`
  height: 300px;
  justify-content: center;
`;

storiesOf('PatientProfile', module).add('withDefaultLook', () => (
  <Container>
    <PatientProfile
      name="Bruce Wayne"
      birthDate="2021-05-14T11:38:57.678Z"
      isForwarded={false}
      lastVisitDate="2021-05-14T11:38:57.678Z"
      gender={GenderType.M}
    />
  </Container>
));
