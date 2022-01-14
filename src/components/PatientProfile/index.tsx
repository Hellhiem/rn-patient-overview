import React from 'react';

import { KeyData } from 'components/KeyData';
import { i18n } from 'config/translations';
import { formatToReadableDate } from 'lib/helpers';
import { shadowBoxStyle } from 'lib/styles';
import styled from 'styled-components/native';
import { GenderType } from 'types';

import { AccentContainer } from '../Containers';
import { PatientImage } from '../PatientImage';

const Container = styled(AccentContainer)`
  padding: 16px;
  flex-direction: row;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  margin-horizontal: 16px;
`;

const PatientImageContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: -35px;
  align-items: center;
`;

const PatientDetailsContainer = styled.View`
  margin-top: 24px;
`;

type PropsType = {
  name: string;
  birthDate: string;
  isForwarded: boolean;
  lastVisitDate: string;
  gender: GenderType;
  patientImageUrl?: string;
};

const commonTranslationPath = 'Common:';

export const PatientProfile = ({
  name,
  birthDate,
  isForwarded,
  lastVisitDate,
  patientImageUrl,
  gender,
}: PropsType) => {
  return (
    <Container style={shadowBoxStyle}>
      <PatientImageContainer>
        <PatientImage patientImageUrl={patientImageUrl} />
      </PatientImageContainer>
      <PatientDetailsContainer>
        <KeyData dataKey={i18n.t(`${commonTranslationPath}name`)} value={name} />
        <KeyData
          dataKey={i18n.t(`${commonTranslationPath}dateOfBirth`)}
          value={formatToReadableDate(birthDate)}
        />
        <KeyData dataKey={i18n.t(`${commonTranslationPath}gender`)} value={gender} />
        <KeyData
          dataKey={i18n.t(`${commonTranslationPath}forwarded`)}
          value={isForwarded ? i18n.t(`${commonTranslationPath}yes`) : i18n.t(`${commonTranslationPath}no`)}
        />
        <KeyData
          dataKey={i18n.t(`${commonTranslationPath}lastVisitDate`)}
          value={formatToReadableDate(lastVisitDate)}
        />
      </PatientDetailsContainer>
    </Container>
  );
};
