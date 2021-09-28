import React, { useState } from 'react';
import styled from 'styled-components';

export interface ColumnProps {
  noVerticalLine?: boolean,
};

export interface MainImageContainerProps {
  padding?: boolean,
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width:1500px;
  cursor:pointer;
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

const Center = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainImageContainer = styled.div<MainImageContainerProps>`
  display: flex;
  width:100px;
  height: 100px;
  background-color:  'white';
  align-items: center;
  justify-content: center;
  padding:${(props) => props.padding ? '10px' : null};
`;

const ProductItem = ({ product }: any) => {
  const [additionalPhotosOpen, setAdditionalPhotosOpen] = useState<boolean>(false)
  return (
    <>
      <Container onClick={() => setAdditionalPhotosOpen(!additionalPhotosOpen)}>
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

      {additionalPhotosOpen && (
        <>
          <Center>
            <p>Additional Images</p>
          </Center>

          <Container>
            <Column noVerticalLine>
              {product.additional_image_link.split(',').map((value: any, index: number) => (
                <MainImageContainer padding>
                  <Image src={value} />
                </MainImageContainer>
              ))}
            </Column>
          </Container>
        </>
      )}


    </>
  )
};

export default ProductItem;