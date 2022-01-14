import React, { memo } from 'react';
import { View } from 'react-native';

import { Body } from 'components';
import { i18n } from 'config/translations';
import { formatToReadableDate } from 'lib/helpers';
import styled from 'styled-components/native';

import { KeyData } from '../KeyData';

const EventDetailsContainer = styled.View`
  margin-left: 16px;
`;

const EventIndicator = styled(Body)`
  font-weight: bold;
`;

type PropsType = {
  eventDescription: string;
  eventDate: string;
};

const baseTranslationPath = 'Components:EventTile:';

export const EventTile = memo(({ eventDescription, eventDate }: PropsType) => {
  return (
    <View>
      <EventDetailsContainer>
        <KeyData dataKey={i18n.t(`${baseTranslationPath}event`)} value={eventDescription} />
        <KeyData
          dataKey={i18n.t(`${baseTranslationPath}eventDate`)}
          value={formatToReadableDate(eventDate)}
        />
      </EventDetailsContainer>
      <EventIndicator>_</EventIndicator>
    </View>
  );
});
