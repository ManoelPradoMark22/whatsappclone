import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

import Api from '../../Api';

import { MessageItem } from '../MessageItem';

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

export function ChatWindow({user, data}) {

  const body = useRef();

  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([]);

  function handleEmojiClick(e, emojiObject) {
    setText(text + emojiObject.emoji);
  }

  function handleOpenEmoji() {
    setEmojiOpen(true);
  }

  function handleCloseEmoji() {
    setEmojiOpen(false);
  }

  function handleMicClick() {
    if (recognition !== null) {
      
      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }

      recognition.start();
    }
  }

  function handleSendClick() {
    
  }

  useEffect(() => {
    setList([]);
    let unsub = Api.onChatContent(data.chatId, setList);
    return unsub;
  }, [data.chatId]);

  useEffect(() => {
    if(body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <img src={data.image} alt="avatar"/>
          <div>{data.title}</div>
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

      <Body ref={body}>
        {list.map((item, key) =>
          <MessageItem 
            key={key}
            data={item}
            user={user}
          />
        )}
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

          <Button onClick={handleOpenEmoji} colorActive={emojiOpen ? 'var(--primary-active)' : 'var(--iconColor)'}>
            <InsertEmoticonIcon/>
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
          {text === '' ?
            <Button onClick={handleMicClick} colorActive={listening ? 'var(--iconMicActive)' : 'var(--iconColor)'}>
              <MicIcon />
            </Button>
          :
            <Button onClick={handleSendClick}>
              <SendIcon />
            </Button>
          }
        </RightFooterContent>
      </Footer>
    </Container>
  )
}