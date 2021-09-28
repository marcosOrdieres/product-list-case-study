import React from 'react';

import Container from './Container';

describe('Container', () => {
  it('should render and match styles', () => {
    const { asFragment } = render(<Container>Container</Container>);
    expect(asFragment()).toMatchSnapshot();
  });
});
