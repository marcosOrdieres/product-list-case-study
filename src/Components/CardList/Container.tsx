import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(12, 15, 20, 0.2) 0px 0px 0px 1px,
    rgba(12, 15, 20, 0.6) 0px 0px 1px 0px,
    rgba(12, 15, 20, 0.6) 0px 2px 2px 0px;
  border-radius: 10px;
  padding: 0px;
  margin-bottom: 30px;
`;

Container.displayName = 'CardList.Container';

export default Container;