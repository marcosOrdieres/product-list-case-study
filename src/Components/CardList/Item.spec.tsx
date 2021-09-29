import { render } from '@testing-library/react';
import React, { Fragment } from 'react';

import Item from './Item';

describe('Card List Items', () => {
  it('should render matching default styles', () => {
    const { asFragment } = render(
      <Fragment>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Fragment>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
