import styled from 'styled-components';

import { Button } from 'components';

export const Container = styled.div`
  border: 0.2rem solid ${props => props.theme.colors.senary};

  display: flex;
  flex-direction: column;

  padding: 4rem 0;
  max-width: 100%;
  min-width: 381px;
  height: 65.4rem;
  border-radius: 0.4rem;
`;

export const Header = styled.header`
  h2 {
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.typography.primarySemibold};

    padding-left: 4rem;
    font-size: 2.4rem;
    margin-bottom: 5rem;
  }
`;

export const Conversion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > span:first-of-type {
      color: ${props => props.theme.colors.secondary};
      font-family: ${props => props.theme.typography.primarySemibold};

      margin-bottom: 0.9rem;
      font-size: 1.8rem;
    }
  }
`;

export const ContainerFlag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    color: ${props => props.theme.colors.onSecondary};

    display: inline-block;
    font-size: 1.4rem;
  }
`;

export const Flag = styled.span<{ source: string }>`
  background-image: url(${props => props.source});

  display: inline-block;
  margin-right: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;

  background-size: 2rem 2rem;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Equal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 5.7rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;

  box-shadow: 0px 0.2rem 0.7rem rgba(123, 135, 148, 0.28);

  svg {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Divider = styled.span`
  background-color: ${props => props.theme.colors.senary};

  margin: 6.4rem 0 4.9rem;

  display: block;
  width: 100%;
  height: 0.2rem;
`;

export const ContainerTotal = styled.ul`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 0 4rem;
  height: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  span {
    color: ${props => props.theme.colors.onQuaternary};

    display: flex;
    align-items: center;
    font-size: 1.7rem;
  }

  strong {
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.typography.primarySemibold};

    font-size: 1.8rem;
  }

  svg {
    margin-right: 1.8rem;
  }
`;

export const Submit = styled(Button).attrs({ type: 'submit' })`
  margin: 0 auto;
  width: 30.1rem;
`;
