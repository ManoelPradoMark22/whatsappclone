import styled from 'styled-components';

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--shape);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--divide);
`;

export const Header = styled.div`
  display: flex;
  background-color: var(--primary);
  align-items: center;
  padding: 60px 15px 15px 15px;
`;

export const BackButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: var(--shape);
  }
`;

export const HeaderTitle = styled.div`
  font-size: 19px;
  height: 40px;
  line-height: 40px;
  flex:1;
  font-weight: bold;
  margin-left: 20px;
  color: var(--shape);

  flex-wrap: wrap;
  min-width: 0;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

export const List = styled.div`
  
`;
