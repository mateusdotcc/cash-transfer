import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Button from '../Button/Button';

type Button = ButtonHTMLAttributes<HTMLButtonElement>;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  li {
    width: inherit;
  }
`;

export const ListPrimary = styled.ul`
  padding: 0;
  width: 100%;
`;

export const ListSecondary = styled.ul`
  padding: 21.3rem 0 0 0;
  width: 100%;

  li:last-child {
    svg {
      transform: rotate(-180deg);
    }
  }
`;

export const ButtonItem = styled(Button).attrs<{ isActive?: boolean }, Button>(
  {},
)<{
  isActive?: boolean;
}>`
  color: ${props => props.theme.colors.tertiary};

  position: relative;
  padding: 2.2rem 0 2.2rem 6.3rem;

  font-size: 1.6rem;
  width: inherit;

  transition: color 0.25s;

  &:after {
    background-color: ${props => props.theme.colors.onPrimary};

    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 0;
    height: 100%;

    transition: width 0.25s;
  }

  &:hover {
    color: ${props => props.theme.colors.onPrimary};

    &:after {
      width: 0.5rem;
    }
  }

  &:disabled {
    pointer-events: none;
  }

  ${props =>
    props.isActive &&
    css`
      color: ${props.theme.colors.onPrimary};

      &:after {
        width: 0.5rem;
      }
    `}
`;
