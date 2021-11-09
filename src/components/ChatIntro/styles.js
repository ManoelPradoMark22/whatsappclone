import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--backgroundChat);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 6px solid var(--divide-highlight);

  img {
    width: 250px;
    height: auto;
  }

  h1 {
    font-size: 32px;
    color: var(--text-medium);
    font-weight: normal;
    margin-top: 30px;
    text-align: center;
  }

  h2 {
    font-size: 14px;
    color: var(--text-submedium);
    font-weight: normal;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
  }
`;
