import React from 'react';
import { render } from '@testing-library/react';

import Image from '../../../Components/Image';

describe('Image', () => {
  it('should render Image and match styles', () => {
    const { asFragment } = render(
      <Image src='' />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
