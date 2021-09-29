import React from 'react';
import { render } from '@testing-library/react';

import HeaderProducts from './HeaderProducts';

describe('HeaderProducts', () => {
  it('should render HeaderProducts and match styles', () => {
    const mockedArray = ['first', 'second', 'third']
    const { asFragment } = render(
      <HeaderProducts headerProducts={mockedArray} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
