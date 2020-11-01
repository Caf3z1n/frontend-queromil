import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    margin-left: 10px;
  }

  div {
    background: rgba(0, 0, 0, 0.1);
    padding: 20px 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const Help = styled.div`
  max-width: 720px;
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

  div {
    background: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;
