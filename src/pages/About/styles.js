import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
    margin: 0 0 15px;

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  img {
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-left: 295px;

  img {
    margin-right: 20px;
  }

  div {
    background: rgba(0, 0, 0, 0.1);
    padding: 10px 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 16px;
      color: #fff;
    }
  }
`;

export const Content2 = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-right: 295px;

  img {
    margin-left: 20px;
  }

  div {
    background: rgba(0, 0, 0, 0.1);
    padding: 10px 10px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 16px;
      color: #fff;
    }
  }
`;
