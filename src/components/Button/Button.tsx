import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './Button.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType<IconBaseProps>;
  iconSize?: number;
}

const Button: React.FC<Props> = ({
  icon: Icon,
  iconSize = 22,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {Icon && <Icon size={iconSize} />}
      {children}
    </Container>
  );
};

export default Button;
