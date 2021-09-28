import styled from 'styled-components';

export interface StickyContainerProps {
  children?: any;
}

const StickyContainerStyled = styled.div`
  position: sticky;
  display: flex;
  flex-direction:column;
  align-items: center;
  top:0;
  zIndex;1;
`;

export const StickyContainer: React.FC<StickyContainerProps> = (props) => <StickyContainerStyled {...props}>{props.children}</StickyContainerStyled>;

export default StickyContainerStyled;