import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  width:270px;
`
const Label = styled.label``

const StyledCheckbox = styled.input``

export interface CheckboxProps {
  checked?: boolean,
  onChange?: any,
  textLabel?: string,
};

const Checkbox = (props: CheckboxProps) => (
  <CheckboxContainer>
    <StyledCheckbox type='checkbox' checked={props.checked} onChange={props.onChange} />
    <Label>
      {props.textLabel}
    </Label>
  </CheckboxContainer>
)

export default Checkbox
