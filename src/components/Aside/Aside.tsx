import React from 'react';

import Menu from '../Menu/Menu';

import { Container } from './Aside.styled';

const Aside: React.FC = () => {
  return (
    <Container>
      <Menu />
    </Container>
  );
};

export default Aside;
