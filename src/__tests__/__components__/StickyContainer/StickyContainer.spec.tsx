import { render } from '@testing-library/react';
import React from 'react';
import StickyContainer from '../../../Components/StickyContainer';

describe('StickyContainer', () => {
  it('should render StickyContainer and match styles', () => {
    const { asFragment } = render(<StickyContainer>StickyContainer</StickyContainer>);
    expect(asFragment()).toMatchSnapshot();
  });
});
