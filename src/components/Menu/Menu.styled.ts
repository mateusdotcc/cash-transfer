import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import ButtonMenu from '../ButtonMenu/ButtonMenu';

type Button = ButtonHTMLAttributes<HTMLButtonElement>;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .container-user-details,
  li {
    visibility: hidden;
    transform: translateY(60%);
    transition: visibility 1s ${props => props.theme.easings.easeOutExpo},
      transform 1s ${props => props.theme.easings.easeOutExpo};
  }

  li {
    width: inherit;
  }

  &.animate {
    .container-user-details,
    li {
      visibility: visible;
      transform: translateY(0);
    }

    .container-user-details {
      transition-delay: 0.1s;
    }

    li {
      &:nth-child(1) {
        transition-delay: 0.2s;
      }

      &:nth-child(2) {
        transition-delay: 0.3s;
      }

      &:nth-child(3) {
        transition-delay: 0.4s;
      }

      &:nth-child(4) {
        transition-delay: 0.5s;
      }

      &:nth-child(5) {
        transition-delay: 0.6s;
      }

      &:nth-child(6) {
        transition-delay: 0.7s;
      }

      &:nth-child(7) {
        transition-delay: 0.8s;
      }
    }
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

export const ButtonItem = styled(ButtonMenu).attrs<
  { isActive?: boolean },
  Button
>({})<{
  isActive?: boolean;
}>`
  color: ${props => props.theme.colors.secondary};
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

  @media ${props => props.theme.breakpoints.laptop} {
    padding-left: 3rem;
  }
`;
