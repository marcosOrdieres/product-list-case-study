import React from 'react';

import Button from './Button';

describe('Button', () => {
  it('should render and match styles', () => {
    const { asFragment } = render(
      <Button onClick={() => 'value'} text="Text">
        Button
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
