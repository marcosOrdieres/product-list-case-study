import React from 'react';

import RowContainer from './RowContainer';

describe('RowContainer', () => {
  it('should render and match styles', () => {
    const { asFragment } = render(<RowContainer>RowContainer</RowContainer>);
    expect(asFragment()).toMatchSnapshot();
  });
});
