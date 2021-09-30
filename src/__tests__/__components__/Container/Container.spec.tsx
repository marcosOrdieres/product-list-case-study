import { render } from '@testing-library/react';
import React from 'react';
import Container from '../../../Components/Container';


describe('Container', () => {
  it('should render Container and match styles', () => {
    const { asFragment } = render(<Container>Container</Container>);
    expect(asFragment()).toMatchSnapshot();
  });
});
