import React from 'react';
import styled from "styled-components";

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export interface OptionProps {
  selected?: boolean,
  value?: string,
};
const Option = (props: OptionProps) => (
  <StyledOption selected={props.selected}>
    {props.value}
  </StyledOption>
);

export default Option;