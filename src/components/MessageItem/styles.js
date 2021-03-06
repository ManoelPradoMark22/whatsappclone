import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: ${(props) => props.isAuthor ? 'flex-end' : 'flex-start'};
`;

export const MessageContent = styled.div`
  background-color: var(--shape);
  border-radius: 10px;
  box-shadow: 0 1px 1px var(--divide-medium);
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 90%;
  background-color: ${(props) => props.isAuthor ? 'var(--messageAuthor)' : 'var(--shape)'};
`;
export const MessageText = styled.div`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
`;
export const MessageDate = styled.div`
  font-size: 11px;
  color: var(--text-light);
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
`;