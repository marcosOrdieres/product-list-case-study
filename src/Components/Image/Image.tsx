import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export interface ImageProps {
  src?: string,
};

const Image = (props: ImageProps) => {
  return (
    <ImageStyled src={props.src} />
  )
};

export default Image;