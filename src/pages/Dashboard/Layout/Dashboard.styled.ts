import styled from 'styled-components';

export const Container = styled.div<{ endAnimations: boolean }>`
  display: flex;
  flex-direction: row;
  position: ${props => (props.endAnimations ? 'relative' : 'fixed')};

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

export const Center = styled.section`
  display: flex;
  flex-direction: column;
  padding: 7.9rem 2.5rem 0 0;
  width: 100%;

  .container-header,
  .container-conversions,
  .container-choose-plan,
  .container-payment-details {
    visibility: hidden;
    transform: translateY(60%);
    transition: visibility 1s ${props => props.theme.easings.easeOutExpo},
      transform 1s ${props => props.theme.easings.easeOutExpo};
  }

  &.animate {
    .container-header,
    .container-conversions,
    .container-choose-plan,
    .container-payment-details {
      visibility: visible;
      transform: translateY(0);
    }

    .container-header,
    .container-menu-mobile {
      transition-delay: 0.5s;
    }

    .container-conversions {
      transition-delay: 0.6s;
    }

    .container-choose-plan {
      transition-delay: 0.7s;
    }

    .container-payment-details {
      transition-delay: 0.8s;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 1.6rem;
  }
`;
