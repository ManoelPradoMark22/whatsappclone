import React from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Container,
  SideBar,
  SideBarHeader,
  SideBarHeaderButtons,
  HeaderButton,
  Search,
  ChatList,
  ContentArea,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <SideBar>
        <SideBarHeader>
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar"/>
          <SideBarHeaderButtons>
            <HeaderButton>
              <DonutLargeIcon style={{color:'#919191'}}/>
            </HeaderButton>
            <HeaderButton>
              <ChatIcon style={{color:'#919191'}}/>
            </HeaderButton>
            <HeaderButton>
              <MoreVertIcon style={{color:'#919191'}}/>
            </HeaderButton>
          </SideBarHeaderButtons>
        </SideBarHeader>

        <Search>
          ...
        </Search>

        <ChatList>
          ...
        </ChatList>
      </SideBar>

      <ContentArea>
        ...
      </ContentArea>
    </Container>
  );
}