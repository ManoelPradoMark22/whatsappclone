import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid var(--divide-medium);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
 
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 15px;
  }

  div {
    font-size: 17px;
    color: var(--text-dark);
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all ease 0.3s;

  svg {
    color: ${(props) => props.colorActive ? props.colorActive : 'var(--iconColor)'};
  }
`;

export const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: var(--backgroundBodyChat);
  background-size: cover;
  background-position: top;
  background-image: url('https://i.ibb.co/xGLfpMn/background-whatsapp-back-chat.png');
`;

export const EmojiArea = styled.div`
  height: 200px;
  overflow-y: hidden;
  transition: all ease 0.3s;

  aside {
    width: auto;
    background: none;
  }

  & .emoji-picker-react .emoji-group:before {
    background: none;
  }
`;

export const Footer = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
`;

export const LeftFooterContent = styled.div`
  display: flex;
  margin: 0 15px;
`;

export const InputArea = styled.div`
  flex: 1;

  input {
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    background: var(--shape);
    border-radius: 20px;
    font-size: 15px;
    color: var(--inputChat);
    padding: 0 15px;
  }
`;

export const RightFooterContent = styled.div`
  display: flex;
  margin: 0 15px;
`;
