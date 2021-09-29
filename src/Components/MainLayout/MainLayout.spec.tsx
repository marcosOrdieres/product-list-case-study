import { render } from '@testing-library/react';
import React from 'react';

import MainLayout from './MainLayout';

describe('MainLayout', () => {
  it('should render and match styles', () => {
    const { asFragment } = render(<MainLayout>MainLayout</MainLayout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
