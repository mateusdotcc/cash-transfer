import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 2.7rem;

  h2 {
    color: ${props => props.theme.colors.onQuinary};
    font-family: ${props => props.theme.typography.primaryMedium};

    margin: 0;
    font-size: 2.4rem;
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

  label {
    border: 0.2rem solid ${props => props.theme.colors.senary};

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 2.3rem 2.4rem 2.2rem 2.1rem;
    height: 8.8rem;
    border-radius: 0.4rem;

    transition: border-color 0.25s;

    cursor: pointer;

    &:hover {
      border-color: ${props => props.theme.colors.seventh};
    }
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
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.onTertiary};

  font-size: 1.4rem;
`;

export const Price = styled.span`
  color: ${props => props.theme.colors.onQuinary};
  font-family: ${props => props.theme.typography.primaryMedium};

  font-size: 1.8rem;
`;
