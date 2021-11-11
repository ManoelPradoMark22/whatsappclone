import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import Api from '../../Api';

import { ChatListItem } from '../../components/ChatListItem';
import { ChatIntro } from '../../components/ChatIntro';
import { ChatWindow } from '../../components/ChatWindow';
import { NewChat } from '../../components/NewChat';
import { Login } from '../../pages/Login';

import {
  Container,
  SideBar,
  SideBarHeader,
  SideBarHeaderButtons,
  HeaderButton,
  Search,
  SearchInput,
  ChatList,
  ContentArea,
} from './styles';

export function Dashboard() {

  const [chatlist, setChatlist] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 'WrjftZ1SRac8S4LlGW7FqVUX3HX2',
    name: 'Manoel Prado',
    avatar: 'https://graph.facebook.com/137980625243484/picture' 
  });
  const [showNewChat, setShowNewChat] = useState(false);

  function handleOpenNewChat() {
    setShowNewChat(true);
  }

  async function handleLoginData(u) {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    await Api.addUser(newUser);
    setUser(newUser);
  }

  useEffect(() => {
    if(user!==null){
      let unsub = Api.onChatList(user.id, setChatlist);
      return unsub;
    }
  }, [user]);

  if (user === null) {
    return (<Login onReceive={handleLoginData}/>)
  }

  return (
    <Container>
      <SideBar>
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <SideBarHeader>
          <img src={user.avatar} alt="avatar"/>
          <SideBarHeaderButtons>
            <HeaderButton>
              <DonutLargeIcon/>
            </HeaderButton>
            <HeaderButton onClick={handleOpenNewChat}>
              <ChatIcon/>
            </HeaderButton>
            <HeaderButton>
              <MoreVertIcon/>
            </HeaderButton>
          </SideBarHeaderButtons>
        </SideBarHeader>

        <Search>
          <SearchInput>
            <SearchIcon/>
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </SearchInput>
        </Search>

        <ChatList>
          {chatlist.map((item, key) => (
           <ChatListItem 
            key={key}
            data={item}
            active={activeChat.chatId === item.chatId}
            onClick={() => setActiveChat(item)}
           /> 
          ))}
        </ChatList>
      </SideBar>

      <ContentArea>
        {activeChat.chatId === undefined ?
          <ChatIntro /> :
          <ChatWindow 
            user={user}
            data={activeChat}
          />
        }
      </ContentArea>
    </Container>
  );
}