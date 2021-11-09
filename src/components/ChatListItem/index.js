import React from 'react';

import {
  Container,
  Content,
  Line,
  Name,
  Hour,
  LastMessage
} from './styles';

export function ChatListItem({onClick, active, data}) {
  return (
    <Container onClick={onClick} active={active}>
      <img src={data.image} alt="avatar"/>
      <Content>
        <Line>
          <Name>
            <p title={data.title}>{data.title}</p>
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