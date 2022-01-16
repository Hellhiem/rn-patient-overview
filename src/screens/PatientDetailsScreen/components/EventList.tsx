import React from 'react';
import { View } from 'react-native';

import { AccentContainer, Body, EventTile, Header2 } from 'components';
import { i18n } from 'config/translations';
import { shadowBoxStyle } from 'lib/styles';
import styled from 'styled-components/native';
import { EventType } from 'types';

const Container = styled(AccentContainer)`
  padding: 16px;
  flex-direction: column;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  margin-horizontal: 16px;
  margin-top: 16px;
`;

const Divider = styled(Body)`
  font-weight: bold;
`;

type PropsType = {
  events: EventType[];
};

const baseTranslationPath = 'Screens:PatientDetailsScreen:';

export const EventList = ({ events }: PropsType) => {
  return (
    <Container style={shadowBoxStyle}>
      <Header2>{i18n.t(`${baseTranslationPath}events`)}:</Header2>
      {events.map((item, index) => {
        const isFirstElement = index === 0;

        return (
          <View key={index}>
            {isFirstElement && <Divider>_</Divider>}
            <EventTile eventDate={item.createdAt} eventDescription={item.text} />
          </View>
        );
      })}
    </Container>
  );
};
