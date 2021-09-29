import React from 'react';
import styled from 'styled-components';

export interface MainImageContainerProps {
  padding?: boolean,
  imageSrc?: string,
  children?: JSX.Element
};

const MainImageContainerStyled = styled.div<MainImageContainerProps>`
  display: flex;
  width:100px;
  height: 100px;
  background-color:  'white';
  align-items: center;
  justify-content: center;
  padding:${(props) => props.padding ? '10px' : null};
`;

const MainImageContainer = (props: MainImageContainerProps) => {
  return (
    <MainImageContainerStyled padding>
      {props.children}
    </MainImageContainerStyled>
  )
};

export default MainImageContainer;