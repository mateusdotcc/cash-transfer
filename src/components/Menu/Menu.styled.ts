import styled from 'styled-components';

import Button from '../Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 322px;
  width: 100%;

  li {
    width: 100%;
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

export const Link = styled(Button)`
  color: ${props => props.theme.colors.tertiary};
  font-family: 'Inter-Semibold';

  position: relative;
  padding: 2.2rem 0 2.2rem 6.3rem;

  font-size: 1.6rem;
  width: inherit;

  transition: color 0.25s;

  &:after {
    background-color: ${props => props.theme.colors.primary};

    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 0.5rem;
    height: 100%;
  }

  &:hover {
    color: ${props => props.theme.colors.onPrimary};
  }
`;
