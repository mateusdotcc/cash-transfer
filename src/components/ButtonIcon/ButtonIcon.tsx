import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './ButtonIcon.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ComponentType<IconBaseProps>;
  iconSize?: number;
}

const ButtonIcon: React.FC<Props> = ({
  icon: Icon,
  iconSize = 22,
  className,
  ...rest
}) => {
  return (
    <Container className={className} {...rest}>
      {Icon && <Icon size={iconSize} />}
    </Container>
  );
};

export default ButtonIcon;
