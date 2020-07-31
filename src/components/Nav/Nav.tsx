import React from 'react';

import { FiFileText, FiHelpCircle } from 'react-icons/fi';

import ButtonIcon from '../ButtonIcon/ButtonIcon';

import { Container } from './Nav.styled';

interface Props {
  className?: string;
}

const Nav: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
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
