import styled from 'styled-components';

const Item = styled.div`
  align-items: center;
  position: relative;
  border-bottom: 1px solid 5px;
  padding: 5px;

  &:first-child {
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
  }

  &:last-child {
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
  }
`;

Item.displayName = 'CardList.Item';

export default Item;
