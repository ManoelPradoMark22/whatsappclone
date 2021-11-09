import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Container,
  Header,
  HeaderInfo,
  HeaderButtons,
  Button,
  Body,
  Footer,
} from './styles';

export function ChatWindow() {
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <img src="https://i.ibb.co/hfR36cs/img-avatar2.png" alt="avatar"/>
          <div>Manoel das das asds d sa ad sdas da asd as dds das ds </div>
        </HeaderInfo>

        <HeaderButtons>
          <Button>
            <SearchIcon />
          </Button>
          <Button>
            <AttachFileIcon />
          </Button>
          <Button>
            <MoreVertIcon />
          </Button>
        </HeaderButtons>
      </Header>

      <Body>

      </Body>

      <Footer>

      </Footer>
    </Container>
  )
}