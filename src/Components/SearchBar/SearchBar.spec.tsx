import React from 'react';

import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render SearchBar, match styles and change text', () => {
    const { asFragment } = render(
      <SearchBar onChangeText={() => 'value'} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
