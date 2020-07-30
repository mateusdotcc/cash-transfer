import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Loader = styled.span`
  display: flex;
  justify-content: center;
`;

export const Current = styled.button<{ isActive: boolean }>`
  font-family: ${props => props.theme.typography.primarySemibold};
  background-color: ${props => props.theme.colors.quaternary};

  padding: 0 2.2rem;
  width: inherit;
  height: 5.3rem;

  border-radius: 0.8rem;

  transition: color 0.25s, background-color 0.25s;

  svg {
    color: ${props => props.theme.colors.onQuaternary};
  }

  &:hover {
    ${props =>
      props.theme &&
      css`
        background-color: ${shade(0.1, props.theme.colors.quaternary)};
      `}
  }

  &:disabled {
    pointer-events: none;
  }

  ${props =>
    props.isActive &&
    css`
      &:hover {
        background-color: ${props.theme.colors.quaternary};
      }
    `}
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    padding: 1.6rem 0;
    border: 0;
    background-color: transparent;

    &::placeholder {
      font-family: ${props => props.theme.typography.primaryRegular};
    }
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: 4rem;
  }

  span {
    white-space: nowrap;
    width: calc(100% - 18rem);
  }
`;

export const List = styled.ul`
  background-color: ${props => props.theme.colors.background};

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 58px;
  left: 0;
  z-index: 10;
  padding-bottom: 0.5rem;
  width: inherit;
  max-height: 410px;
  overflow: hidden;

  li {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Flag = styled.span<{ source: string }>`
  background-image: url(${props => props.source});

  display: inline-block;
  margin: 0 1.5rem 0 4.9rem;
  min-width: 20px;
  max-width: 20px;
  width: 2rem;
  height: 2rem;
  background-size: 3.2rem 3.2rem;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.quaternary};

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1.7rem 2.2rem;
  width: inherit;
  border-radius: 0.8rem;

  transition: color 0.25s, background-color 0.25s;

  ${Flag} {
    margin-left: 0;
  }

  &:hover {
    ${props =>
      props.theme &&
      css`
        background-color: ${shade(0.1, props.theme.colors.quaternary)};
      `}
  }
`;

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  position: relative;
  margin-bottom: 2.8rem;
  min-width: 267px;
  width: 100%;

  ${List} {
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  }
`;
