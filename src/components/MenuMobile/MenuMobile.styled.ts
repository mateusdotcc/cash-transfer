import styled from 'styled-components';
import User from '../Menu/components/User/User';
import Nav from '../Nav/Nav';

export const UserDetails = styled(User)`
  flex-direction: row;
  margin-bottom: 0;

  img {
    margin-bottom: 0;
    margin-right: 1.6rem;
  }
`;

export const ButtonHamb = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 5rem;

  svg {
    position: relative;
    top: 7px;
  }
`;

export const ContainerMenu = styled.nav`
  background-color: ${props => props.theme.colors.background};
  position: absolute;
  top: 129px;
  left: 0;
  z-index: 11;
  width: 100%;
  transform: translateX(100%);
  visibility: hidden;
  transition: top 0.35s,
    transform 0.65s ${props => props.theme.easings.easeOutExpo},
    visibility 0.65s ${props => props.theme.easings.easeOutExpo};

  > div {
    max-width: 100%;
    height: calc(100vh - 12.9rem);
    overflow-x: hidden;
    overflow-y: scroll;
    transition: height 0.35s;

    > div {
      display: none;
    }
  }

  &.is-open {
    transform: translateX(0);
    visibility: visible;
  }
`;

export const ContainerCtaMenu = styled.nav`
  position: fixed;
  right: 18px;
  bottom: 40px;
  z-index: 10;
`;

export const ButtonCta = styled.button`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-top: 2rem;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  box-shadow: 0 0.2rem 0.7rem rgba(123, 135, 148, 0.28);
  visibility: hidden;
  transform: translateY(60%);
  transition: visibility 1s ${props => props.theme.easings.easeOutExpo},
    transform 1s ${props => props.theme.easings.easeOutExpo};

  svg {
    color: ${props => props.theme.colors.background};
    transition: color 0.25s;
  }
`;

export const NavCta = styled(Nav)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.is-open-cta {
    li {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  li {
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
    transition: opacity 0.6s ${props => props.theme.easings.easeOutExpo},
      visibility 0.6s ${props => props.theme.easings.easeOutExpo},
      transform 0.6s ${props => props.theme.easings.easeOutExpo};

    &:nth-child(1) {
      transition-delay: 0.1s;
    }

    &:nth-child(2) {
      transition-delay: 0.2s;
    }

    &:nth-child(3) {
      transition-delay: 0.3s;
    }

    &:not(:last-child) {
      margin: 0 0 2rem 0;
    }
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 5.7rem 2rem 1rem 2.1rem;
  width: 100%;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    visibility: hidden;
    transform: translateY(60%);
    transition: visibility 1s ${props => props.theme.easings.easeOutExpo},
      transform 1s ${props => props.theme.easings.easeOutExpo}, padding 0.35s,
      box-shadow 0.35s;
    width: 100%;
  }

  &.animate {
    header,
    ${ButtonCta} {
      visibility: visible;
      transform: translateY(0);
      transition-delay: 0.2s;
    }

    ${ButtonCta} {
      transition-delay: 1.8s;
    }
  }

  &.isScroll {
    padding-top: 1rem;
    box-shadow: 0 0.2rem 0.7rem rgba(123, 135, 148, 0.28);

    ${ContainerMenu} {
      top: 63px;

      > div {
        height: calc(100vh - 6.3rem);
      }
    }

    ${UserDetails} {
      img {
        width: 3rem;
        height: 3rem;
      }

      p:first-of-type {
        font-size: 1.6rem;
      }

      p:last-of-type {
        font-size: 1.2rem;
      }
    }

    ${ButtonHamb} {
      align-items: center;

      svg {
        top: auto;
      }
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: flex;
  }
`;
