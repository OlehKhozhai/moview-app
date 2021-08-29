import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DeleteMovie from './index';

export default {
  component: DeleteMovie,
  title: 'components/DeleteMovie',
} as Meta;

const props = () => ({
  onConfirm: action('onConfirm'),
});

export const DeleteMovieComponent = () => (
  <div style={{ width: 400, textAlign: 'left' }}>
    <DeleteMovie {...props()} />
  </div>
);
