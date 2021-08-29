import React, { FC } from 'react';
import { Meta } from '@storybook/react';

import Button, { ButtonVariation, ButtonProps } from './index';

export default {
  component: Button,
  title: 'components/Button',
  argTypes: {
    variation: {
      options: [ButtonVariation.Primary, ButtonVariation.PrimaryOutline, ButtonVariation.Secondary],
      control: { type: 'radio' },
      defaultValue: ButtonVariation.Primary,
    },
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { control: 'action' },
  },
} as Meta;

export const Default: FC<ButtonProps> = (props) => <Button {...props}>Button title</Button>;
