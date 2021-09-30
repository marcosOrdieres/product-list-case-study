import React from 'react';
import { render } from '@testing-library/react';
import Option from '../../../Components/Option';

describe('Option', () => {
  it('should render Option and match styles', () => {
    const { asFragment } = render(
      <Option selected={true} value='' />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});