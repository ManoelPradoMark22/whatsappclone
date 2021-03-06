import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import { ChatListItem } from '../../components/ChatListItem';
import { ChatIntro } from '../../components/ChatIntro';
import { ChatWindow } from '../../components/ChatWindow';
import { NewChat } from '../../components/NewChat';

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

  const [chatlist, setChatlist] = useState([
    {
      chatId: 1,
      title: 'Fulado de Tal 1',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
    {
      chatId: 2,
      title: 'Fulado de Tal 2',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
    {
      chatId: 3,
      title: 'Fulado de Tal 3',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
    {
      chatId: 4,
      title: 'Fulado de Tal 4',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
    {
      chatId: 5,
      title: 'Fulado de Tal 1',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
    {
      chatId: 6,
      title: 'Fulado de Tal 2',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
    {
      chatId: 7,
      title: 'Fulado de Tal 3',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
    {
      chatId: 8,
      title: 'Fulado de Tal 4',
      image: 'https://i.ibb.co/hfR36cs/img-avatar2.png'
    },
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://i.ibb.co/hfR36cs/img-avatar2.png',
    name: 'Manoel Prado'
  });
  const [showNewChat, setShowNewChat] = useState(false);

  function handleOpenNewChat() {
    setShowNewChat(true);
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
            <input type="search" placeholder="Procurar ou come??ar uma nova conversa"/>
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
          />
        }
      </ContentArea>
    </Container>
  );
}