import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #EDEDED;
`;

export const SideBar = styled.div`
  width: 35%;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #DDDDDD;
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
`;

export const Search = styled.div`

`;
export const ChatList = styled.div`

`;

export const ContentArea = styled.div`
  
`;

