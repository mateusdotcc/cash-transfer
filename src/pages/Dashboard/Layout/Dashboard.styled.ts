import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 6.1rem;
  max-width: 1055px;
  width: 100%;

  @media ${props => props.theme.breakpoints.laptop} {
    max-width: 630px;
  }
`;

export const Center = styled.section`
  display: flex;
  flex-direction: column;

  padding: 7.9rem 2.5rem 0 0;
  width: 100%;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 1.6rem;
  }
`;

export const Main = styled.div`
  margin-right: 4.9rem;

  @media ${props => props.theme.breakpoints.laptopL} {
    margin-right: 3rem;
    max-width: 600px;
  }

  @media ${props => props.theme.breakpoints.laptop} {
    margin-right: 0;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media ${props => props.theme.breakpoints.laptop} {
    flex-direction: column;
    max-width: 630px;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    max-width: 100%;
  }
`;
