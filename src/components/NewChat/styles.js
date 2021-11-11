import styled from 'styled-components';

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: ${(props) => props.show ? 0 : '-415px'};
  top: 0;
  bottom: 0;
  background-color: var(--shape);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--divide);

  transition: all ease 0.5s;
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
  flex: 1;
  overflow-y: auto;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  &:hover {
    background-color: var(--background-hover);
  }
`;

export const ContactName = styled.div`
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