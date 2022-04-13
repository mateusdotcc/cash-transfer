import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  margin-bottom: 7.4rem;

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
    align-items: center;

    margin-bottom: 8.3rem;
  }
`;

export const From = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
    min-width: 100%;
  }
`;

export const To = styled(From)``;

export const ButtonConvert = styled.button`
  background-color: ${props => props.theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -38px;
  margin: 0 2.1rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  transition: background-color 0.25s;

  svg {
    color: ${props => props.theme.colors.primary};
    transition: transform 0.25s;
  }

  &:hover {
    background-color: ${props => props.theme.colors.onPrimary};

    svg {
      color: ${props => props.theme.colors.background};

      transform: rotate(180deg);
    }
  }

  @media ${props => props.theme.breakpoints.laptopL} {
    margin: 0 1rem;
    min-width: 40px;
    min-height: 40px;
    width: 4rem;
    height: 4rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    top: 0;
    margin: 2.8rem 0;
    min-width: 50px;
    min-height: 50px;
    width: 5rem;
    height: 5rem;
  }
`;

export const SelectResult = styled.div`
  background-color: ${props => props.theme.colors.quaternary};
  padding: 2.7rem 2.6rem;
  height: 12.8rem;
  border-radius: 0.8rem;
  max-width: 267px;

  > p:first-of-type {
    color: ${props => props.theme.colors.onSecondary};
    font-size: 1.4rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 100%;
  }
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.quinary};
  font-family: ${props => props.theme.typography.primarySemibold};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.8rem;
  font-size: 3rem;

  input {
    max-width: 168px;
    background-color: transparent;
    border: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:focus {
      ::placeholder {
        color: transparent;
      }
    }
  }

  p {
    width: calc(100% - 4rem);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin-left: 1.2rem;
    font-size: 1.8rem;
    color: inherit;
  }
`;
