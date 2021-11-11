import React, { useState } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  List,
  Contact,
  ContactName
} from './styles';

export function NewChat({
  user,
  chatlist,
  show,
  setShow
}) {
  const [list, setList] = useState([
    {id: 123, avatar: 'https://i.ibb.co/hfR36cs/img-avatar2.png', name: 'Manoel Prado'},
    {id: 123, avatar: 'https://i.ibb.co/hfR36cs/img-avatar2.png', name: 'Manoel Prado'},
    {id: 123, avatar: 'https://i.ibb.co/hfR36cs/img-avatar2.png', name: 'Manoel Prado'},
    {id: 123, avatar: 'https://i.ibb.co/hfR36cs/img-avatar2.png', name: 'Manoel Prado'},
    {id: 123, avatar: 'https://i.ibb.co/hfR36cs/img-avatar2.png', name: 'Manoel Prado'},
  ])

  function handleClose() {
    setShow(false);
  }

  return (
    <Container show={show}>
      <Header>
        <BackButton onClick={handleClose}>
          <ArrowBackIcon />
        </BackButton>
        <HeaderTitle>
          <p>
            Nova Conversa
          </p> 
        </HeaderTitle>
      </Header>
      <List>
        {list.map((item, key) => (
          <Contact key={key}>
            <img src={item.avatar} alt='avatar'/>
            <ContactName title={item.name}>
              <p>
                {item.name}
              </p>
            </ContactName>
          </Contact>
        ))}
      </List>
    </Container>
  )
}