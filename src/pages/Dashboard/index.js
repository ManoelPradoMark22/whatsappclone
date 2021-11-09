import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import { ChatListItem } from '../../components/ChatListItem';

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

  const [chatlist, setChatlist] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <Container>
      <SideBar>
        <SideBarHeader>
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
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
           /> 
          ))}
        </ChatList>
      </SideBar>

      <ContentArea>
        ...
      </ContentArea>
    </Container>
  );
}