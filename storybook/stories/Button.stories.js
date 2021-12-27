import React from 'react';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import CenterView from './CenterView';

import Button from '../../src/components/Button';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Button
      onPress={action('Pressing default button')}
      text="Default Button State"
    />
  ))
  .add('With Custom Background Color', () => (
    <Button
      backgroundColor="deeppink"
      onPress={action('Pressing button with custom background color')}
      text="With Background Color Button State"
    />
  ))
  .add('Disabled', () => (
    <Button
      disabled
      onPress={action('Pressing disabled button')}
      text="Disabled Button State"
    />
  ))
  .add('Loading', () => (
    <Button
      isLoading
      onPress={action('Pressing loading button')}
      text="Loading Button State"
    />
  ));
