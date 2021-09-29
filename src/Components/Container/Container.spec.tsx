import { render } from '@testing-library/react';
import React from 'react';

import Container from './Container';

describe('Container', () => {
  it('should render Container and match styles', () => {
    const { asFragment } = render(<Container>Container</Container>);
    expect(asFragment()).toMatchSnapshot();
  });
});
