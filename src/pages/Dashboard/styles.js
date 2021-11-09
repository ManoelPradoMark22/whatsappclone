import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: var(--background);
`;

export const SideBar = styled.div`
  width: 35%;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--divide);
`;

export const SideBarHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const SideBarHeaderButtons = styled.div`
  display: flex;
`;

export const HeaderButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: var(--iconColor);
  }
`;

export const Search = styled.div`
  background-color: var(--background-light);
  border-bottom: 1px solid var(--divide-light);
  padding: 5px 15px;
`;

export const SearchInput = styled.div`
  background-color: var(--shape);
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  input {
    flex: 1;
    width: 100%;
    border: 0;
    outline: 0;
    background-color: transparent;
    margin-left: 10px;
  }

  svg {
    color: var(--iconColor);
    font-size: small;
  }
`;

export const ChatList = styled.div`

`;

export const ContentArea = styled.div`
  
`;

