import React from 'react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render and match styles', () => {
    const { asFragment } = render(
      <SearchBar onChangeText={() => 'value'}>SearchBar</SearchBar>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
