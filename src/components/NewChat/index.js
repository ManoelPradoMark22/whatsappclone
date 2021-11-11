import React from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  List,
} from './styles';

export function NewChat() {
  return (
    <Container>
      <Header>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
        <HeaderTitle>
          Nova Conversa 
        </HeaderTitle>
      </Header>
      <List>

      </List>
    </Container>
  )
}