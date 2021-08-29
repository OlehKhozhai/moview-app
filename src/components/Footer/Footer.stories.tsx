import React from 'react';
import { Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './index';

export default {
  component: Footer,
  title: 'components/Footer',
} as Meta;

export const FooterComponent = () => (
  <MemoryRouter>
    <div style={{ width: 1440 }}>
      <Footer />
    </div>
  </MemoryRouter>
);
