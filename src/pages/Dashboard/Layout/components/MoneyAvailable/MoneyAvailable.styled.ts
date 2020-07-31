import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.typography.primaryMedium};

    margin-bottom: 1.4rem;
    font-size: 3rem;
  }

  > div {
    display: flex;
    align-items: baseline;
    flex-direction: row;

    span {
      color: ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.typography.primaryBold};

      margin-right: 1.2rem;
      font-size: 3rem;
    }

    p {
      color: ${props => props.theme.colors.onTertiary};
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding-top: 16rem;
  }
`;
