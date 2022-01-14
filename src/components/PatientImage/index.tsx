import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';

import { patientPlaceholder } from 'assets/images';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.background};
`;

type PropsType = {
  patientImageUrl?: string;
  style?: StyleProp<ImageStyle>;
};

export const PatientImage = ({ patientImageUrl, style }: PropsType) => {
  return (
    <StyledImage style={style} source={patientImageUrl ? { uri: patientImageUrl } : patientPlaceholder} />
  );
};
