import React from 'react';
import { render } from '@testing-library/react';

import { ProductsScreen } from './ProductsScreen';

describe('ProductsScreen page testing', () => {
    it('should render ProductsScreen screen', async () => {
        render(<ProductsScreen />);
    });
});
