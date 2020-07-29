import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './Button.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <Container className={className} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
