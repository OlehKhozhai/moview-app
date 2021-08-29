import React from 'react';
import { Meta } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ErrorMessage from './index';

export default {
  component: ErrorMessage,
  title: 'components/ErrorMessage',
} as Meta;

const props = () => ({
  text: text('text', 'Error message'),
});

export const ErrorMessageComponent = () => (
  <div style={{ width: 400 }}>
    <ErrorMessage {...props()} />
  </div>
);
