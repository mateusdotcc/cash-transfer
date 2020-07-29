import React from 'react';

import AvatarImage from '../../../../assets/images/aside/user-avatar.png';

import { Container, Avatar, Username, UserId } from './User.styled';

const User: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <img src={AvatarImage} alt="Username" />
      </Avatar>

      <Username>Julio Merisio</Username>

      <UserId>2312T5B</UserId>
    </Container>
  );
};

export default User;
