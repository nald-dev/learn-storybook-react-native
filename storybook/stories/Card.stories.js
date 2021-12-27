import React from 'react';

import {storiesOf} from '@storybook/react-native';

import CenterView from './CenterView';

import Card from '../../src/components/Card';

const imageUrl =
  'https://images.unsplash.com/photo-1640532050931-24b7fc30ba94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80';

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Card
      imageUrl={imageUrl}
      title="Special's Card"
      description="Reynald Prabha Nova"
    />
  ))
  .add('With Custom Overlay Background Color And Opacity', () => (
    <Card
      imageUrl={imageUrl}
      title="Special's Card"
      description="Reynald Prabha Nova"
      overlayOpacity={0.2}
      overlayBackgroundColor="blue"
    />
  ));
