import styled from 'styled-components';

export const Container = styled.aside`
  margin-right: 2rem;
  padding: 7.3rem 0;
  max-width: 322px;
  min-width: 320px;
  width: 100%;

  @media ${props => props.theme.breakpoints.laptopL} {
    margin-right: 0.5rem;
    min-width: 250px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`;
