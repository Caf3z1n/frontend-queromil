import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid #eee;
    }

    a {
      color: #999;
      font: 14px 'Roboto' sans-serif;
      font-weight: bold;
      transition: color 0.2s;

      & + a {
        margin-left: 20px;
      }

      &:hover {
        color: #444;
      }

      &.selected {
        color: #444;
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;

      color: #444;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      transition: color 0.2s;

      &:hover {
        color: #444;
      }
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Login = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid #eee;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;
    margin-left: 5px;
  }
`;
