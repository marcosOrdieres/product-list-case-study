import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.div`
  cursor: pointer;
  color: white;
  padding-top: 10px;
  background-color: #212933;
  padding: 4px;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  text-align: center;
  margin: 0 auto;
`;

const Text = styled.span`
  display: inline-block;
  margin: 5px 5px 0 0;
`;

const Button = ({ onClick, text }: any) => (
  <ButtonStyled className="button" onClick={onClick}>
    <Text>{text}</Text>
  </ButtonStyled>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

export default Button;