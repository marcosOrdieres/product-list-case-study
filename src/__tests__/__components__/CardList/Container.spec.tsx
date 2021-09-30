import { render } from '@testing-library/react';
import React from 'react';
import Container from '../../../Components/CardList/Container';
import Item from '../../../Components/CardList/Item';


describe('Card List Container', () => {
  it('should render matching default styles', () => {
    const { asFragment } = render(
      <Container>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
