import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import { ChatListItem } from '../../components/ChatListItem';
import { ChatIntro } from '../../components/ChatIntro';
import { ChatWindow } from '../../components/ChatWindow';

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
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://i.ibb.co/hfR36cs/img-avatar2.png',
    name: 'Manoel Prado'
  });

  return (
    <Container>
      <SideBar>
        <SideBarHeader>
          <img src={user.avatar} alt="avatar"/>
          <SideBarHeaderButtons>
            <HeaderButton>
              <DonutLargeIcon/>
            </HeaderButton>
            <HeaderButton>
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
          />
        }
      </ContentArea>
    </Container>
  );
}