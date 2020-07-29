import React from 'react';

import { FiFileText, FiHelpCircle } from 'react-icons/fi';

import { ButtonIcon } from 'components';

import { Container } from './Nav.styled';

const Nav: React.FC = () => {
  return (
    <Container>
      <li>
        <ButtonIcon icon={FiFileText} />
      </li>

      <li>
        <ButtonIcon icon={FiHelpCircle} />
      </li>
    </Container>
  );
};

export default Nav;
