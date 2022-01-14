import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { EventTile } from '../';

storiesOf('EventTile', module).add('withDefaultLook', () => (
  <EventTile eventDate="2021-05-14T11:38:57.678Z" eventDescription="Some event name" />
));
