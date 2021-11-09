import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 70px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-left: 15px;
  }

  background-color: ${(props) => props.active && 'var(--backgroundChatActive)'};

  &:hover {
    background-color: ${(props) => !props.active && 'var(--background-hover)'};
  }
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--divide-light);
  padding-right: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 17px;
  color: var(--text-dark);
  flex-wrap: wrap;
  min-width: 0;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

export const Hour = styled.div`
  font-size: 12px;
  color: var(--text-light);
`;

export const LastMessage = styled.div`
  font-size: 14px;
  color: var(--text-light);
  display: flex;
  width: 100%;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
`;