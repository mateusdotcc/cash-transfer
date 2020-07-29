import styled from 'styled-components';

export const Container = styled.button`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};

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
