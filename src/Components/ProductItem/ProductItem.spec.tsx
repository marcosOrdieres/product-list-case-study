import { render } from '@testing-library/react';
import React from 'react';

import ProductItem from './ProductItem';

const product = {
  additional_image_link: ['example1.com', 'example2.com', 'example3.com'],
  gender: 'binary',
  gtin: '1',
  image_link: 'example.com',
  price: '20',
  sale_price: '20',
  title: 'title'
}

describe('Product Items', () => {
  it('should match styles', () => {
    const { asFragment } = render(
      <ProductItem product={product} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
