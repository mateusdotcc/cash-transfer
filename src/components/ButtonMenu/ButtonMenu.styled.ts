import styled from 'styled-components';

export const Container = styled.button`
  font-family: ${props => props.theme.typography.primarySemibold};
  display: flex;

  svg {
    margin-right: 1.8rem;
  }

  &:hover {
    color: ${props => props.theme.colors.onPrimary};

    svg {
      color: ${props => props.theme.colors.onPrimary};
    }
  }
`;
