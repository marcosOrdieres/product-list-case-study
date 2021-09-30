import React from 'react';
import { render } from '@testing-library/react';

import { ProductsScreen } from './ProductsScreen';

const mockedDataSet = [
    {
        additional_image_link: ['example1.com', 'example2.com', 'example3.com'],
        gender: 'binary',
        gtin: '1',
        image_link: 'example.com',
        price: '20',
        sale_price: '20',
        title: 'title 1'
    },
    {
        additional_image_link: ['example1.com', 'example2.com', 'example3.com'],
        gender: 'binary',
        gtin: '2',
        image_link: 'example.com',
        price: '12',
        sale_price: '11',
        title: 'title 2'
    }
]

describe('ProductsScreen page testing', () => {
    it('should render ProductsScreen screen', async () => {
        render(<ProductsScreen />);
    });
});

