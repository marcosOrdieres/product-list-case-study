import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from '../../../Components/Dropdown';


describe('Dropdown', () => {
  it('should render Dropdown and match styles', () => {
    const { asFragment } = render(
      <Dropdown formLabel='' action='' onChange={() => 'changed'}>
        <div />
        <div />
      </Dropdown>

    );
    expect(asFragment()).toMatchSnapshot();
  });
});