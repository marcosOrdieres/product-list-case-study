import React from 'react';
import { render } from '@testing-library/react';

import CheckboxField from './CheckboxField';

describe('CheckboxField', () => {
  it('should render CheckboxField and match styles', () => {
    const { asFragment } = render(
      <CheckboxField textLabel={''} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
