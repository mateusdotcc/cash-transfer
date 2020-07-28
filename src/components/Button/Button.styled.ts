import styled from "styled-components";

export const Container = styled.button`
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
`;
