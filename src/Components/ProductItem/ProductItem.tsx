import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductType } from '../../Pages/ProductsScreen/ProductsScreen';

export interface ColumnProps {
  noVerticalLine?: boolean,
  bottomLine?: boolean,
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
  border-bottom:${(props) => !props.bottomLine ? null : '1px solid rgba(12, 15, 20, 0.3)'};

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

export interface ProductItemProps {
  product?: ProductType,
};

const ProductItem = ({ product }: any) => {

  const [additionalPhotosOpen, setAdditionalPhotosOpen] = useState<boolean>(false)
  return (
    <>
      <Container onClick={() => setAdditionalPhotosOpen(!additionalPhotosOpen)}>

        <Column noVerticalLine bottomLine={additionalPhotosOpen}>
          <Row>{product.title}</Row>
        </Column>

        <Column bottomLine={additionalPhotosOpen}>
          <Row>{product.gtin}</Row>
        </Column>

        <Column bottomLine={additionalPhotosOpen}>
          <Row>{product.gender}</Row>
        </Column>

        <Column bottomLine={additionalPhotosOpen}>
          <Row>{product.price}</Row>
        </Column>
        <Column bottomLine={additionalPhotosOpen}>
          <Row>{product.sale_price}</Row>
        </Column>

        <Column bottomLine={additionalPhotosOpen}>
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
              {product.additional_image_link.split(',').map((value: string) => (
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