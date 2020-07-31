import styled from 'styled-components';

import User from '../Menu/components/User/User';

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

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};

  display: none;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  padding: 5.7rem 2rem 1rem 2.1rem;
  width: 100%;

  transition: padding 0.35s, box-shadow 0.35s;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
  }

  &.isScroll {
    padding-top: 1rem;
    box-shadow: 0px 0.2rem 0.7rem rgba(123, 135, 148, 0.28);

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
