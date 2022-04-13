import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
    font-family: ${theme.typography.primaryMedium};
    border: 0.2rem solid ${theme.colors.primary};

    padding: 1.1rem 2rem;
    font-size: 1.8rem;
    border-radius: 0.4rem;
    transition: color 0.25s, background-color 0.25s;

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.background};
    }
  `}

`;
