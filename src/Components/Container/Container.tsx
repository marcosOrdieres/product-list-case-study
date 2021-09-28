import styled from 'styled-components';

export interface ContainerProps {
  children?: any;
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

export const Conatainer: React.FC<ContainerProps> = (props) => <ContainerStyled {...props}>{props.children}</ContainerStyled>;

export default ContainerStyled;