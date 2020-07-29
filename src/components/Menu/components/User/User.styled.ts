import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5.6rem;
`;

export const Avatar = styled.div`
  img {
    margin-bottom: 1.9rem;
    border-radius: 50%;
  }
`;

export const Username = styled.p`
  font-family: 'Inter-Semibold';

  margin-bottom: 0.7rem;
  font-size: 2.4rem;
`;

export const UserId = styled.p`
  color: ${props => props.theme.colors.onTertiary};

  font-size: 1.6rem;
`;
