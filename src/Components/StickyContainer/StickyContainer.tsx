import styled from 'styled-components';

export interface StickyContainerProps {
  children?: JSX.Element[];
}

const StickyContainerStyled = styled.div`
  position: sticky;
  display: flex;
  flex-direction:column;
  align-items: center;
  top:0;
  z-index:1;
  background-color: white;
`;

export const StickyContainer: React.FC<StickyContainerProps> = (props) => <StickyContainerStyled {...props}>{props.children}</StickyContainerStyled>;

export default StickyContainerStyled;