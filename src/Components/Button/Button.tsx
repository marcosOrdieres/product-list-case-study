import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.div`
  cursor: pointer;
  color: white;
  padding-top: 10px;
  background-color: #212933;
  padding: 20px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  margin: 0 auto;
`;

const Text = styled.span`
  display: inline-block;
`;

export interface ButtonProps {
  onClick: any,
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => (
  <ButtonStyled className="button" onClick={onClick}>
    <Text>{text}</Text>
  </ButtonStyled>
);

export default Button;