import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

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
  EmojiArea,
  Footer,
  LeftFooterContent,
  InputArea,
  RightFooterContent
} from './styles';

export function ChatWindow() {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');

  function handleEmojiClick(e, emojiObject) {
    setText(text + emojiObject.emoji);
  }

  function handleOpenEmoji() {
    setEmojiOpen(true);
  }

  function handleCloseEmoji() {
    setEmojiOpen(false);
  }

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

      <EmojiArea style={{height: emojiOpen ? '200px' : '0px'}}>
        <EmojiPicker 
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </EmojiArea>

      <Footer>
        <LeftFooterContent>
          <Button 
            style={{width: emojiOpen ? '40px' : 0}}
            onClick={handleCloseEmoji}
          >
            <CloseIcon />
          </Button>

          <Button onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{color: emojiOpen ? 'var(--iconColorActive)' : 'var(--iconColor)'}}
            />
          </Button>
        </LeftFooterContent>

        <InputArea>
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e => setText(e.target.value)}
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