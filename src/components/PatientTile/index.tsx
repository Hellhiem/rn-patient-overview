import React, { memo } from 'react';

import { patientPlaceholder } from 'assets/images';
import { i18n } from 'config/translations';
import { formatPatientDateOfBirth } from 'lib/helpers';
import { shadowBoxStyle } from 'lib/styles';
import styled from 'styled-components/native';

import { AccentContainer } from '../Containers';
import { KeyData } from '../KeyData';
import { SmallBody } from '../Typography';

const Container = styled(AccentContainer)`
  padding: 16px;
  flex-direction: row;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  margin-horizontal: 16px;
`;

const PatientImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

const PatientName = styled(SmallBody)`
  font-weight: bold;
  text-align: left;
`;

const RightInfoContainer = styled.View`
  margin-left: 16px;
  justify-content: center;
  flex: 1;
`;
const DetailsContainer = styled.View`
  flex-direction: column;
`;

type PropsType = {
  patientImageUrl?: string;
  patientName: string;
  dateOfBirth: string;
  isPatientForwarded?: boolean;
};

const baseTranslationPath = 'Components:PatientTile:';
const commonTranslationPath = 'Common:';

export const PatientTile = memo(
  ({ patientImageUrl, patientName, dateOfBirth, isPatientForwarded }: PropsType) => {
    return (
      <Container style={shadowBoxStyle}>
        <PatientImage source={patientImageUrl ? { uri: patientImageUrl } : patientPlaceholder} />
        <RightInfoContainer>
          <PatientName>{patientName}</PatientName>
          <DetailsContainer>
            <KeyData
              dataKey={i18n.t(`${baseTranslationPath}dateOfBirth`)}
              value={formatPatientDateOfBirth(dateOfBirth)}
            />
            <KeyData
              dataKey={i18n.t(`${baseTranslationPath}forwarded`)}
              value={
                isPatientForwarded
                  ? i18n.t(`${commonTranslationPath}yes`)
                  : i18n.t(`${commonTranslationPath}no`)
              }
            />
          </DetailsContainer>
        </RightInfoContainer>
      </Container>
    );
  },
);
