import React from 'react';
import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items:center;
`;

export const StyledSelect = styled.select`
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export interface DropdownProps {
  formLabel?: any,
  action?: any,
  onChange?: any,
  children?: JSX.Element[],
};

const Dropdown = (props: DropdownProps) => (
  <DropdownWrapper
    action={props.action}
    onChange={props.onChange}
  >
    <StyledLabel htmlFor="services">
      {props.formLabel}
    </StyledLabel>
    <StyledSelect id="services" name="services">
      {props.children}
    </StyledSelect>
    {/* <StyledButton type="submit" value={props.buttonText} /> */}
  </DropdownWrapper>
);

export default Dropdown;