import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width:1500px;
  height:50px;
`;

export interface ColumnProps {
  noVerticalLine?: boolean,
};

const Column = styled.div<ColumnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
  border-left:${(props) => props.noVerticalLine ? null : '1px solid rgba(12, 15, 20, 0.3)'};
  border-bottom:1px solid rgba(12, 15, 20, 0.3);
  border-top:1px solid rgba(12, 15, 20, 0.3);
  background-color:#3399ff;
`;

const Row = styled.div`
  margin-right: 10px;
`;

const HeaderProducts = ({ headerProducts }: any) => (
  <Container>
    {headerProducts.map((header: string, index: number) => (
      <Column noVerticalLine={index === 0 ? true : false}>
        <Row>{header}</Row>
      </Column>
    ))}
  </Container>
);

export default HeaderProducts;