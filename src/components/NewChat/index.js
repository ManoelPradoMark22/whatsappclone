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
          <p>
            Nova Conversa
          </p> 
        </HeaderTitle>
      </Header>
      <List>

      </List>
    </Container>
  )
}