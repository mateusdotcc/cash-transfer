import styled from 'styled-components';

export const Container = styled.button`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.typography.primaryMedium};
  border: 0.2rem solid ${props => props.theme.colors.primary};

  padding: 1.1rem 2rem;
  font-size: 1.8rem;
  border-radius: 0.4rem;

  transition: color 0.25s, background-color 0.25s;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
  }
`;
