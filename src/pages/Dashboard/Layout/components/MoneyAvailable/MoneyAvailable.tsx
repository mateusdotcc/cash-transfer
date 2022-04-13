import React from 'react';
import { Container } from './MoneyAvailable.styled';

const MoneyAvailable: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MoneyAvailable;
