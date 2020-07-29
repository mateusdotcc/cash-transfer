import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    &:not(:last-child) {
      margin-right: 2.7rem;
    }
  }
`;
