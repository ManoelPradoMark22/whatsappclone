import React from 'react';

import {
  Container,
  MessageContent,
  MessageText,
  MessageDate,
} from './styles';

export function MessageItem({data, user}) {
  return (
    <Container isAuthor={user.id === data.author}>
      <MessageContent isAuthor={user.id === data.author}>
        <MessageText>
          {data.body}
        </MessageText>
        <MessageDate>
          19:50
        </MessageDate>
      </MessageContent>
    </Container>
  )
}
