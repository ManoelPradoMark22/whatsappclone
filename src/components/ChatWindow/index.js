import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import {
  Container,
  Header,
  HeaderInfo,
  HeaderButtons,
  Button,
  Body,
  Footer,
  LeftFooterContent,
  InputArea,
  RightFooterContent
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
        <LeftFooterContent>
          <Button>
            <InsertEmoticonIcon />
          </Button>
        </LeftFooterContent>

        <InputArea>
          <input
            type="text"
            placeholder="Digite uma mensagem"
          />
        </InputArea>

        <RightFooterContent>
          <Button>
            <SendIcon />
          </Button>
        </RightFooterContent>
      </Footer>
    </Container>
  )
}