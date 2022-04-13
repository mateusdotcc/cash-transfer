import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  box-shadow: 0 0.2rem 0.7rem rgba(123, 135, 148, 0.28);
  transition: background-color 0.25s;

  svg {
    color: ${props => props.theme.colors.secondary};
    transition: color 0.25s;
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary};

    svg {
      color: ${props => props.theme.colors.background};
    }
  }
`;
