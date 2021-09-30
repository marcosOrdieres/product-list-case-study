import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../../Components/Button';


describe('Button', () => {
  it('should render and match styles', () => {
    const { asFragment } = render(
      <Button onClick={() => 'value'} text='Text' />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
