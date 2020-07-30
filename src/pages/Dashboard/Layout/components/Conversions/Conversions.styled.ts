import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 7.4rem;
`;

export const From = styled.div`
  display: flex;
  flex-direction: column;
`;

export const To = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonConvert = styled.button`
  background-color: ${props => props.theme.colors.primary};

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
    color: ${props => props.theme.colors.background};
    transition: transform 0.25s;
  }

  &:hover {
    background-color: ${props => props.theme.colors.onPrimary};

    svg {
      transform: rotate(180deg);
    }
  }
`;

export const SelectResult = styled.div`
  background-color: ${props => props.theme.colors.quaternary};

  padding: 2.7rem 2.6rem;
  height: 12.8rem;
  border-radius: 0.8rem;

  p:first-of-type {
    color: ${props => props.theme.colors.onSecondary};
    font-size: 1.4rem;
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

  span {
    margin-left: 1.2rem;
    font-size: 1.8rem;
    color: inherit;
  }
`;
