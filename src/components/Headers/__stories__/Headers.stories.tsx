import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { BasicHeader } from '../BasicHeader';
import { StoryControlledHeader } from '../StoryControlledHeader';

storiesOf('Headers', module)
  .add('withBasicHeader', () => <BasicHeader title="Happy Users" />)
  .add('withStoryControlledHeader', () => <StoryControlledHeader title="Happy Users" />);
