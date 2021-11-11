import React, { useState, useEffect } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Api from '../../Api';

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
  const [list, setList] = useState([]);

  function handleClose() {
    setShow(false);
  }

  async function addNewChat(user2) {
    await Api.addNewChat(user, user2);

    handleClose();
  }

  useEffect(() => {
    const getList = async () => {
      if(user !== null) {
        let results = await Api.getContactList(user.id);
        setList(results);
      }
    }
    getList();
  }, [user])

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
          <Contact 
            onClick={() => addNewChat(item)}
            key={key}
          >
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