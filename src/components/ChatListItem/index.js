import React from 'react';

import {
  Container,
  Content,
  Line,
  Name,
  Hour,
  LastMessage
} from './styles';

export function ChatListItem() {
  return (
    <Container>
      <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
      <Content>
        <Line>
          <Name>
            <p title="Manoel Prado">Manoel Prado</p>
          </Name>
          <Hour>17:08</Hour>
        </Line>

        <Line>
          <LastMessage>
            <p title="Olá Mundo! Seja bem vindo ao REACT!">Olá Mundo! Seja bem vindo ao REACT!</p>
          </LastMessage>
        </Line>
      </Content>
    </Container>
  )
}