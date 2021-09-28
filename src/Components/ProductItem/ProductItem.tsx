import React from 'react';
import styled from 'styled-components';

export interface ColumnProps {
  noVerticalLine?: boolean,
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width:1500px
`;

const Column = styled.div<ColumnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
  border-left:${(props) => props.noVerticalLine ? null : '1px solid rgba(12, 15, 20, 0.3)'};
`;

const Row = styled.div`
  margin-right: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainImageContainer = styled.div`
  display: flex;
  width:100px;
  height: 100px;
  background-color:  'white';
  align-items: center;
  justify-content: center;
`;

const ProductItem = ({ product }: any) => (
  <Container>
    <Column noVerticalLine>
      <Row>{product.title}</Row>
    </Column>

    <Column>
      <Row>{product.gtin}</Row>
    </Column>

    <Column>
      <Row>{product.gender}</Row>
    </Column>

    <Column>
      <Row>{product.price}</Row>
    </Column>
    <Column>
      <Row>{product.sale_price}</Row>
    </Column>

    <Column>
      <MainImageContainer>
        <Image src={product.image_link} />
      </MainImageContainer>
    </Column>

  </Container>
);

export default ProductItem;