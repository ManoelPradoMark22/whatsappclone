import React, { useState, useEffect } from 'react';

import {
  Container,
  MessageContent,
  MessageText,
  MessageDate,
} from './styles';

export function MessageItem({data, user}) {
  const [time, setTime] = useState('');

  useEffect(() => {
     if(data.date > 0) {
        let d = new Date(data.date.seconds * 1000);
        let hours = d.getHours();
        let minutes = d.getMinutes();

        hours = hours < 10 ? '0'+hours : hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;

        setTime(`${hours}:${minutes}`);
     }
  }, [data]);

  return (
    <Container isAuthor={user.id === data.author}>
      <MessageContent isAuthor={user.id === data.author}>
        <MessageText>
          {data.body}
        </MessageText>
        <MessageDate>
          {time}
        </MessageDate>
      </MessageContent>
    </Container>
  )
}
