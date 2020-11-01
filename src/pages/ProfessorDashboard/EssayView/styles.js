import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  width: 500px;
  border: 0;
  border-radius: 4px;
  padding: 20px;
`;

export const Info = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;

  div.header {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: 0;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }
  }

  div {
    margin-top: 5px;
    margin-bottom: 5px;

    font-weight: bold;
    color: #333;

    span {
      font-weight: normal;
      color: #666;
    }

    a {
      display: flex;
      align-items: center;

      span {
        color: #666;
        font-size: 14px;
      }
    }
  }
`;

export const Adjusted = styled.div`
  margin-top: 10px;

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  div {
    margin-top: 5px;
    margin-bottom: 5px;

    font-weight: bold;
    color: #333;

    span.Pendente {
      font-weight: bold;
      color: #ff4e4e;
    }
  }

  > button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: #63cc2b;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#63cc2b')};
    }
`;
