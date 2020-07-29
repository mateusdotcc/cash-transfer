import React from 'react';

import { Aside } from '../../../components';

import { Container } from './Dashboard.styled';

const DashboardLayout: React.FC = () => {
  return (
    <Container>
      <Aside />
    </Container>
  );
};

export default DashboardLayout;
