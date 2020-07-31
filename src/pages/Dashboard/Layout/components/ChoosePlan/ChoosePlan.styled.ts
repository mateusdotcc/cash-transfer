import styled from 'styled-components';

export const Container = styled.div`
  .ant-picker {
    opacity: 0;
    left: 12px;
    cursor: pointer;

    input {
      cursor: pointer;
    }
  }

  @media ${props => props.theme.breakpoints.laptop} {
    margin-bottom: 9.6rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    .ant-picker {
      top: 10px;
      left: 0px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;
  margin-bottom: 2.7rem;

  h2 {
    color: ${props => props.theme.colors.onQuinary};
    font-family: ${props => props.theme.typography.primaryMedium};

    margin: 0;
    font-size: 2.4rem;
  }

  .ant-picker {
    width: 20rem;
  }

  .ant-picker-input {
    input::placeholder {
      color: ${props => props.theme.colors.secondary};

      font-size: 1.8rem;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const Checkmark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  min-width: 24px;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: 0.2rem solid ${props => props.theme.colors.senary};

  transition: border-color 0.25s;

  svg {
    color: ${props => props.theme.colors.background};

    position: relative;
    z-index: 1;
    top: 1px;
    opacity: 0;

    transition: opacity 0.25s 0.18s;
  }

  &:after {
    background-color: ${props => props.theme.colors.onSeventh};

    content: '';

    position: absolute;
    top: -2px;
    left: -2px;
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: inherit;
    transform: scale(0);

    z-index: 0;

    transition: transform 0.25s;
  }
`;

export const ContainerItem = styled.div`
  border: 0.2rem solid ${props => props.theme.colors.senary};

  padding: 2.3rem 2.4rem 2.2rem 2.1rem;
  height: 8.8rem;
  border-radius: 0.4rem;
  cursor: pointer;

  transition: border-color 0.25s, background-color 0.25s;

  &:hover {
    border-color: ${props => props.theme.colors.seventh};

    ${Checkmark} {
      border-color: ${props => props.theme.colors.seventh};
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 2.2rem 1.6rem 2.4rem 1.6rem;
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    flex-direction: column;

    width: 100%;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;

    &:checked ~ ${ContainerItem} {
      background-color: ${props => props.theme.colors.onSenary};
      border-color: ${props => props.theme.colors.seventh};

      pointer-events: none;
      cursor: auto;

      ${Checkmark} {
        &:after {
          transform: scale(1);
        }

        svg {
          opacity: 1;
        }
      }
    }
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
`;

export const Content = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 1.8rem;
`;

export const Title = styled.p`
  color: ${props => props.theme.colors.onQuaternary};
  font-family: ${props => props.theme.typography.primaryMedium};

  margin-bottom: 0.6rem;
  font-size: 1.8rem;

  @media ${props => props.theme.breakpoints.mobile} {
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.onTertiary};

  font-size: 1.4rem;

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const Price = styled.span`
  color: ${props => props.theme.colors.onQuinary};
  font-family: ${props => props.theme.typography.primaryMedium};

  font-size: 1.8rem;
  white-space: nowrap;

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.6rem;
  }
`;

export const ButtonDate = styled.button`
  color: ${props => props.theme.colors.secondary};

  display: flex;
  align-items: center;

  position: absolute;
  top: 10px;
  right: 0;
  font-size: 1.8rem;
  cursor: pointer;

  svg {
    margin-left: 1.3rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    top: 57px;
    right: auto;
    left: 0;
  }
`;
