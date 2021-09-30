import React from 'react';
import { render } from '@testing-library/react';
import MainContainerImage from '../../../Components/MainContainerImage';
import Image from '../../../Components/Image';


describe('MainContainerImage', () => {
  it('should render MainContainerImage and match styles', () => {
    const { asFragment } = render(
      <MainContainerImage padding>
        <Image src='' />
      </MainContainerImage>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
